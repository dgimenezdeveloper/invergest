import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Alquileres',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias ${formData.name}. Hemos recibido tu consulta sobre ${formData.service}. Contactaremos contigo pronto.`);
    setFormData({ name: '', email: '', phone: '', service: 'Alquileres', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-brand-50 scroll-mt-20 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info (Left Panel) */}
          <div className="bg-brand-900 text-white p-10 lg:p-14 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Contacta con Invergest</h2>
              <p className="text-brand-100 mb-10 leading-relaxed">
                Estamos listos para ayudarte a rentabilizar tu patrimonio o encontrar tu hogar ideal. Respuesta garantizada en 24h.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Teléfono</h4>
                    <a href="tel:+34960000000" className="text-brand-100 hover:text-white transition-colors block mt-1">+34 960 00 00 00</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <Mail className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:info@invergestpsi.com" className="text-brand-100 hover:text-white transition-colors block mt-1">info@invergestpsi.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                    <MapPin className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Oficinas</h4>
                    <p className="text-brand-100 mt-1">Av. de Francia, Valencia<br/>(Cita previa)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
               <p className="flex items-center gap-2 text-sm text-brand-200">
                 <MessageSquare size={16} /> Hablamos Español, English & Français
               </p>
            </div>
          </div>

          {/* Form (Right Panel) */}
          <div className="p-10 lg:p-14 lg:w-3/5 bg-white">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-8">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">¿En qué podemos ayudarte?</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none"
                  >
                    <option value="Alquileres">Gestión de Alquileres</option>
                    <option value="Inversión">Inversión Inmobiliaria</option>
                    <option value="Compra">Compra de Vivienda (Personal Shopper)</option>
                    <option value="Reformas">Reformas y Adecuación</option>
                    <option value="Otro">Otras consultas</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  placeholder="Cuéntanos brevemente tu caso..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-900 text-white font-bold rounded-lg hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              >
                Enviar Solicitud <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};