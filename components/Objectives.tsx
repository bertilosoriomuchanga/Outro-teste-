
import React from 'react';
import { TargetIcon, SearchIcon, MicIcon, UsersIcon, FileTextIcon, GlobeIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const objectives = [
  {
    title: "Análise Crítica",
    description: "Promover o interesse pela análise crítica de questões sociais e económicas atuais.",
    icon: <TargetIcon className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Pesquisa e Dados",
    description: "Desenvolver a prática de pesquisa, investigação e análise de dados entre os membros.",
    icon: <SearchIcon className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Oratória e Debate",
    description: "Fortalecer as competências de oratória, argumentação, debate e escuta ativa.",
    icon: <MicIcon className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Participação Ativa",
    description: "Encorajar a participação estudantil na vida académica, comunitária e em eventos relevantes.",
    icon: <UsersIcon className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Produção Científica",
    description: "Estimular a produção de artigos, relatórios e boletins com os resultados dos debates e estudos.",
    icon: <FileTextIcon className="w-8 h-8 text-sky-400" />
  },
  {
    title: "Intercâmbio de Conhecimento",
    description: "Fomentar o intercâmbio de conhecimento e experiências entre estudantes da UJC e outras instituições.",
    icon: <GlobeIcon className="w-8 h-8 text-sky-400" />
  }
];

const Objectives: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Nossos Objectivos</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">Contribuímos para a formação de cidadãos críticos, participativos e informados.</p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700/80 transition-all duration-500 ease-out hover:shadow-sky-500/20 hover:-translate-y-2 group relative overflow-hidden ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-sky-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-sky-900/50 border border-sky-500/30">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{obj.title}</h3>
                <p className="text-slate-400">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
