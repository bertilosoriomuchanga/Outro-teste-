
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Publications: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className={`container mx-auto px-6 text-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Publicações</h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        <p className="text-lg text-slate-400 mt-8 max-w-2xl mx-auto">
          O nosso clube irá iniciar as suas actividades em 2026. Em breve, esta secção contará com artigos, análises e boletins produzidos pelos nossos membros. Fique atento!
        </p>
      </div>
    </section>
  );
};

export default Publications;
