
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
    className={`text-center p-6 bg-slate-800 rounded-lg shadow-lg border border-slate-700 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-sky-500/20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-24 h-24 mx-auto rounded-full mb-4 bg-slate-700/50 flex items-center justify-center border-2 border-slate-600">
      <UserIcon className="w-12 h-12 text-sky-400" />
    </div>
    <h4 className="text-xl font-bold text-slate-100">{name}</h4>
    <p className="text-sky-500">{role}</p>
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
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Estrutura e Membros</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">Conheça a equipa que lidera as nossas iniciativas.</p>
           <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-300 mb-8">Conselho de Administração</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {boardMembers.map((member, index) => (
              <MemberCard key={member.name} name={member.name} role={member.role} isVisible={isVisible} delay={index * 100} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-slate-300 mb-8">Direcção Executiva</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
