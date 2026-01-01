
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref} 
      className={`py-24 bg-slate-900 transition-opacity duration-700 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className={`container mx-auto px-6 transition-transform duration-700 ease-in ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">
            Sobre o CESE
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center text-slate-400 text-lg leading-relaxed">
          <p className="mb-6">
            O <span className="font-semibold text-sky-400">Clube de Estudos Sociais e Económicos (CESE)</span> é uma entidade de natureza extracurricular e sem fins lucrativos, constituída como uma iniciativa promovida pelo <span className="font-semibold text-sky-400">Núcleo de Estudantes da Faculdade de Economia e Negócios (NEFEN)</span> da Universidade Joaquim Chissano (UJC).
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
