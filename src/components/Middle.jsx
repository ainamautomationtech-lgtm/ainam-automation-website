// Problem + Solution + Workflow + Industries — AINAM Automation
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from './Icons.jsx';

const SectionLabel = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] ring-1 ring-white/10 px-3 py-1.5">
    <span className="w-1 h-1 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(239,195,115,0.7)]"></span>
    <span className="text-[10.5px] uppercase tracking-[0.24em] text-white/65 font-medium">{children}</span>
  </div>
);

const SectionHeading = ({ eyebrow, title, sub, align = 'left' }) => (
  <div className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
    {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
    <h2 className="mt-5 text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.04] tracking-[-0.022em] font-bold text-white">{title}</h2>
    {sub && <p className="mt-5 text-[16px] lg:text-[17px] leading-relaxed text-white/60">{sub}</p>}
  </div>
);

/* --------- PROBLEM --------- */

const PROBLEMS = [
  { icon: Icon.Clock, title: 'Leads go cold within minutes', body: 'Studies show conversion drops 80% after the first 5 minutes — but most teams reply in hours.' },
  { icon: Icon.Phone, title: 'Brokers reply late', body: 'Calls, site visits and meetings eat the day. Inbound leads sit untouched until evening.' },
  { icon: Icon.Refresh, title: 'Follow-ups are missed', body: 'Manual chasing breaks down after 2 touches. 7+ touches is where deals actually close.' },
  { icon: Icon.MessageSquare, title: 'Hot prospects get buried', body: 'WhatsApp, email and CRM inboxes collide. High-intent leads disappear in the noise.' },
  { icon: Icon.Filter, title: 'CRM data becomes messy', body: 'Fragmented sources, duplicate rows, missing fields. Reporting becomes guesswork.' },
  { icon: Icon.Users, title: 'Teams waste time on tire-kickers', body: 'Without scoring, every lead looks equal. Hours vanish chasing prospects who never convert.' },
];

function Problem() {
  return (
    <section data-screen-label="02 Problem" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] radial-glow-violet blur-3xl opacity-50 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeading
          eyebrow="The Problem"
          title={<>Your Leads Are Not the Problem.<br /><span className="text-white/45">Slow Response Is.</span></>}
          sub="Speed and consistency separate closing teams from busy ones. Here's where most lead pipelines silently leak revenue."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 text-gold-300">
                  <p.icon size={20} />
                </span>
                <span className="text-[10.5px] uppercase tracking-[0.2em] text-white/40 font-mono">leak · {String(i+1).padStart(2,'0')}</span>
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-white tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------- SOLUTION --------- */

const SOLUTIONS = [
  { icon: Icon.Bolt, title: 'Instant AI Response', body: 'Replies within seconds, 24/7. Every inquiry gets handled before the lead has time to look elsewhere.' },
  { icon: Icon.Flame, title: 'HOT / WARM / COLD Scoring', body: 'Every lead is scored on intent, budget, urgency and fit — so your team only opens what matters.' },
  { icon: Icon.Globe, title: 'Hinglish + English Understanding', body: 'Parses Indian + US English, mixed-language messages, and real-world phrasing — no rigid forms.' },
  { icon: Icon.Send, title: 'Automated SMS + Email Follow-Up', body: 'Multi-touch nurture sequences keep the conversation alive until your broker is ready to step in.' },
  { icon: Icon.Phone, title: 'Telegram Broker Alerts', body: 'High-intent leads ping the right broker on Telegram + SMS with full context, instantly.' },
  { icon: Icon.Calendar, title: 'Appointment Booking Flow', body: 'Qualified leads are routed straight into a booking flow — site visit, demo or call.' },
  { icon: Icon.Plug, title: 'CRM-Ready Integration', body: 'Plug into HubSpot, Zoho, Pipedrive, Google Sheets, or whatever your team already uses.' },
  { icon: Icon.Refresh, title: 'Dead Lead Reactivation', body: 'Old leads in your CRM get rewarmed automatically — surfacing budget that\u2019s already paid for.' },
  { icon: Icon.Dollar, title: 'Retainer & Payment Chasing', body: 'Automated reminders for invoices, retainers and onboarding tasks. Less awkward, more cash flow.' },
];

function Solution() {
  return (
    <section data-screen-label="03 Solution" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-20 right-0 w-[600px] h-[600px] radial-glow-gold blur-3xl opacity-50 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="The Solution"
            title={<>AINAM Automates the First <span className="gold-text">80%</span> of Lead Handling</>}
            sub="One connected system: capture, qualify, alert, follow up, book. Your team only enters the room when a real opportunity is ready."
          />
          <div className="hidden lg:flex flex-col items-end font-mono text-[11px] text-white/40">
            <div>09 modules · 1 system</div>
            <div className="mt-1">deployed in 7–14 days</div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.06 + Math.floor(i/3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors group overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'conic-gradient(from 130deg at 50% 0%, rgba(239,195,115,0.18), transparent 40%)' }}></div>
              <div className="relative flex items-center justify-between">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-b from-gold-400/15 to-gold-400/0 ring-1 ring-gold-400/25 text-gold-300">
                  <s.icon size={20} />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/30">M·{String(i+1).padStart(2,'0')}</span>
              </div>
              <h3 className="relative mt-4 text-[17px] font-semibold text-white tracking-[-0.01em]">{s.title}</h3>
              <p className="relative mt-2 text-[13.5px] leading-relaxed text-white/55">{s.body}</p>
              <div className="relative mt-5 flex items-center gap-1.5 text-[11px] text-gold-300/80 font-medium tracking-wide">
                Included in core system
                <Icon.Check size={14} stroke={2.4} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------- WORKFLOW --------- */

const STEPS = [
  { id: 'form', label: 'Lead Form', icon: Icon.Send, body: 'Inbound from web form, ads, WhatsApp, or CRM.', kpiLabel: 'capture', kpi: '< 1s' },
  { id: 'score', label: 'AI Scoring', icon: Icon.Cpu, body: 'Intent, urgency, budget, fit — scored in <1s.', kpiLabel: 'accuracy', kpi: '94%' },
  { id: 'reply', label: 'SMS / Email Reply', icon: Icon.MessageSquare, body: 'Auto-reply within seconds, personalized.', kpiLabel: 'response', kpi: '0.4s' },
  { id: 'alert', label: 'Broker Alert', icon: Icon.Phone, body: 'HOT leads ping Telegram + SMS instantly.', kpiLabel: 'latency', kpi: '< 2s' },
  { id: 'follow', label: 'Follow-Up', icon: Icon.Refresh, body: '5–7 touch sequence keeps the lead warm.', kpiLabel: 'touches', kpi: '5–7' },
  { id: 'book', label: 'Appointment', icon: Icon.Calendar, body: 'Qualified leads land on your calendar.', kpiLabel: 'conversion', kpi: '3.1×' },
];

function WorkflowNode({ step, index, isLast, inView }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0, scale: 0.9 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex-1 min-w-[150px]"
    >
      <div className="glass-strong rounded-2xl p-5 ring-gold-soft relative overflow-hidden">
        {/* top hairline */}
        <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"></div>
        {/* conic sweep accent in corner */}
        <div className="absolute -top-6 -right-6 w-20 h-20 conic-sweep opacity-30 rounded-full pointer-events-none"></div>
        <div className="relative flex items-center justify-between text-[10px] font-mono tracking-widest text-white/35">
          <span>STEP · {String(index + 1).padStart(2, '0')}</span>
          <span className="relative w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)] block"></span>
          </span>
        </div>
        <div className="relative mt-3 mx-auto w-14 h-14">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-300/25 to-gold-400/0"></div>
          <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-400/30 shadow-[0_8px_24px_-8px_rgba(239,195,115,0.55)]"></div>
          <div className="relative grid place-items-center w-full h-full text-gold-300">
            <step.icon size={22} />
          </div>
        </div>
        <div className="mt-3 text-center text-[15px] font-semibold text-white tracking-[-0.01em]">{step.label}</div>
        <div className="mt-1.5 text-center text-[12px] text-white/55 leading-snug min-h-[36px]">{step.body}</div>
        {/* footer kpi */}
        <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-white/40">
          <span>{step.kpiLabel}</span>
          <span className="text-gold-300/90">{step.kpi}</span>
        </div>
      </div>
      {!isLast && (
        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.16 + 0.5 }}
            className="grid place-items-center w-6 h-6 rounded-full bg-gold-400/15 ring-1 ring-gold-400/40 text-gold-300 shadow-[0_0_18px_rgba(239,195,115,0.35)]"
          >
            <Icon.Chevron size={12} stroke={2.4} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

function Workflow() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  return (
    <section id="workflow" data-screen-label="04 Workflow" ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 70%)' }}></div>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] radial-glow-azure blur-3xl opacity-40 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow="The System"
          title={<>How The <span className="gold-text">Automation</span> Works</>}
          sub="A live workflow that runs the moment a lead enters the funnel — and keeps running until they're on your calendar."
        />

        {/* Workflow diagram */}
        <div className="mt-16 relative">
          {/* SVG connector — desktop only */}
          <svg className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-24 pointer-events-none" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="wf-line" x1="0" x2="1">
                <stop offset="0%" stopColor="#EFC373" stopOpacity="0"/>
                <stop offset="50%" stopColor="#EFC373" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#EFC373" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <motion.path
              d="M 40 50 L 1160 50"
              stroke="url(#wf-line)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
            />
          </svg>
          {/* Traveling data packets on the line */}
          <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-24 pointer-events-none">
            <div className="packet" style={{ offsetPath: "path('M 40 50 L 1160 50')", animationDuration: '5.5s', position: 'absolute', left: 0, top: 'calc(50% - 4px)' }}>
              <div className="w-2 h-2 rounded-full bg-gold-300 shadow-[0_0_18px_5px_rgba(239,195,115,0.7)]"></div>
            </div>
            <div className="packet delay-2" style={{ offsetPath: "path('M 40 50 L 1160 50')", animationDuration: '6.5s', position: 'absolute', left: 0, top: 'calc(50% - 3px)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-azure-300 shadow-[0_0_14px_4px_rgba(91,178,255,0.6)]"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3 relative">
            {STEPS.map((step, i) => (
              <WorkflowNode key={step.id} step={step} index={i} isLast={i === STEPS.length - 1} inView={inView} />
            ))}
          </div>
        </div>

        {/* Live activity feed */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid lg:grid-cols-5 gap-5"
        >
          {/* KPI cards (left) */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Avg. response time', value: '0.4s', sub: 'from inbound to first message' },
              { label: 'Touchpoints per lead', value: '5–7', sub: 'across SMS, WhatsApp, email' },
              { label: 'Setup window', value: '7–14d', sub: 'to live, fully integrated' },
            ].map((kpi, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <div className="text-[42px] font-bold gold-text leading-none tracking-tight">{kpi.value}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/45">{kpi.label}</div>
                <div className="text-[12px] text-white/65 mt-1.5">{kpi.sub}</div>
              </div>
            ))}
          </div>
          {/* Live feed (right) */}
          <div className="lg:col-span-2 glass-strong rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/55 font-medium">
                <span className="relative inline-flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
                  <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
                Live runs
              </div>
              <div className="font-mono text-[10px] text-white/35">last 60s</div>
            </div>
            <ul className="divide-y divide-white/[0.05] font-mono text-[11px]">
              {[
                { t: '00:02', s: 'HOT', e: 'lead.captured · IN', tone: 'gold' },
                { t: '00:05', s: 'AI',  e: 'scored 92/100 · HOT', tone: 'gold' },
                { t: '00:06', s: 'SMS', e: 'reply sent to +91…42', tone: 'azure' },
                { t: '00:08', s: 'TG',  e: 'broker.alert dispatched', tone: 'violet' },
                { t: '00:14', s: 'WARM', e: 'follow-up 1/5 queued', tone: 'azure' },
                { t: '00:24', s: 'CAL', e: 'appointment.booked', tone: 'gold' },
              ].map((row, i) => (
                <li key={i} className="flex items-center gap-3 px-5 py-2.5">
                  <span className="text-white/35 tabular-nums">{row.t}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9.5px] tracking-wider ${
                    row.tone === 'gold' ? 'bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/30'
                    : row.tone === 'azure' ? 'bg-azure-400/15 text-azure-300 ring-1 ring-azure-400/30'
                    : 'bg-violet-500/15 text-violet-400 ring-1 ring-violet-500/30'
                  }`}>{row.s}</span>
                  <span className="text-white/75 truncate">{row.e}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------- INDUSTRIES --------- */

const INDUSTRIES = [
  { icon: Icon.Home, title: 'Indian Real Estate Agents', body: 'Site visit bookings, budget detection, locality + BHK qualification.', tag: 'IN' },
  { icon: Icon.Dollar, title: 'US Mortgage Brokers', body: 'Pre-approval intent, urgency scoring, instant call-back routing.', tag: 'US' },
  { icon: Icon.Users, title: 'Broker Teams', body: 'Multi-broker distribution, fair routing, team-wide alerting.', tag: 'TEAM' },
  { icon: Icon.Target, title: 'Lead Generation Agencies', body: 'White-label automation layer your clients pay you to operate.', tag: 'B2B' },
  { icon: Icon.Briefcase, title: 'Service Businesses', body: 'Quote-based services: clinics, consultants, contractors, agencies.', tag: 'SVC' },
];

function Industries() {
  return (
    <section data-screen-label="05 Industries" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Who It's For"
            title={<>Built for <span className="gold-text">High-Intent</span> Lead Businesses</>}
            sub="If your revenue depends on responding fast and following up well, AINAM was built for you."
          />
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`relative glass rounded-2xl p-5 ${i === 0 ? 'lg:col-span-2' : 'lg:col-span-1'} group hover:bg-white/[0.05] transition-colors`}
            >
              <div className="flex items-start justify-between">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] ring-1 ring-white/10 text-gold-300">
                  <it.icon size={20} />
                </span>
                <span className="font-mono text-[9.5px] tracking-[0.24em] px-1.5 py-0.5 rounded bg-white/5 text-white/45">{it.tag}</span>
              </div>
              <h3 className="mt-5 text-[16px] font-semibold text-white tracking-[-0.01em] leading-tight">{it.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/55">{it.body}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-[11px] text-white/40 group-hover:text-gold-300 transition-colors">
                Explore use case <Icon.ArrowRight size={12} stroke={2} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


export { Problem, Solution, Workflow, Industries, SectionHeading, SectionLabel };
