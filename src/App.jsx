import React from 'react';
import { Nav, Hero, StatsBar } from './components/NavHero.jsx';
import { Problem, Solution, Workflow, Industries } from './components/Middle.jsx';
import { RealEstate, Mortgage, Testimonials } from './components/Demos.jsx';
import { Pricing, About, FinalCTA, Footer } from './components/Closing.jsx';

export default function App() {
  const [activeId, setActiveId] = React.useState('home');

  React.useEffect(() => {
    const ids = ['home', 'real-estate', 'mortgage', 'workflow', 'testimonials', 'about'];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.15, 0.4, 0.7, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative noise">
      {/* Ambient base glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] radial-glow-gold blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] radial-glow-azure blur-3xl opacity-20"></div>
      </div>

      <Nav activeId={activeId} />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Solution />
        <Workflow />
        <Industries />
        <RealEstate />
        <Mortgage />
        <Testimonials />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
