import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-50 scroll-mt-0">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#253851 1px, transparent 1px), linear-gradient(to right, #253851 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Gestión Integral en España
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Inversión segura,<br />
              <span className="text-brand-700 italic relative inline-block">
                Gestión experta.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-400 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99997C28.4906 3.99999 68.2885 1.74834 198.001 2.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Desde la gestión de alquileres en Valencia hasta el Personal Shopper en toda España. Maximizamos el valor de tus activos inmobiliarios con un enfoque moderno y transparente.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-900 text-white rounded-lg font-medium hover:bg-brand-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Nuestros Servicios <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all hover:border-brand-300"
              >
                Contactar Ahora
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-brand-200/50">
              <div>
                <p className="text-3xl font-serif font-bold text-slate-900">10+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Años Exp.</p>
              </div>
              <div className="w-px h-10 bg-brand-200"></div>
              <div>
                <p className="text-3xl font-serif font-bold text-slate-900">98%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Clientes Satisfechos</p>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 relative w-full lg:h-[600px]">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl h-full transform transition-transform hover:scale-[1.01] duration-700 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
                alt="Interior moderno de lujo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-white/40 max-w-xs">
                <div className="flex gap-1 text-gold-500 mb-2">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-slate-800 italic">"Excelente gestión de mi cartera de alquileres en Valencia. Profesionalidad absoluta."</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-brand-400/20 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};