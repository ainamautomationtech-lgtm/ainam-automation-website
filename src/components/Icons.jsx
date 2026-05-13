// Lightweight inline SVG icon set tuned for the AINAM brand
const Ico = ({ d, size = 18, stroke = 1.6, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke}
       strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {d}
  </svg>
);

const Icon = {
  Bolt: (p) => <Ico {...p} d={<path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>} />,
  Spark: (p) => <Ico {...p} d={<g><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></g>} />,
  Phone: (p) => <Ico {...p} d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>} />,
  Mail: (p) => <Ico {...p} d={<g><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></g>} />,
  Calendar: (p) => <Ico {...p} d={<g><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></g>} />,
  Target: (p) => <Ico {...p} d={<g><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></g>} />,
  Flame: (p) => <Ico {...p} d={<path d="M12 2s4 4 4 8a4 4 0 1 1-8 0c0-1 .5-2 1-3-1.5 1-3 3-3 6a6 6 0 0 0 12 0c0-5-6-11-6-11z"/>} />,
  Clock: (p) => <Ico {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>} />,
  Check: (p) => <Ico {...p} d={<path d="M4 12l5 5L20 6"/>} />,
  ArrowRight: (p) => <Ico {...p} d={<g><path d="M5 12h14M13 6l6 6-6 6"/></g>} />,
  Chevron: (p) => <Ico {...p} d={<path d="M9 6l6 6-6 6"/>} />,
  Menu: (p) => <Ico {...p} d={<g><path d="M4 7h16M4 12h16M4 17h16"/></g>} />,
  Close: (p) => <Ico {...p} d={<g><path d="M6 6l12 12M18 6L6 18"/></g>} />,
  Info: (p) => <Ico {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></g>} />,
  Star: (p) => <Ico {...p} d={<path d="M12 2l3 7 7 .8-5.3 4.9 1.6 7L12 18l-6.3 3.7 1.6-7L2 9.8 9 9z"/>} />,
  Cpu: (p) => <Ico {...p} d={<g><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></g>} />,
  Send: (p) => <Ico {...p} d={<g><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></g>} />,
  Filter: (p) => <Ico {...p} d={<path d="M3 5h18l-7 9v6l-4-2v-4z"/>} />,
  Layers: (p) => <Ico {...p} d={<g><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></g>} />,
  Home: (p) => <Ico {...p} d={<g><path d="M3 11l9-8 9 8"/><path d="M5 9v11h14V9"/></g>} />,
  Building: (p) => <Ico {...p} d={<g><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-4h4v4"/></g>} />,
  Dollar: (p) => <Ico {...p} d={<g><path d="M12 2v20"/><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>} />,
  Users: (p) => <Ico {...p} d={<g><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></g>} />,
  Briefcase: (p) => <Ico {...p} d={<g><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>} />,
  Wrench: (p) => <Ico {...p} d={<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z"/>} />,
  Lock: (p) => <Ico {...p} d={<g><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></g>} />,
  Globe: (p) => <Ico {...p} d={<g><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></g>} />,
  Map: (p) => <Ico {...p} d={<g><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></g>} />,
  MessageSquare: (p) => <Ico {...p} d={<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>} />,
  Refresh: (p) => <Ico {...p} d={<g><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></g>} />,
  ShieldCheck: (p) => <Ico {...p} d={<g><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></g>} />,
  Plug: (p) => <Ico {...p} d={<g><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 1 1-12 0V8z"/><path d="M12 18v4"/></g>} />,
};

export default Icon;
