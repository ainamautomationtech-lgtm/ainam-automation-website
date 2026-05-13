// Real Estate + Mortgage demos + Testimonials — AINAM Automation
import React from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from './Icons.jsx';
import { CountUp } from './NavHero.jsx';
import { SectionHeading, SectionLabel } from './Middle.jsx';

/* --------- AI Output Card --------- */

function AIOutputCard({ rows, badge = 'HOT', score = 92, inView, title }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0, scale: 0.96 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className="relative"
    >
      <div className="absolute -inset-8 radial-glow-gold blur-2xl opacity-50 pointer-events-none"></div>
      <div className="relative glass-strong rounded-3xl p-6 lg:p-7 ring-gold-soft shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-7 h-7 rounded-lg bg-gold-400/15 ring-1 ring-gold-400/30 text-gold-300">
              <Icon.Cpu size={14} />
            </span>
            <div className="text-[11px] uppercase tracking-[0.2em] text-white/55 font-medium">{title || 'AI Output'}</div>
          </div>
          <div className="font-mono text-[10px] text-white/35">ainam.run</div>
        </div>

        {/* Score */}
        <div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/[0.08] p-5">
          <div className="flex items-center justify-between">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">Lead Score</div>
            <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6, duration: 0.5 }}
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${badge === 'HOT' ? 'bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/30' : 'bg-azure-400/15 text-azure-300 ring-1 ring-azure-400/30'}`}>
              {badge}
            </motion.div>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <CountUp to={score} className="text-[56px] font-bold gold-text leading-none" />
            <span className="text-white/45 text-[13px]">/100</span>
          </div>
          <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={inView ? { width: `${score}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-300 shadow-[0_0_12px_rgba(239,195,115,0.6)]" />
          </div>
        </div>

        {/* Rows */}
        <div className="mt-5 divide-y divide-white/[0.08]">
          {rows.map((r, i) => (
            <motion.div key={i}
                    initial={{ x: -16, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="flex items-center justify-between py-3">
              <span className="text-[12px] uppercase tracking-[0.16em] text-white/45">{r.k}</span>
              <span className={`text-[14px] font-semibold ${r.highlight ? 'gold-text' : 'text-white'}`}>{r.v}</span>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}
                className="mt-2 flex items-center justify-between pt-3 border-t border-white/[0.08]">
          <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-300 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            broker alert sent · 0.4s
          </div>
          <div className="font-mono text-[10px] text-white/35">v2.4</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function LeadInputCard({ from, message, locale, inView }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-3xl p-6 lg:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Inbound Lead</div>
        <div className="font-mono text-[10px] text-white/35">{locale}</div>
      </div>
      <div className="mt-5 flex items-start gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-azure-400/40 to-azure-600/40 ring-1 ring-azure-400/30 text-white text-[12px] font-semibold">
          {from.split(' ').map(s => s[0]).slice(0,2).join('')}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-white">{from}</div>
          <div className="text-[11px] text-white/40 font-mono mt-0.5">via Web Form · 14:02</div>
        </div>
      </div>
      <div className="relative mt-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/[0.08] p-5">
        <div className="absolute -top-2 left-6 w-3 h-3 rotate-45 bg-white/[0.03] ring-1 ring-white/[0.08] border-r-0 border-b-0"></div>
        <div className="text-[14.5px] text-white/85 leading-relaxed">"{message}"</div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-[11px] text-white/40">
        <Icon.Cpu size={13} />
        <span>Parsing intent…</span>
        <span className="ml-auto font-mono text-emerald-300">→ AINAM</span>
      </div>
    </motion.div>
  );
}

/* --------- REAL ESTATE --------- */

function RealEstate() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <section id="real-estate" data-screen-label="06 Real Estate" ref={ref} className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] radial-glow-gold blur-3xl opacity-40 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>Real Estate Automation</SectionLabel>
            <h2 className="mt-5 text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.04] tracking-[-0.022em] font-bold text-white">
              Qualify property leads the moment they hit your form.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/65 max-w-xl">
              AINAM detects budget, location, urgency, property type, and the next action — then alerts the right broker before the lead has time to message a competitor.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 max-w-md">
              {[
                ['Budget detection', Icon.Dollar],
                ['Locality + BHK parsing', Icon.Map],
                ['Site visit booking', Icon.Calendar],
                ['Broker routing', Icon.Phone],
              ].map(([t, I], i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 + 0.2 }}
                        className="flex items-center gap-2.5 text-[13px] text-white/75">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/5 ring-1 ring-white/10 text-gold-300"><I size={14} /></span>
                  {t}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="mailto:ainamautomationtech@gmail.com?subject=Real%20Estate%20Demo"
                 className="btn-gold rounded-xl px-4 py-2.5 text-[13px] font-semibold inline-flex items-center gap-1.5">
                Book Real Estate Demo <Icon.ArrowRight size={14} stroke={2} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              <LeadInputCard
                from="Aarav Mehta"
                locale="IN · Mumbai"
                message="Mujhe Bandra mein 2BHK chahiye budget 1.5 Cr"
                inView={inView}
              />
              <AIOutputCard
                title="AINAM · Real Estate"
                badge="HOT"
                score={92}
                inView={inView}
                rows={[
                  { k: 'Location', v: 'Bandra' },
                  { k: 'Requirement', v: '2BHK' },
                  { k: 'Budget', v: '₹1.5 Cr', highlight: true },
                  { k: 'Action', v: 'Site visit follow-up' },
                  { k: 'Broker Alert', v: 'Sent instantly' },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- MORTGAGE --------- */

function Mortgage() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  return (
    <section id="mortgage" data-screen-label="07 Mortgage" ref={ref} className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -right-40 top-20 w-[600px] h-[600px] radial-glow-azure blur-3xl opacity-40 pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
              <LeadInputCard
                from="Jordan Hayes"
                locale="US · Florida"
                message="I need help getting pre-approved this week. Can someone call me today?"
                inView={inView}
              />
              <AIOutputCard
                title="AINAM · Mortgage"
                badge="HOT"
                score={94}
                inView={inView}
                rows={[
                  { k: 'Intent', v: 'Pre-approval', highlight: true },
                  { k: 'Urgency', v: 'This week' },
                  { k: 'Action', v: 'SMS + alert broker' },
                  { k: 'Follow-Up', v: 'Booking sequence' },
                  { k: 'Channel', v: 'Phone + SMS' },
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionLabel>Mortgage Automation</SectionLabel>
            <h2 className="mt-5 text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.04] tracking-[-0.022em] font-bold text-white">
              Respond to loan inquiries before they call the next broker.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-white/65 max-w-xl">
              AINAM helps mortgage brokers detect urgency, qualify intent, send instant follow-ups, and route serious prospects straight into a booked call.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 max-w-md">
              {[
                ['Intent scoring', Icon.Target],
                ['Urgency detection', Icon.Flame],
                ['Call back routing', Icon.Phone],
                ['Compliance-aware copy', Icon.ShieldCheck],
              ].map(([t, I], i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 + 0.2 }}
                        className="flex items-center gap-2.5 text-[13px] text-white/75">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-white/5 ring-1 ring-white/10 text-azure-400"><I size={14} /></span>
                  {t}
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <a href="mailto:ainamautomationtech@gmail.com?subject=Mortgage%20Demo"
                 className="btn-gold rounded-xl px-4 py-2.5 text-[13px] font-semibold inline-flex items-center gap-1.5">
                Book Mortgage Demo <Icon.ArrowRight size={14} stroke={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- TESTIMONIALS --------- */

const TESTIMONIALS = [
  { name: 'Michael R.', role: 'Mortgage Broker, Texas',
    msg: 'Before automation, I was replying to leads hours later. The instant response flow makes every inquiry feel handled immediately.' },
  { name: 'Sarah M.', role: 'Loan Officer, Florida',
    msg: 'The HOT/WARM/COLD scoring helps me focus on serious borrowers first instead of wasting time sorting through every form submission.' },
  { name: 'Daniel K.', role: 'Mortgage Advisor, California',
    msg: 'The follow-up sequence is the biggest value. Leads that used to disappear now get consistent reminders without me manually chasing them.' },
  { name: 'Emily T.', role: 'Broker Team Manager, Arizona',
    msg: 'Broker alerts are exactly what our team needed. We know instantly when a high-intent lead comes in.' },
  { name: 'James W.', role: 'Independent Mortgage Broker, Ohio',
    msg: 'It feels like having an assistant watching new leads all day, even when I am on calls or away from my desk.' },
  { name: 'Rebecca L.', role: 'Mortgage Consultant, Georgia',
    msg: 'The system keeps the first conversation moving until I can personally step in. That alone saves a lot of missed opportunities.' },
  { name: 'Anthony P.', role: 'Lending Specialist, Nevada',
    msg: 'The lead summary makes calls easier. I can see intent, urgency, and recommended action before contacting the borrower.' },
  { name: 'Natalie S.', role: 'Mortgage Broker, North Carolina',
    msg: 'The automation makes our response look professional and fast. Prospects get a better first impression.' },
  { name: 'Chris B.', role: 'Broker Owner, Colorado',
    msg: 'For a small team, this kind of automation is valuable because it reduces manual follow-up work without hiring another assistant.' },
];

function Avatar({ name }) {
  const initials = name.split(' ').map(s => s[0]).slice(0, 2).join('');
  // hue based on name
  const hue = (name.charCodeAt(0) * 7 + name.charCodeAt(1)) % 360;
  return (
    <span className="grid place-items-center w-10 h-10 rounded-full text-white text-[12px] font-semibold ring-1 ring-white/15"
          style={{ background: `linear-gradient(135deg, hsl(${hue} 45% 30%), hsl(${(hue+60)%360} 45% 22%))` }}>
      {initials}
    </span>
  );
}

function TestimonialCard({ t, i }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 + Math.floor(i/3) * 0.06 }}
      whileHover={{ y: -6 }}
      className="relative glass rounded-2xl p-6 hover:bg-white/[0.05] transition-colors flex flex-col group"
    >
      {/* big quote glyph */}
      <span aria-hidden className="absolute top-3 right-5 select-none font-serif text-[88px] leading-none text-gold-400/15 group-hover:text-gold-400/25 transition-colors">"</span>
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-0.5 text-gold-400">
          {[0,1,2,3,4].map(s => <Icon.Star key={s} size={13} stroke={1} style={{ fill: 'currentColor' }} />)}
        </div>
        <span className="font-mono text-[9.5px] tracking-[0.2em] text-white/35">SAMPLE</span>
      </div>
      <p className="relative mt-4 text-[14.5px] leading-relaxed text-white/80 flex-1">
        {t.msg}
      </p>
      <div className="relative mt-6 pt-5 border-t border-white/[0.08] flex items-center gap-3">
        <Avatar name={t.name} />
        <div className="min-w-0 flex-1">
          <div className="text-[13.5px] font-semibold text-white truncate">{t.name}</div>
          <div className="text-[12px] text-white/50 truncate">{t.role}</div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-mono text-emerald-300/80 flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
            verified format
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" data-screen-label="08 Testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
        <SectionHeading
          align="center"
          eyebrow="Example Feedback"
          title={<>Example Client Feedback From <span className="gold-text">Broker Workflows</span></>}
          sub="The format of feedback we hear consistently from broker teams running AINAM-style automation in production."
        />

        {/* Disclaimer info bar */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 mx-auto max-w-3xl"
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-gold-400/0 via-gold-400/45 to-gold-400/0">
            <div className="relative flex items-start gap-3 rounded-2xl px-5 py-4 bg-[#1a140a]/80 backdrop-blur">
              <span className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-300/60 to-transparent"></span>
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-b from-gold-400/25 to-gold-400/5 ring-1 ring-gold-400/40 text-gold-300 flex-shrink-0 shadow-[0_8px_20px_-8px_rgba(239,195,115,0.5)]">
                <Icon.Info size={16} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10.5px] uppercase tracking-[0.22em] font-semibold text-gold-300">Sample feedback format</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gold-400/15 text-gold-300/90 ring-1 ring-gold-400/30">demo</span>
                </div>
                <div className="mt-1 text-[13px] leading-relaxed text-white/75">
                  Shown for demo purposes. Replace with verified client testimonials before public launch.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {TESTIMONIALS.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
        </div>
      </div>
    </section>
  );
}


export { RealEstate, Mortgage, Testimonials };
