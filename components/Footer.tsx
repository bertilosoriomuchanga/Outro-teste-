
import React from 'react';
import { FacebookIcon, InstagramIcon, MailIcon } from './icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social-links">
          <a href="mailto:cese.ujc@gmail.co" aria-label="Email">
            <MailIcon />
          </a>
          <a href="https://www.facebook.com/ceseujc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/cese_ujc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
        <p>&copy; {year} Clube de Estudos Sociais e Económicos (CESE). Todos os direitos reservados.</p>
        <p className="copyright">Uma iniciativa do NEFEN-UJC.</p>
      </div>
    </footer>
  );
};

export default Footer;