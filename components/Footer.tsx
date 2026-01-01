
import React from 'react';
import { FacebookIcon, InstagramIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:cese.ujc@gmail.co" aria-label="Email" className="hover:text-sky-400 transition-colors">
            <MailIcon className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/ceseujc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-sky-400 transition-colors">
            <FacebookIcon className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/cese_ujc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-sky-400 transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {year} Clube de Estudos Sociais e Económicos (CESE). Todos os direitos reservados.</p>
        <p className="text-sm text-slate-500 mt-2">Uma iniciativa do NEFEN-UJC.</p>
      </div>
    </footer>
  );
};

export default Footer;
