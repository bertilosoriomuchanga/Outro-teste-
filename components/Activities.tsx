
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TrendingUpIcon, MicIcon, UsersIcon, FileTextIcon, GlobeIcon, TargetIcon } from './icons';

const activities = [
  { 
    title: "Debates Mensais", 
    description: "Discussões sobre temas como desemprego juvenil, inflação, desigualdade e sustentabilidade.",
    icon: <TargetIcon className="w-8 h-8 text-sky-400/50" />
  },
  { 
    title: "Workshops Formativos", 
    description: "Sessões práticas para desenvolver competências em oratória, argumentação e pesquisa.",
    icon: <MicIcon className="w-8 h-8 text-sky-400/50" />
  },
   { 
    title: "Análise de Mercados", 
    description: "Estudo de tendências económicas, relatórios de mercado e análise de políticas financeiras.",
    icon: <TrendingUpIcon className="w-8 h-8 text-sky-400" />
  },
  { 
    title: "Produção Científica", 
    description: "Elaboração de artigos, resumos e criação de uma revista ou boletim científico do Clube.",
    icon: <FileTextIcon className="w-8 h-8 text-sky-400/50" />
  },
  { 
    title: "Publicações e Mídia", 
    description: "Criação de boletins informativos ou podcasts curtos com análises económicas e sociais.",
    icon: <UsersIcon className="w-8 h-8 text-sky-400/50" />
  },
  { 
    title: "Parcerias Estratégicas", 
    description: "Colaboração com outros clubes, docentes, centros de pesquisa e instituições relevantes.",
    icon: <GlobeIcon className="w-8 h-8 text-sky-400/50" />
  }
];

const Activities: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-slate-900/95 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Nossas Actividades</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">Promovemos um ambiente de aprendizagem dinâmico e interactivo.</p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`bg-slate-800 rounded-lg shadow-lg hover:shadow-sky-500/20 transition-all duration-300 p-6 border-t-4 border-sky-500 relative group overflow-hidden ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                 {activity.icon && <div className="absolute top-4 right-4 text-slate-600 group-hover:text-sky-500 transition-colors">{activity.icon}</div>}
                <h3 className="text-xl font-bold text-slate-100 mb-2">{activity.title}</h3>
                <p className="text-slate-400">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
