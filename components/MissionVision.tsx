
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MissionVision: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.2),transparent_40%)] rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="p-8 rounded-xl shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Nossa Missão</h3>
              <p className="text-slate-300 leading-relaxed">
                Constituir-se como um polo de excelência na Universidade Joaquim Chissano, através da análise, argumentação e pesquisa, cultivando o espírito crítico entre os estudantes e capacitando-os a representar a UJC em diversos fóruns e atividades.
              </p>
            </div>
          </div>
          <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="p-8 rounded-xl shadow-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-sky-400 mb-4">Nossa Visão</h3>
              <p className="text-slate-300 leading-relaxed">
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
