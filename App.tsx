
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Objectives from './components/Objectives';
import Structure from './components/Structure';
import Activities from './components/Activities';
import Membership from './components/Membership';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans antialiased">
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Objectives />
        <Structure />
        <Activities />
        <Membership />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
