
import React from 'react';
import { MailIcon, FacebookIcon, InstagramIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:cese.ujc@gmail.co',
      icon: <MailIcon />,
      handle: 'cese.ujc@gmail.co',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ceseujc',
      icon: <FacebookIcon />,
      handle: 'ceseujc',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cese_ujc/',
      icon: <InstagramIcon />,
      handle: '@cese_ujc',
    },
  ];

  return (
    <section ref={ref} className="section contact">
      <div className="container">
        <div className={`section-title-wrapper io-translate-y ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="section-title">Entre em Contacto</h2>
          <p className="section-subtitle">
            Siga-nos nas redes sociais ou envie-nos um email para saber mais sobre o clube e as nossas actividades.
          </p>
          <div className="section-divider"></div>
        </div>
        <div className="contact-links-wrapper">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-link-card ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="contact-link-card-icon">{link.icon}</div>
              <h3 className="contact-link-card-title">{link.name}</h3>
              <p className="contact-link-card-handle">{link.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;