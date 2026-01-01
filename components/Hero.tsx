
import React from 'react';
import { ChevronDownIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight animate-fade-in-down text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
          Clube de Estudos Sociais e Económicos
        </h1>
        <p className="text-lg md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto animate-fade-in-up">
          Um polo de excelência na Universidade Joaquim Chissano, cultivando o espírito crítico através da análise, argumentação e pesquisa.
        </p>
      </div>
      <div className="absolute bottom-10 animate-bounce z-10">
        <ChevronDownIcon className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
