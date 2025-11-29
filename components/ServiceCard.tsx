import React from 'react';
import { ServiceItem } from '../types';
import { ChevronRight } from 'lucide-react';

interface Props {
  service: ServiceItem;
}

export const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 hover:border-brand-100 flex flex-col h-full relative overflow-hidden hover:-translate-y-1">
      
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 mb-6 shadow-sm border border-brand-100 group-hover:bg-brand-900 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300 z-10">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 z-10 group-hover:text-brand-700 transition-colors">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow z-10">
        {service.description}
      </p>
      
      <div className="border-t border-slate-100 pt-6 mb-6 z-10">
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-500">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div 
        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
        className="inline-flex items-center text-brand-700 font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all mt-auto z-10 cursor-pointer"
      >
        Más Información <ChevronRight size={16} />
      </div>
    </div>
  );
};