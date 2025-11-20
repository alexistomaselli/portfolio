import React from 'react';
import { Code, Database, Layout, Server, Bot } from 'lucide-react';

const skills = [
  { icon: <Bot size={24} />, title: "AI & Automation", desc: "LLM Integration, n8n, Python Scripting, Chatbots" },
  { icon: <Layout size={24} />, title: "Frontend Development", desc: "React, Tailwind CSS, HTML5, CSS3" },
  { icon: <Server size={24} />, title: "Backend Systems", desc: "Node.js, Python, REST APIs" },
  { icon: <Database size={24} />, title: "Database Management", desc: "PostgreSQL, MongoDB, MySQL" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 border-t border-slate-800 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Sobre Mí
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Como Ingeniero en Sistemas, mi enfoque combina la solidez del desarrollo de software tradicional con la innovación de las nuevas tecnologías. Me especializo en crear aplicaciones web robustas y en el diseño de arquitecturas escalables.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Actualmente, mi carrera se centra fuertemente en la <span className="text-blue-400 font-semibold">automatización de procesos y el desarrollo de soluciones con Inteligencia Artificial</span>. Ayudo a empresas y organizaciones a optimizar sus flujos de trabajo, reducir tareas repetitivas e integrar modelos de IA para potenciar la toma de decisiones y la eficiencia operativa.
            </p>
            <div className="flex gap-4">
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <span className="block text-3xl font-bold text-blue-400">7+</span>
                <span className="text-sm text-slate-400">Proyectos Mayores</span>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <span className="block text-3xl font-bold text-emerald-400">100%</span>
                <span className="text-sm text-slate-400">Compromiso</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="text-blue-500 mb-3">{skill.icon}</div>
                <h3 className="font-bold text-white mb-1">{skill.title}</h3>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;