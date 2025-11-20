import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-20 border-t border-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">¿Hablamos?</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          Estoy disponible para potenciar tu negocio con soluciones de software a medida, automatizaciones e Inteligencia Artificial.
        </p>

        <div className="flex flex-col items-center gap-6 mb-12">
           {/* Primary WhatsApp Button */}
           <a 
             href={`https://wa.me/${PROFILE.whatsapp}`}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/30"
           >
             <MessageCircle size={24} />
             Contactar por WhatsApp
           </a>

           <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-4">
             <a 
              href={`mailto:${PROFILE.email}`} 
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                <Mail size={20} /> 
              </div>
              {PROFILE.email}
            </a>
            <a 
              href={PROFILE.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                <Linkedin size={20} /> 
              </div>
              /alexistomaselli
            </a>
           </div>
        </div>

        <div className="text-slate-600 text-sm border-t border-slate-900 pt-8">
          &copy; {new Date().getFullYear()} {PROFILE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Contact;