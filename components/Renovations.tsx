import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';

export const Renovations: React.FC = () => {
  return (
    <section id="renovations" className="py-24 bg-slate-900 text-white scroll-mt-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 order-2 lg:order-1 w-full">
             <div className="relative">
               {/* Main Image */}
               <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Reforma integral salón" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
               />
               
               {/* Overlapping Image */}
               <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Detalle cocina" 
                className="absolute -bottom-10 -right-10 w-2/5 rounded-xl shadow-xl border-4 border-slate-900 hidden md:block" 
               />

               {/* Stat Card */}
               <div className="absolute top-8 -left-8 bg-white text-slate-900 p-6 rounded-lg shadow-xl max-w-[180px] hidden md:block">
                  <p className="text-4xl font-serif font-bold text-brand-600 mb-1">+15%</p>
                  <p className="text-xs font-semibold uppercase leading-tight">Incremento medio de valor tras reforma</p>
               </div>
             </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-gold-400 text-xs font-bold uppercase tracking-widest mb-6">
              Reformas & Home Staging
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transformamos espacios,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                Creamos Valor.
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              Nuestro equipo de reformas no solo embellece, analiza. Diseñamos intervenciones estratégicas para maximizar la renta del alquiler o el precio de venta, ajustándonos a presupuestos reales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {[
                "Presupuestos cerrados",
                "Equipo técnico propio",
                "Home Staging profesional",
                "Gestión de licencias",
                "Materiales de calidad",
                "Cumplimiento de plazos"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-brand-400" />
                  </div>
                  <span className="text-slate-200 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-slate-900 rounded-lg hover:bg-gold-400 transition-colors font-bold text-sm uppercase tracking-wide">
              Solicitar Presupuesto <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};