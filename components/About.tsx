
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref} 
      id="about"
      className={`section io-fade-in ${isVisible ? 'is-visible' : ''}`}
    >
      <div className={`container io-translate-y ${isVisible ? 'is-visible' : ''}`}>
        <div className="section-title-wrapper">
          <h2 className="section-title">
            Sobre o CESE
          </h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <p>
            O <span className="highlight">Clube de Estudos Sociais e Económicos (CESE)</span> é uma entidade de natureza extracurricular e sem fins lucrativos, constituída como uma iniciativa promovida pelo <span className="highlight">Núcleo de Estudantes da Faculdade de Economia e Negócios (NEFEN)</span> da Universidade Joaquim Chissano (UJC).
          </p>
          <p>
            Com autonomia administrativa e operacional, o CESE está institucionalmente subordinado ao NEFEN, que exerce a coordenação institucional na UJC. O nosso propósito é formar cidadãos conscientes e capazes de debater ideias com base em factos e respeito mútuo, num contexto em que as questões sociais e económicas influenciam diretamente a vida das pessoas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;