// Pricing + About + FinalCTA + Footer — AINAM Automation
import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icons.jsx';
import { Logo } from './NavHero.jsx';
import { SectionHeading } from './Middle.jsx';

/* --------- PRICING --------- */

const PLANS = [
  {
    name: 'Starter Automation',
    tag: 'For solo brokers',
    accent: 'azure',
    features: [
      'Lead capture from web form',
      'Instant AI qualification',
      'Single broker alert (Telegram/SMS)',
      'Basic 2-step follow-up sequence',
      'Email support',
    ],
  },
  {
    name: 'Growth Automation',
    tag: 'Most popular',
    featured: true,
    accent: 'gold',
    features: [
      'Everything in Starter',
      'Multi-step follow-up (5–7 touches)',
      'Appointment booking flow',
      'CRM-ready data structure',
      'WhatsApp + SMS + Email channels',
      'Priority support',
    ],
  },
  {
    name: 'Custom Broker System',
    tag: 'For broker teams',
    accent: 'violet',
    features: [
      'Custom workflow design',
      'Multiple lead sources unified',
      'Team-wide broker alerting & routing',
      'Advanced automation logic',
      'Dedicated implementation lead',
      'Quarterly optimization reviews',
    ],
  },
];

function PriceCard({ plan, i }) {
  const featured = plan.featured;
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl p-7 flex flex-col ${featured ? 'glass-strong ring-gold-soft' : 'glass'}`}
    >
      {featured && (
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"></div>
      )}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-gradient-to-b from-gold-300 to-gold-500 text-ink-900 shadow-[0_8px_20px_-6px_rgba(239,195,115,0.6)]">
          {plan.tag}
        </div>
      )}
      <div className="flex items-center justify-between">
        <h3 className={`text-[20px] font-semibold tracking-[-0.01em] ${featured ? 'gold-text' : 'text-white'}`}>{plan.name}</h3>
        <span className="font-mono text-[10px] text-white/35">0{i+1}</span>
      </div>
      {!featured && <div className="mt-1 text-[12px] text-white/45">{plan.tag}</div>}

      <div className="mt-5">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45">Investment</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[34px] font-bold text-white leading-none">Custom</span>
          <span className="text-[12px] text-white/45">pricing</span>
        </div>
        <div className="mt-1.5 text-[11px] text-white/40">based on workflow complexity</div>
      </div>

      <ul className="mt-6 space-y-3 flex-1">
        {plan.features.map((f, j) => (
          <li key={j} className="flex items-start gap-2.5 text-[13.5px] text-white/75">
            <span className={`grid place-items-center w-4 h-4 rounded-full mt-0.5 flex-shrink-0 ${featured ? 'bg-gold-400/20 text-gold-300' : 'bg-white/[0.08] text-white/70'}`}>
              <Icon.Check size={10} stroke={3} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-2">
        <a href="mailto:ainamautomationtech@gmail.com?subject=Pricing%20Request"
           className={`${featured ? 'btn-gold' : 'btn-outline'} rounded-xl px-4 py-3 text-[13px] font-semibold text-center`}>
          Request Pricing
        </a>
        <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
           className="text-center text-[12px] text-white/55 hover:text-white py-1.5">
          or Book a Demo →
        </a>
      </div>
    </motion.div>
  );
}

function Pricing() {
  return (
    <section id="pricing" data-screen-label="09 Pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] radial-glow-gold blur-3xl opacity-30 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title={<>Simple Setup + <span className="gold-text">Monthly Automation Management</span></>}
          sub="Three tiers, one philosophy: pay for the system that fits your operation. Pricing depends on workflow complexity, lead sources, and integrations."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-5 lg:gap-6">
          {PLANS.map((p, i) => <PriceCard key={i} plan={p} i={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-[12.5px] text-white/45 max-w-2xl mx-auto"
        >
          Pricing depends on workflow complexity, lead sources, and integrations. Every engagement starts with a free 30-minute automation audit to scope the right tier.
        </motion.div>
      </div>
    </section>
  );
}

/* --------- ABOUT / FOUNDER --------- */

const FOUNDER_VALUES = [
  { v: 'Speed matters', icon: Icon.Bolt },
  { v: 'Follow-up wins deals', icon: Icon.Refresh },
  { v: 'Automation should create revenue', icon: Icon.Dollar },
  { v: 'Systems should be simple for clients', icon: Icon.Layers },
  { v: 'AI should support humans, not replace them', icon: Icon.Users },
];

function About() {
  return (
    <section id="about" data-screen-label="10 About" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-32 top-32 w-[500px] h-[500px] radial-glow-violet blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute -right-32 bottom-32 w-[500px] h-[500px] radial-glow-gold blur-3xl opacity-35 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow="About"
          title={<>Built By A Founder Who Understands <span className="gold-text">Speed, Follow-Up,</span> and Sales Automation</>}
        />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-8 radial-glow-gold blur-3xl opacity-30 pointer-events-none"></div>
          <div className="relative glass-strong rounded-[28px] p-7 lg:p-10 ring-gold-soft overflow-hidden">
            {/* meta header strip */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium">
                <span className="w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(239,195,115,0.7)]"></span>
                Founder profile · 2026
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] text-white/35">
                <span>Bharat → Global</span>
                <span className="w-px h-3 bg-white/10"></span>
                <span>built in public</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Avatar column */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <div className="relative">
                  {/* outer orbital ring */}
                  <div className="absolute -inset-6 rounded-full border border-gold-400/15"></div>
                  <div className="absolute -inset-3 rounded-full border border-gold-400/25"></div>
                  {/* spinning conic glow */}
                  <div className="absolute -inset-4 rounded-full conic-sweep opacity-35"></div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ scale: 1.04 }}
                    className="relative"
                  >
                    <div className="absolute -inset-3 radial-glow-gold blur-xl"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-300/40 to-gold-600/40 blur-md"></div>
                    <div className="relative grid place-items-center w-44 h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-ink-700 to-ink-900 ring-[3px] ring-gold-400 shadow-[0_30px_60px_-20px_rgba(239,195,115,0.4),inset_0_2px_0_rgba(255,255,255,0.06)]">
                      <div className="absolute inset-1.5 rounded-full ring-1 ring-gold-400/30 pointer-events-none"></div>
                      {/* small ticks around the avatar */}
                      {[0, 60, 120, 180, 240, 300].map((deg) => (
                        <span key={deg} className="absolute top-1/2 left-1/2 w-px h-2 bg-gold-400/40"
                              style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-92px)` }}></span>
                      ))}
                      <span className="relative text-[64px] font-bold gold-text font-serif italic leading-none">NT</span>
                    </div>
                  </motion.div>
                </div>
                <div className="mt-7 text-center lg:text-left">
                  <div className="text-[22px] font-semibold text-white tracking-[-0.015em]">Naman Tripathi</div>
                  <div className="text-[13px] text-gold-300 mt-1">Founder &amp; Automation Engineer</div>
                  <div className="mt-4 flex items-center gap-2 justify-center lg:justify-start">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/45">
                      <span className="relative inline-flex w-1.5 h-1.5">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
                        <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </span>
                      ainamautomation.com
                    </span>
                  </div>
                </div>

                {/* small stat strip */}
                <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-[280px]">
                  {[
                    ['5k+', 'leads'],
                    ['24/7', 'uptime'],
                    ['7d', 'go-live'],
                  ].map(([v, k], i) => (
                    <div key={i} className="rounded-xl bg-white/[0.03] ring-1 ring-white/[0.08] p-2.5 text-center">
                      <div className="text-[16px] font-bold gold-text leading-none">{v}</div>
                      <div className="mt-1 text-[9.5px] uppercase tracking-[0.18em] text-white/45">{k}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio + values */}
              <div className="lg:col-span-8">
                <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/40 font-mono">Founder note</div>
                <p className="mt-3 text-[16px] lg:text-[17px] leading-relaxed text-white/80 tracking-[-0.005em]">
                  <span className="font-semibold text-white">Naman Tripathi</span> is the founder of AINAM Automation. AINAM focuses on practical AI systems that help businesses respond faster, qualify better, and convert more leads — without increasing manual workload.
                </p>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
                  The company builds automation systems that connect lead forms, AI scoring, SMS/email replies, broker alerts, follow-ups, appointment booking, and CRM workflows into one calm, dependable layer your team can rely on.
                </p>

                <div className="mt-8 pt-7 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div className="text-[10.5px] uppercase tracking-[0.22em] text-gold-300/80 font-mono">What we believe</div>
                    <div className="font-mono text-[10px] text-white/35">05 principles</div>
                  </div>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2.5">
                    {FOUNDER_VALUES.map((val, i) => (
                      <motion.li key={i}
                             initial={{ x: -16, opacity: 0 }}
                             whileInView={{ x: 0, opacity: 1 }}
                             viewport={{ once: true }}
                             transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                             className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 bg-white/[0.03] ring-1 ring-white/[0.06] hover:bg-white/[0.06] hover:ring-gold-400/25 transition-colors">
                        <span className="grid place-items-center w-7 h-7 rounded-lg bg-gold-400/15 ring-1 ring-gold-400/25 text-gold-300 flex-shrink-0">
                          <val.icon size={13} />
                        </span>
                        <span className="text-[13px] text-white/80 leading-tight">{val.v}</span>
                        <span className="ml-auto font-mono text-[10px] text-white/30">0{i+1}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* signature row */}
                <div className="mt-7 pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                  <div className="font-serif italic text-[22px] gold-text leading-none">— Naman</div>
                  <a href="mailto:ainamautomationtech@gmail.com" className="inline-flex items-center gap-1.5 btn-outline rounded-xl px-3.5 py-2 text-[12.5px] font-medium">
                    <Icon.Mail size={13} /> Reply to the founder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------- FINAL CTA --------- */

const TRUST_BADGES = [
  { label: 'Instant Lead Response', icon: Icon.Bolt },
  { label: 'AI Qualification', icon: Icon.Cpu },
  { label: 'Follow-Up Automation', icon: Icon.Refresh },
  { label: 'Broker Alerts', icon: Icon.Phone },
  { label: 'Appointment Ready', icon: Icon.Calendar },
];

function FinalCTA() {
  return (
    <section data-screen-label="11 Final CTA" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 40 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] glass-strong ring-gold-soft p-10 lg:p-16"
        >
          <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }}></div>
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] radial-glow-gold blur-3xl opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] radial-glow-azure blur-3xl opacity-40 pointer-events-none"></div>

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-gold-400/30 px-3 py-1.5">
              <span className="w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(239,195,115,0.7)]"></span>
              <span className="text-[10.5px] uppercase tracking-[0.24em] text-gold-300 font-medium">Ready when you are</span>
            </div>
            <h2 className="mt-6 text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.025em] font-bold text-white">
              Ready To Stop <span className="gold-text font-serif italic">Losing Leads?</span>
            </h2>
            <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-white/65 max-w-2xl mx-auto">
              Book a demo and see how AINAM can turn your lead flow into a faster, smarter, automated sales system.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
                 className="btn-gold inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
                Book a Demo <Icon.ArrowRight size={15} stroke={2} />
              </a>
              <a href="#workflow"
                 className="btn-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
                See How It Works
              </a>
              <a href="mailto:ainamautomationtech@gmail.com?subject=Free%20Automation%20Audit"
                 className="btn-outline inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold">
                Free Automation Audit
              </a>
              <a href="mailto:ainamautomationtech@gmail.com"
                 className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-[14px] font-semibold text-white/70 hover:text-white">
                Contact Founder
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="relative mt-12 pt-10 border-t border-white/[0.08]">
            <div className="text-center text-[10.5px] uppercase tracking-[0.24em] text-white/45 font-medium">
              What you get from day one
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {TRUST_BADGES.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 12, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3.5 py-2 hover:bg-white/[0.07] transition-colors"
                >
                  <span className="grid place-items-center w-5 h-5 rounded-md bg-gold-400/20 text-gold-300">
                    <b.icon size={11} />
                  </span>
                  <span className="text-[12px] font-medium text-white/85">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------- FOOTER --------- */

function Footer() {
  return (
    <footer data-screen-label="12 Footer" className="relative pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-[14px] leading-relaxed text-white/55 max-w-md">
              AI-powered lead qualification, instant response, follow-up, and appointment automation — built for high-intent lead businesses.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-[13px]">
              <a href="mailto:ainamautomationtech@gmail.com" className="inline-flex items-center gap-2 text-white/70 hover:text-gold-300 transition-colors">
                <Icon.Mail size={14} />
                ainamautomationtech@gmail.com
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-gold-300 transition-colors">
                <Icon.Globe size={14} />
                ainamautomation.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45 font-medium">Navigate</div>
            <div className="mt-5 grid grid-cols-2 gap-y-2.5 gap-x-4">
              {[
                ['Home', '#home'],
                ['Real Estate Automation', '#real-estate'],
                ['Mortgage Automation', '#mortgage'],
                ['Workflow', '#workflow'],
                ['Testimonials', '#testimonials'],
                ['About', '#about'],
                ['Book Demo', 'mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo'],
              ].map(([l, h]) => (
                <a key={l} href={h} className="text-[13px] text-white/65 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10.5px] uppercase tracking-[0.22em] text-white/45 font-medium">Get started</div>
            <a href="mailto:ainamautomationtech@gmail.com?subject=Book%20AINAM%20Automation%20Demo"
               className="mt-5 btn-gold rounded-xl px-4 py-3 text-[13px] font-semibold inline-flex items-center justify-center gap-1.5 w-full">
              Book a Demo <Icon.ArrowRight size={14} stroke={2} />
            </a>
            <a href="mailto:ainamautomationtech@gmail.com?subject=Free%20Automation%20Audit"
               className="mt-2.5 btn-outline rounded-xl px-4 py-3 text-[13px] font-semibold inline-flex items-center justify-center w-full">
              Free Audit
            </a>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/40">© 2026 AINAM Automation · All rights reserved</div>
          <div className="flex items-center gap-5 text-[12px] text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
            <span className="font-mono text-white/30">v2.4 · built in Bharat</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


export { Pricing, About, FinalCTA, Footer };
