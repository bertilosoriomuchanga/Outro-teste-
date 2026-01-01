
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TrendingUpIcon, MicIcon, UsersIcon, FileTextIcon, GlobeIcon, TargetIcon } from './icons';

const activities = [
  { 
    title: "Debates Mensais", 
    description: "Discussões sobre temas como desemprego juvenil, inflação, desigualdade e sustentabilidade.",
    icon: <TargetIcon />
  },
  { 
    title: "Workshops Formativos", 
    description: "Sessões práticas para desenvolver competências em oratória, argumentação e pesquisa.",
    icon: <MicIcon />
  },
   { 
    title: "Análise de Mercados", 
    description: "Estudo de tendências económicas, relatórios de mercado e análise de políticas financeiras.",
    icon: <TrendingUpIcon />
  },
  { 
    title: "Produção Científica", 
    description: "Elaboração de artigos, resumos e criação de uma revista ou boletim científico do Clube.",
    icon: <FileTextIcon />
  },
  { 
    title: "Publicações e Mídia", 
    description: "Criação de boletins informativos ou podcasts curtos com análises económicas e sociais.",
    icon: <UsersIcon />
  },
  { 
    title: "Parcerias Estratégicas", 
    description: "Colaboração com outros clubes, docentes, centros de pesquisa e instituições relevantes.",
    icon: <GlobeIcon />
  }
];

const Activities: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="section activities">
      <div className="container">
        <div className={`section-title-wrapper io-translate-y ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Nossas Actividades</h2>
          <p className="section-subtitle">Promovemos um ambiente de aprendizagem dinâmico e interactivo.</p>
          <div className="section-divider"></div>
        </div>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={`activity-card ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
                {activity.icon && <div className="activity-card-icon">{activity.icon}</div>}
                <h3 className="activity-card-title">{activity.title}</h3>
                <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;