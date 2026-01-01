
import React from 'react';
import { ChevronDownIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="hero">
        <div className="hero-bg-1"></div>
        <div className="hero-bg-2"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-down">
          Clube de Estudos Sociais e Económicos
        </h1>
        <p className="hero-subtitle animate-fade-in-up">
          Um polo de excelência na Universidade Joaquim Chissano, cultivando o espírito crítico através da análise, argumentação e pesquisa.
        </p>
      </div>
      <div className="hero-scroll-indicator animate-bounce">
        <ChevronDownIcon />
      </div>
    </section>
  );
};

export default Hero;