// Nav + Hero + StatsBar — AINAM Automation
import React from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Icon from './Icons.jsx';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'mortgage', label: 'Mortgage' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'about', label: 'About' },
];

function Logo({ small }) {
  return (
    <a href="#home" className="flex items-center gap-2.5 group">
      <span className="relative">
        <span className="absolute inset-0 rounded-md radial-glow-gold blur-md opacity-80"></span>
        <span className="relative grid place-items-center w-8 h-8 rounded-md bg-gradient-to-br from-gold-300 to-gold-600 ring-1 ring-gold-400/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#1a1208" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L12 4l6 14"/>
            <path d="M8.5 13h7"/>
          </svg>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-[0.18em] text-white">AINAM</span>
        <span className="text-[9px] tracking-[0.32em] text-white/45 mt-0.5">AUTOMATION</span>
      </span>
    </a>
  );
}

function Nav({ activeId }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const h = document.documentElement;
      const max = (h.scrollHeight - h.clientHeight) || 1;
      setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-4'}`}
        style={{ animation: 'nav-in 0.6s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div className={`mx-auto max-w-7xl px-5 lg:px-8`}>
          <div className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled ? 'glass-strong px-4 py-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] ring-1 ring-white/10' : 'px-1 py-1 bg-transparent'}`}>
            {/* hairline accent that appears with glass */}
            <div className={`absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
            <Logo />
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => {
                const active = activeId === l.id;
                return (
                  <a key={l.id} href={`#${l.id}`}
                     className={`relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${active ? 'text-white bg-white/[0.06] ring-1 ring-gold-400/25' : 'text-white/65 hover:text-white'}`}>
                    {l.label}
                    {active && <span className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(239,195,115,0.8)]"></span>}
                  </a>
                );
              })}
            </nav>
            <div className="flex items-center gap-2">
              <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
                 className="hidden sm:inline-flex items-center gap-1.5 btn-gold rounded-xl px-4 py-2 text-[13px] font-semibold">
                Book Demo
                <Icon.ArrowRight size={14} stroke={2} />
              </a>
              <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 rounded-lg text-white/80 hover:bg-white/5 ring-1 ring-white/10">
                <Icon.Menu size={22} />
              </button>
            </div>
          </div>
        </div>
        {/* scroll progress */}
        <div className={`mx-auto max-w-7xl px-5 lg:px-8 mt-2 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px bg-white/5 rounded-full overflow-hidden">
            <div className="h-full scroll-progress transition-[width] duration-100" style={{ width: `${progress * 100}%` }}></div>
          </div>
        </div>
      </header>
      {menuOpen ? (
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-ink-900/80 backdrop-blur-xl" onClick={() => setMenuOpen(false)}></div>
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }}
                        transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                        className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm glass-strong p-6 flex flex-col">
              <div className="flex items-center justify-between">
                <Logo small />
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg text-white/80 hover:bg-white/5">
                  <Icon.Close size={20} />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}
                     className="flex items-center justify-between px-4 py-3.5 rounded-xl text-white/85 hover:bg-white/5">
                    <span className="text-[15px] font-medium">{l.label}</span>
                    <Icon.Chevron size={16} stroke={1.5} />
                  </a>
                ))}
              </nav>
              <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
                 className="mt-auto btn-gold rounded-xl px-4 py-3.5 text-center text-[14px] font-semibold">
                Book a Demo →
              </a>
            </motion.div>
          </div>
        ) : null}
    </>
  );
}

/* ----------------- HERO ----------------- */

function HeroBg() {
  // Animated nodes + connecting lines, parallax grid, traveling data packets
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg grid-bg-drift opacity-[0.55]" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }} />
      <div className="absolute inset-0 grid-bg-fine opacity-[0.35]" style={{ maskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 50%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 30%, black 0%, transparent 50%)' }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] radial-glow-gold blur-2xl opacity-90" />
      <div className="absolute top-40 -left-40 w-[600px] h-[600px] radial-glow-azure blur-2xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] radial-glow-violet blur-2xl opacity-50" />

      {/* Distant orbit ring */}
      <div className="absolute -right-32 top-1/3 w-[700px] h-[700px] rounded-full border border-white/[0.04] opacity-60"></div>
      <div className="absolute -right-44 top-1/4 w-[900px] h-[900px] rounded-full border border-white/[0.025] opacity-50"></div>

      {/* SVG flow lines with traveling packets */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="line-gold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#EFC373" stopOpacity="0"/>
            <stop offset="50%" stopColor="#EFC373" stopOpacity="0.55"/>
            <stop offset="100%" stopColor="#EFC373" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="line-azure" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#5BB2FF" stopOpacity="0"/>
            <stop offset="50%" stopColor="#5BB2FF" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#5BB2FF" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="packet-gold">
            <stop offset="0%" stopColor="#FFE9B8"/>
            <stop offset="40%" stopColor="#EFC373"/>
            <stop offset="100%" stopColor="#EFC373" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="packet-azure">
            <stop offset="0%" stopColor="#CFE8FF"/>
            <stop offset="40%" stopColor="#5BB2FF"/>
            <stop offset="100%" stopColor="#5BB2FF" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <path id="bgline-1" d="M 120 220 C 360 220, 420 480, 720 480 S 1100 720, 1340 720" stroke="url(#line-gold)" strokeWidth="1" className="flowline" />
        <path id="bgline-2" d="M 100 600 C 320 600, 480 360, 720 360 S 1120 220, 1340 220" stroke="url(#line-azure)" strokeWidth="1" className="flowline" />
        <path id="bgline-3" d="M 220 780 C 460 780, 560 540, 820 540 S 1200 460, 1340 460" stroke="url(#line-gold)" strokeWidth="0.8" opacity="0.6" className="flowline" />
      </svg>

      {/* Traveling data packets (CSS offset-path) */}
      <div className="absolute inset-0">
        <div className="packet" style={{ offsetPath: "path('M 120 220 C 360 220, 420 480, 720 480 S 1100 720, 1340 720')", position: 'absolute', left: 0, top: 0 }}>
          <div className="w-1.5 h-1.5 rounded-full bg-gold-300 shadow-[0_0_16px_4px_rgba(239,195,115,0.7)]"></div>
        </div>
        <div className="packet delay-2" style={{ offsetPath: "path('M 100 600 C 320 600, 480 360, 720 360 S 1120 220, 1340 220')", position: 'absolute', left: 0, top: 0 }}>
          <div className="w-1.5 h-1.5 rounded-full bg-azure-300 shadow-[0_0_16px_4px_rgba(91,178,255,0.7)]"></div>
        </div>
        <div className="packet delay-3" style={{ offsetPath: "path('M 220 780 C 460 780, 560 540, 820 540 S 1200 460, 1340 460')", position: 'absolute', left: 0, top: 0, animationDuration: '6s' }}>
          <div className="w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_10px_3px_rgba(239,195,115,0.6)]"></div>
        </div>
      </div>

      {/* dots */}
      {[
        ['12%','22%','gold'],['72%','28%','azure'],['86%','62%','gold'],
        ['18%','72%','violet'],['46%','40%','azure'],['58%','82%','gold']
      ].map(([l,t,c],i) => (
        <span key={i} className="absolute" style={{ left: l, top: t }}>
          <span className={`block w-2 h-2 rounded-full ${c==='gold'?'bg-gold-400':c==='azure'?'bg-azure-400':'bg-violet-500'}`} />
          <span className={`absolute inset-0 rounded-full pulse-ring ${c==='gold'?'bg-gold-400/40':c==='azure'?'bg-azure-400/40':'bg-violet-500/40'}`} />
        </span>
      ))}
    </div>
  );
}

function FloatingCard({ children, className = '', style, delay = 0, floatClass = 'floaty' }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0.96 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
      style={style}
    >
      <div className={floatClass}>
        {children}
      </div>
    </motion.div>
  );
}

function MiniCard({ tone, label, title, sub, right, icon: I }) {
  const toneRing = {
    gold: 'ring-gold-400/30',
    azure: 'ring-azure-400/30',
    green: 'ring-emerald-400/30',
    violet: 'ring-violet-500/30',
  }[tone];
  const dot = {
    gold: 'bg-gold-400 shadow-[0_0_12px_2px_rgba(239,195,115,0.7)]',
    azure: 'bg-azure-400 shadow-[0_0_12px_2px_rgba(91,178,255,0.7)]',
    green: 'bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.7)]',
    violet: 'bg-violet-500 shadow-[0_0_12px_2px_rgba(138,108,255,0.7)]',
  }[tone];
  return (
    <div className={`glass-strong ${toneRing} ring-1 rounded-2xl p-3.5 w-[230px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]`}>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/55">
        <span className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dot}`}></span>
          {label}
        </span>
        {right && <span className="text-white/80 normal-case tracking-normal text-[11px] font-medium">{right}</span>}
      </div>
      <div className="mt-2 flex items-start gap-2.5">
        {I && (
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-white/10 text-white/85">
            <I size={16} />
          </span>
        )}
        <div className="min-w-0">
          <div className="text-[14px] font-semibold text-white leading-tight truncate">{title}</div>
          <div className="text-[11.5px] text-white/55 leading-tight mt-0.5">{sub}</div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full h-[540px] lg:h-[620px] perspective">
      {/* Ambient orbital ring behind dashboard */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="relative w-[78%] max-w-[460px] aspect-[5/6]">
          <div className="absolute -inset-10 rounded-full border border-gold-400/15 opacity-70" style={{ background: 'conic-gradient(from 180deg, rgba(239,195,115,0.18), transparent 30%, transparent 70%, rgba(91,178,255,0.18))', maskImage: 'radial-gradient(circle, transparent 55%, black 60%, black 70%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle, transparent 55%, black 60%, black 70%, transparent 75%)' }}></div>
        </div>
      </div>

      {/* central holographic dashboard */}
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="absolute inset-0 grid place-items-center"
      >
        <div className="relative w-[78%] max-w-[460px] aspect-[5/6] tilt-3d">
          {/* outer card */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 backdrop-blur-2xl shadow-[0_60px_120px_-30px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]"></div>
          {/* top edge highlight */}
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          {/* fine grid */}
          <div className="absolute inset-0 rounded-[28px] grid-bg-fine opacity-30 overflow-hidden"></div>
          {/* corner caret marks */}
          {[
            'top-3 left-3 border-t border-l',
            'top-3 right-3 border-t border-r',
            'bottom-3 left-3 border-b border-l',
            'bottom-3 right-3 border-b border-r',
          ].map((c, i) => (
            <span key={i} className={`absolute w-3 h-3 ${c} border-gold-400/45`}></span>
          ))}
          <div className="absolute -inset-px rounded-[28px] ring-gold-soft pointer-events-none"></div>

          <div className="relative p-6 h-full flex flex-col" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-gold-300/90">
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
                  <span className="relative w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]"></span>
                </span>
                Live Workflow
              </div>
              <div className="font-mono text-[10px] text-white/40">ainam.run/0249</div>
            </div>

            <div className="mt-4 font-mono text-[11.5px] text-white/65 leading-relaxed space-y-0.5">
              <div><span className="text-azure-400">▸</span> Inbound lead detected</div>
              <div><span className="text-azure-400">▸</span> Parsing intent…</div>
              <div><span className="text-emerald-400">▸</span> Score: <span className="text-gold-300 font-semibold">HOT · 92</span></div>
              <div><span className="text-emerald-400">▸</span> Broker alert dispatched</div>
            </div>

            {/* Score gauge */}
            <div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/[0.08] p-4 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 conic-sweep opacity-40 rounded-full"></div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">Lead Quality Score</div>
              <div className="mt-1 flex items-baseline gap-2">
                <CountUp from={0} to={92} duration={1.4} className="text-[44px] font-bold gold-text leading-none tracking-tight" />
                <span className="text-white/45 text-[12px]">/100</span>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-md bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/30">HOT</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 }} className="h-full bg-gradient-to-r from-gold-400 to-gold-300 shadow-[0_0_12px_rgba(239,195,115,0.6)]" />
              </div>
              {/* tick marks */}
              <div className="mt-1.5 flex justify-between text-[8px] font-mono text-white/30">
                <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
              </div>
            </div>

            {/* mini stat row */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[['Intent','Buy','azure'],['Budget','₹1.5Cr','gold'],['ETA','7d','green']].map(([k,v,tone],i)=>(
                <div key={i} className="rounded-xl bg-white/[0.03] ring-1 ring-white/[0.06] p-2.5 relative overflow-hidden">
                  <div className="text-[9px] uppercase tracking-[0.16em] text-white/40">{k}</div>
                  <div className={`text-[13px] font-semibold mt-0.5 ${tone==='gold'?'text-gold-300':tone==='azure'?'text-azure-300':'text-emerald-300'}`}>{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[10px] text-white/45 font-mono">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                response · 0.4s
              </div>
              <div className="flex items-center gap-1.5">
                {/* mini spark */}
                <div className="flex items-end gap-0.5 h-3">
                  {[0.4, 0.7, 0.5, 0.85, 0.6, 1, 0.75].map((h, i) => (
                    <div key={i} className="w-0.5 bg-gold-400/70 rounded-sm spark-bar" style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}></div>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-white/40">v2.4</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <FloatingCard delay={0.5} className="top-2 left-0 lg:-left-4" floatClass="floaty">
        <MiniCard tone="azure" label="New Lead" title="Aarav Mehta" sub="Bandra · 2BHK · ₹1.5 Cr" icon={Icon.Send} right="just now" />
      </FloatingCard>
      <FloatingCard delay={0.7} className="top-32 right-0 lg:-right-6" floatClass="floaty-2">
        <MiniCard tone="gold" label="AI Score" title="HOT · Score 92" sub="High urgency · site visit" icon={Icon.Flame} right="0.4s" />
      </FloatingCard>
      <FloatingCard delay={0.9} className="bottom-32 -left-2 lg:-left-10" floatClass="floaty-3">
        <MiniCard tone="violet" label="Broker Alert" title="Sent to Priya R." sub="Telegram + SMS" icon={Icon.Phone} right="✓" />
      </FloatingCard>
      <FloatingCard delay={1.05} className="bottom-12 right-0 lg:-right-2" floatClass="floaty">
        <MiniCard tone="green" label="Follow-Up" title="Sequence Active" sub="3 touches scheduled" icon={Icon.Refresh} right="auto" />
      </FloatingCard>
      <FloatingCard delay={1.2} className="-bottom-2 left-1/2 -translate-x-1/2" floatClass="floaty-2">
        <MiniCard tone="gold" label="Appointment" title="Booked · Fri 4PM" sub="Bandra site visit" icon={Icon.Calendar} right="conf" />
      </FloatingCard>
    </div>
  );
}

function CountUp({ from = 0, to, duration = 1.2, prefix = '', suffix = '', className = '' }) {
  const ref = React.useRef(null);
  const inView = useInView ? useInView(ref, { once: true, margin: '-10% 0px' }) : true;
  const [val, setVal] = React.useState(from);
  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView]);
  const display = Number.isInteger(to) ? Math.round(val).toLocaleString() : val.toFixed(1);
  return <span ref={ref} className={className}>{prefix}{display}{suffix}</span>;
}

function HeroCtaButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
         className="btn-gold inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
        Book a Demo
        <Icon.ArrowRight size={15} stroke={2} />
      </a>
      <a href="#workflow"
         className="btn-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
        See How It Works
      </a>
      <a href="mailto:ainamautomationtech@gmail.com?subject=Free%20Automation%20Audit"
         className="btn-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
        Get Free Automation Audit
      </a>
      <a href="mailto:ainamautomationtech@gmail.com"
         className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white/70 hover:text-white">
        Contact Founder
        <Icon.ArrowRight size={14} stroke={2} />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" data-screen-label="01 Hero" className="relative pt-32 lg:pt-40 pb-24 lg:pb-28">
      <HeroBg />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5 backdrop-blur"
            >
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/65">AI Automation · Live</span>
            </motion.div>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] font-bold text-white"
            >
              AI Automation That Turns{' '}
              <span className="relative inline-block">
                <span className="gold-text font-serif italic">Leads</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none">
                  <path d="M1 7 C 50 2, 150 2, 199 7" stroke="url(#under)" strokeWidth="1.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="under" x1="0" x2="1">
                      <stop offset="0" stopColor="#F6DBA0" stopOpacity="0"/>
                      <stop offset="0.5" stopColor="#EFC373"/>
                      <stop offset="1" stopColor="#F6DBA0" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              Into Booked{' '}
              <span className="azure-text">Appointments</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-[15.5px] lg:text-[17px] leading-relaxed text-white/65"
            >
              AINAM helps real estate agents and brokers respond instantly, qualify leads, follow up automatically, and never lose hot prospects again.
            </motion.p>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8"
            >
              <HeroCtaButtons />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-white/45"
            >
              <span className="flex items-center gap-1.5"><Icon.ShieldCheck size={14} /> No setup fee for audit</span>
              <span className="flex items-center gap-1.5"><Icon.Clock size={14} /> Live in 7–14 days</span>
              <span className="flex items-center gap-1.5"><Icon.Plug size={14} /> CRM + WhatsApp ready</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats bar ---------------- */

const STATS = [
  { value: 5000, suffix: '+', label: 'Leads Processed' },
  { value: 92, suffix: '%', label: 'Faster Response Time' },
  { value: 3, suffix: 'x', label: 'Better Follow-Up Consistency' },
  { value: 24, suffix: '/7', label: 'Instant Lead Handling' },
];

function StatsBar() {
  return (
    <section className="relative -mt-2 mb-10 lg:mb-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass-strong rounded-2xl ring-gold-soft overflow-hidden"
        >
          {/* ambient inner glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/4 w-[400px] h-[400px] radial-glow-gold blur-3xl opacity-40"></div>
            <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] radial-glow-azure blur-3xl opacity-25"></div>
          </div>
          {/* meta strip */}
          <div className="relative flex items-center justify-between px-6 lg:px-7 py-2.5 border-b border-white/[0.06] bg-black/15">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/45 font-medium">
              <span className="relative inline-flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </span>
              Production telemetry · last 90 days
            </div>
            <div className="hidden sm:flex items-center gap-3 font-mono text-[10px] text-white/35">
              <span>region · global</span>
              <span className="w-px h-3 bg-white/10"></span>
              <span>v2.4</span>
            </div>
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative p-6 lg:p-7 group"
              >
                {/* hover wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 radial-glow-gold blur-xl opacity-40"></div>
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9.5px] tracking-[0.22em] text-white/35">METRIC · {String(i+1).padStart(2,'0')}</span>
                    {/* sparkline */}
                    <div className="flex items-end gap-0.5 h-3">
                      {[0.4, 0.65, 0.5, 0.85, 0.7, 1, 0.8].map((h, j) => (
                        <div key={j} className="w-[2px] bg-gold-400/60 rounded-sm spark-bar" style={{ height: `${h * 100}%`, animationDelay: `${j * 0.18}s` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline gap-0.5">
                    <CountUp to={s.value} className="text-[40px] lg:text-[50px] font-bold gold-text leading-none tracking-tight" />
                    <span className="text-[28px] lg:text-[34px] font-bold gold-text leading-none">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-[12px] lg:text-[12.5px] uppercase tracking-[0.18em] text-white/55">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export { Nav, Hero, StatsBar, CountUp, NAV_LINKS, Logo };
