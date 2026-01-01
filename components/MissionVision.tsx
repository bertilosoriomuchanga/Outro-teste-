
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MissionVision: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="section mission-vision">
        <div className="mission-vision-bg"></div>
      <div className="container">
        <div className="mission-vision-grid">
          <div className={`io-translate-x-left ${isVisible ? 'is-visible' : ''}`}>
            <div className="mission-vision-card">
              <h3 className="mission-vision-card-title">Nossa Missão</h3>
              <p>
                Constituir-se como um polo de excelência na Universidade Joaquim Chissano, através da análise, argumentação e pesquisa, cultivando o espírito crítico entre os estudantes e capacitando-os a representar a UJC em diversos fóruns e atividades.
              </p>
            </div>
          </div>
          <div className={`io-translate-x-right ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="mission-vision-card">
              <h3 className="mission-vision-card-title">Nossa Visão</h3>
              <p>
                Ser uma referência na promoção do debate construtivo e na produção de conhecimento sobre temas sociais e económicos, fortalecendo a cultura investigativa e o protagonismo intelectual dos estudantes para o desenvolvimento local, nacional e global.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;