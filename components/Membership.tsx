
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
    <section ref={ref} className="section membership">
      <div className="membership-bg-1"></div>
      <div className="membership-bg-2"></div>
      <div className="membership-bg-3"></div>
      
      <div className="container">
        <div className={`section-title-wrapper io-translate-y ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Estrutura de Quotas</h2>
          <p className="section-subtitle">As nossas quotas são progressivas, refletindo o nível de responsabilidade e envolvimento de cada membro no clube.</p>
          <div className="section-divider"></div>
        </div>

        <div className={`io-scale ${isVisible ? 'is-visible' : ''}`}>
          <div className="membership-table-wrapper">
            <table className="membership-table">
              <thead>
                <tr>
                  <th>Escalão</th>
                  <th>Categoria do Membro</th>
                  <th className="hidden-lg">Nível de Responsabilidade</th>
                  <th>Quota Mensal</th>
                  <th>Quota Anual</th>
                </tr>
              </thead>
              <tbody>
                {feeTiers.map((tier) => (
                  <tr key={tier.level}>
                    <td className="tier-level">{tier.level}</td>
                    <td className="tier-category">{tier.category}</td>
                    <td className="tier-responsibility hidden-lg">{tier.responsibility}</td>
                    <td className="tier-monthly">{tier.monthly}</td>
                    <td className="tier-annual">{tier.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`membership-payment-info io-translate-y ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            <h3>Informações de Pagamento</h3>
            <p>
                O pagamento da quota <span className="highlight">mensal</span> é devido até ao dia 16 de cada mês. O pagamento <span className="highlight">anual</span> deve ser efetuado até ao final do primeiro mês de atividades. Os meios de pagamento aceites incluem <span className="highlight-white">Carteiras Móveis</span> e <span className="highlight-white">Numerário</span>, conforme estabelecido pela Diretoria Executiva.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;