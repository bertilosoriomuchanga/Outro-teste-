
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Publications: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  return (
    <section ref={ref} className="section publications">
      <div className={`container io-translate-y ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="section-title">Publicações</h2>
        <div className="section-divider"></div>
        <p>
          O nosso clube irá iniciar as suas actividades em 2026. Em breve, esta secção contará com artigos, análises e boletins produzidos pelos nossos membros. Fique atento!
        </p>
      </div>
    </section>
  );
};

export default Publications;