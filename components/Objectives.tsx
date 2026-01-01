
import React from 'react';
import { TargetIcon, SearchIcon, MicIcon, UsersIcon, FileTextIcon, GlobeIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const objectives = [
  {
    title: "Análise Crítica",
    description: "Promover o interesse pela análise crítica de questões sociais e económicas atuais.",
    icon: <TargetIcon />
  },
  {
    title: "Pesquisa e Dados",
    description: "Desenvolver a prática de pesquisa, investigação e análise de dados entre os membros.",
    icon: <SearchIcon />
  },
  {
    title: "Oratória e Debate",
    description: "Fortalecer as competências de oratória, argumentação, debate e escuta ativa.",
    icon: <MicIcon />
  },
  {
    title: "Participação Ativa",
    description: "Encorajar a participação estudantil na vida académica, comunitária e em eventos relevantes.",
    icon: <UsersIcon />
  },
  {
    title: "Produção Científica",
    description: "Estimular a produção de artigos, relatórios e boletins com os resultados dos debates e estudos.",
    icon: <FileTextIcon />
  },
  {
    title: "Intercâmbio de Conhecimento",
    description: "Fomentar o intercâmbio de conhecimento e experiências entre estudantes da UJC e outras instituições.",
    icon: <GlobeIcon />
  }
];

const Objectives: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="section">
      <div className="container">
        <div className={`section-title-wrapper io-translate-y ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Nossos Objectivos</h2>
          <p className="section-subtitle">Contribuímos para a formação de cidadãos críticos, participativos e informados.</p>
          <div className="section-divider"></div>
        </div>
        <div className="objectives-grid">
          {objectives.map((obj, index) => (
            <div 
              key={index} 
              className={`objective-card ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="objective-card-content">
                <div className="objective-card-icon-wrapper">
                  {obj.icon}
                </div>
                <h3 className="objective-card-title">{obj.title}</h3>
                <p>{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;