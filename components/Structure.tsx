
import React from 'react';
import { UserIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface MemberCardProps {
  name: string;
  role: string;
  isVisible: boolean;
  delay: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, isVisible, delay }) => (
  <div 
    className={`member-card ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="member-avatar">
      <UserIcon />
    </div>
    <h4 className="member-name">{name}</h4>
    <p className="member-role">{role}</p>
  </div>
);

const boardMembers = [
  { name: 'Cecília Mungoi', role: 'Presidente do Conselho de Administração (PCA)' },
  { name: 'Kelyussra Kumay', role: 'Vice-Presidente do Conselho de Administração' },
];

const executiveMembers = [
  { name: 'Bertil Muchanga', role: 'Chief Executive Officer (CEO)' },
  { name: 'Clayton Ngovene', role: 'Chief Financial Officer (CFO)' },
  { name: 'Sousa Nantide', role: 'Chief Operating Officer (COO)' },
];

const Structure: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="section structure">
      <div className="container">
        <div className={`section-title-wrapper io-translate-y ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Estrutura e Membros</h2>
          <p className="section-subtitle">Conheça a equipa que lidera as nossas iniciativas.</p>
           <div className="section-divider"></div>
        </div>

        <div className="board-members-wrapper">
          <h3>Conselho de Administração</h3>
          <div className="board-members-grid">
            {boardMembers.map((member, index) => (
              <MemberCard key={member.name} name={member.name} role={member.role} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>
        </div>

        <div>
          <h3>Direcção Executiva</h3>
          <div className="executive-members-grid">
            {executiveMembers.map((member, index) => (
              <MemberCard key={member.name} name={member.name} role={member.role} isVisible={isVisible} delay={(index + boardMembers.length) * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;