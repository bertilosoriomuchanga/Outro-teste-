
import React from 'react';
import { MailIcon, FacebookIcon, InstagramIcon } from './icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:cese.ujc@gmail.co',
      icon: <MailIcon className="w-8 h-8" />,
      handle: 'cese.ujc@gmail.co',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ceseujc',
      icon: <FacebookIcon className="w-8 h-8" />,
      handle: 'ceseujc',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cese_ujc/',
      icon: <InstagramIcon className="w-8 h-8" />,
      handle: '@cese_ujc',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-900/95 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-sky-400 inline-block">Entre em Contacto</h2>
          <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
            Siga-nos nas redes sociais ou envie-nos um email para saber mais sobre o clube e as nossas actividades.
          </p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg w-72 hover:bg-slate-800/80 hover:-translate-y-2 transition-all duration-300 hover:border-sky-500 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-sky-400 mb-4">{link.icon}</div>
              <h3 className="text-xl font-bold text-slate-100">{link.name}</h3>
              <p className="text-slate-400 truncate w-full">{link.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
