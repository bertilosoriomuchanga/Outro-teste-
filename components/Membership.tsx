
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { DollarSignIcon } from './icons';

const feeTiers = [
  {
    level: 'I',
    category: 'Membro Participante / Associado',
    responsibility: 'Baixa (Acesso a eventos/conteúdo)',
    monthly: '10 MT',
    annual: '120 MT',
  },
  {
    level: 'II',
    category: 'Membro da Equipa de Área / Sócio',
    responsibility: 'Média (Execução de actividades)',
    monthly: '20 MT',
    annual: '240 MT',
  },
  {
    level: 'III',
    category: 'Diretoria Executiva (CEO, CFO, COO)',
    responsibility: 'Alta (Gestão Operacional)',
    monthly: '35 MT',
    annual: '420 MT',
  },
  {
    level: 'IV',
    category: 'Conselho de Administração (PCA, Vice-PCA)',
    responsibility: 'Máxima (Governança e Estratégia)',
    monthly: '50 MT',
    annual: '600 MT',
  },
];

const Membership: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_40%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(30,64,175,0.15),transparent_40%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Estrutura de Quotas</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">As nossas quotas são progressivas, refletindo o nível de responsabilidade e envolvimento de cada membro no clube.</p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>

        <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="overflow-x-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead className="border-b border-slate-600 text-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Escalão</th>
                  <th scope="col" className="px-6 py-4 font-medium">Categoria do Membro</th>
                  <th scope="col" className="hidden lg:table-cell px-6 py-4 font-medium">Nível de Responsabilidade</th>
                  <th scope="col" className="px-6 py-4 font-medium text-center">Quota Mensal</th>
                  <th scope="col" className="px-6 py-4 font-medium text-center">Quota Anual</th>
                </tr>
              </thead>
              <tbody>
                {feeTiers.map((tier) => (
                  <tr key={tier.level} className="border-b border-slate-700 hover:bg-slate-800/60 transition-colors duration-300">
                    <td className="px-6 py-4 font-mono text-sky-400">{tier.level}</td>
                    <td className="px-6 py-4 font-medium text-slate-100">{tier.category}</td>
                    <td className="hidden lg:table-cell px-6 py-4 text-slate-400">{tier.responsibility}</td>
                    <td className="px-6 py-4 text-center text-slate-300">{tier.monthly}</td>
                    <td className="px-6 py-4 text-center font-semibold text-sky-400">{tier.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`text-center mt-12 text-slate-400 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold text-slate-200 mb-4">Informações de Pagamento</h3>
            <p className="max-w-2xl mx-auto">
                O pagamento da quota <span className="font-semibold text-sky-400">mensal</span> é devido até ao dia 16 de cada mês. O pagamento <span className="font-semibold text-sky-400">anual</span> deve ser efetuado até ao final do primeiro mês de atividades. Os meios de pagamento aceites incluem <span className="font-semibold text-white">Carteiras Móveis</span> e <span className="font-semibold text-white">Numerário</span>, conforme estabelecido pela Diretoria Executiva.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
