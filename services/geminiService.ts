import { GoogleGenAI, Chat } from "@google/genai";
import { ChatMessage } from "../types";

// System instruction to define the persona of the AI
const SYSTEM_INSTRUCTION = `
Eres el Asistente Virtual Inteligente de Invergest PSI S.L., una empresa inmobiliaria líder.
Tu tono es profesional, cercano, moderno y eficiente.
Tu objetivo es ayudar a los visitantes a entender los servicios de la empresa y guiarlos hacia el formulario de contacto o responder dudas específicas.

INFORMACIÓN DE LA EMPRESA:
1. GESTIÓN DE ALQUILERES:
   - Especialidad: Valencia y periferia.
   - Tipos: Alquiler por habitaciones (coliving) y alquiler tradicional para familias.
   - Valor: Gestión integral, selección de inquilinos, cobros garantizados.

2. PERSONAL SHOPPER INMOBILIARIO (INVERSORES):
   - Búsqueda de oportunidades de alta rentabilidad.
   - Análisis de mercado.
   - Gestión de compra y posterior puesta en alquiler.

3. PERSONAL SHOPPER INMOBILIARIO (PARTICULARES):
   - Ámbito: Toda España.
   - Servicios: Asesoramiento integral, búsqueda de vivienda, negociación de precio, revisión de documentación legal (notas simples, contratos), acompañamiento hasta notaría.

4. REFORMAS Y ADECUACIÓN:
   - Equipo propio de reformas.
   - Home Staging y adecuación para alquiler (maximizar renta).
   - Reformas integrales para vivienda habitual.

SIEMPRE responde en Español.
Si te preguntan por precios específicos, indica que dependen del proyecto y sugiere contactar mediante el formulario para un presupuesto personalizado.
Sé conciso y directo.
`;

let chatSession: Chat | null = null;

export const getChatResponseStream = async (
  history: ChatMessage[],
  newMessage: string
): Promise<AsyncIterable<string>> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key not found");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Initialize chat if not already active or if history is empty (new session)
    if (!chatSession || history.length === 0) {
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
            },
        });
    }

    // Convert internal history format if needed, but the SDK maintains its own history in the `chatSession` object.
    // However, since we are using a singleton-like pattern here for simplicity in this demo, 
    // we rely on the `chatSession` state.
    
    // Send message and get stream
    const result = await chatSession.sendMessageStream({ message: newMessage });
    
    // Create an async generator to yield text chunks
    async function* streamGenerator() {
      for await (const chunk of result) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    }

    return streamGenerator();

  } catch (error) {
    console.error("Error in Gemini Service:", error);
    // Return a generator that yields an error message
    async function* errorGenerator() {
      yield "Lo siento, hubo un problema al conectar con el asistente. Por favor intenta más tarde.";
    }
    return errorGenerator();
  }
};
