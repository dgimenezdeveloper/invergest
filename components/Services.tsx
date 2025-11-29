import React from 'react';
import { Home, TrendingUp, Search, Hammer } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'rentals',
      title: "Gestión de Alquileres",
      description: "Especialistas en la gestión integral en Valencia y periferia. Optimizamos alquileres por habitaciones y viviendas completas, garantizando tu tranquilidad.",
      icon: <Home size={24} />,
      features: [
        "Gestión Coliving y Tradicional",
        "Selección rigurosa (Scoring)",
        "Garantía de cobro",
        "Mantenimiento incluido"
      ]
    },
    {
      id: 'shopper-investor',
      title: "Shopper Inversores",
      description: "Detectamos activos de alta rentabilidad antes que el mercado. Analizamos viabilidad, reformas y retorno de inversión esperado.",
      icon: <TrendingUp size={24} />,
      features: [
        "Oportunidades Off-Market",
        "Análisis financiero detallado",
        "Cálculo de rentabilidad neta",
        "Gestión llave en mano"
      ]
    },
    {
      id: 'shopper-personal',
      title: "Shopper Particulares",
      description: "Encontramos tu hogar ideal en cualquier punto de España. Defendemos tus intereses, negociamos el precio y revisamos toda la legalidad.",
      icon: <Search size={24} />,
      features: [
        "Búsqueda a nivel nacional",
        "Negociación experta",
        "Revisión de cargas y contratos",
        "Acompañamiento a notaría"
      ]
    },
    {
      id: 'renovations',
      title: "Reformas y Adecuación",
      description: "Equipo propio especializado en transformar propiedades. Desde Home Staging para alquiler hasta reformas integrales de lujo.",
      icon: <Hammer size={24} />,
      features: [
        "Diseño y ejecución de obra",
        "Home Staging estratégico",
        "Incremento de valor del activo",
        "Plazos garantizados"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4">Nuestra Experiencia</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluciones Inmobiliarias 360°</h3>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Invergest PSI S.L. unifica todos los servicios necesarios para el éxito inmobiliario. 
            Ya sea inversor o propietario particular, tenemos la solución a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};