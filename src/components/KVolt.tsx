import { motion } from 'framer-motion';
import { ArrowUpRight, Gauge, Layers, ShieldCheck, Terminal, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import kvoltMascot from '../assets/p3.png';

const features = [
  {
    icon: Gauge,
    title: 'Zero-allocation routing',
    desc: 'Blazing-fast request matching engineered for high-throughput APIs.',
  },
  {
    icon: Zap,
    title: 'Async logging',
    desc: 'Non-blocking observability that never slows down your hot path.',
  },
  {
    icon: Layers,
    title: 'Built-in middleware',
    desc: 'Auth, CORS, recovery, and more — ready out of the box.',
  },
  {
    icon: ShieldCheck,
    title: 'Auto validation',
    desc: 'Request schemas validated automatically before your handlers run.',
  },
  {
    icon: Terminal,
    title: 'Powerful CLI',
    desc: 'Scaffold routes, handlers, and projects in minutes — not days.',
  },
];

const stats = [
  { value: 'Go', label: 'Native runtime' },
  { value: 'OSS', label: 'Open source' },
  { value: 'CLI', label: 'Ship faster' },
  { value: 'API', label: 'Production-ready' },
];

const ease = [0.22, 1, 0.36, 1] as const;

const KVolt = () => {
  return (
    <section
      id="kvolt"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-[#071018]"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-[420px] rounded-full bg-[#2ccbb5]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] max-w-xl h-[320px] rounded-full bg-[#f5c542]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ccbb5]/15 border border-[#2ccbb5]/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#f5c542] animate-pulse" />
            <span className="text-[#2ccbb5] text-[10px] font-black uppercase tracking-widest">
              Our Flagship Framework
            </span>
          </span>
          <p className="text-white/45 text-xs sm:text-sm font-medium uppercase tracking-[0.2em]">
            Built by KASPX · Open Source
          </p>
        </motion.div>

        {/* Hero product row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14 sm:mb-20">
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#f5c542] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-4"
            >
              Go Web Framework
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.55, ease }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading font-black text-white leading-[0.95] tracking-tight mb-5 sm:mb-6"
            >
              KVolt
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5, ease }}
              className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Production-grade Go framework for teams that need speed without the ceremony.
              Zero-allocation routing, async logging, middleware, validation, and a CLI that gets
              APIs live in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, ease }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="cursor-pointer relative bg-white py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group inline-flex w-fit items-center justify-start hover:bg-[#f5c542] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-lg no-underline border-0"
              >
                <span className="absolute flex px-1 py-0.5 justify-start items-center inset-0 pointer-events-none">
                  <span className="rounded-full shrink-0 flex justify-center items-center shadow-sm h-full aspect-square bg-[#2ccbb5] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-dark">
                    <span className="size-[0.8rem] text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] inline-flex">
                      <ArrowUpRight className="w-full h-full" strokeWidth={2.5} />
                    </span>
                  </span>
                </span>
                <span className="pl-[3.4rem] pr-[1.2rem] text-dark font-bold text-sm whitespace-nowrap">
                  Build with KVolt
                </span>
              </Link>

              <span className="text-white/50 text-sm font-medium">
                The backend engine behind how we ship
              </span>
            </motion.div>

            {/* Stats strip */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.5, ease }}
              className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 list-none p-0 m-0"
            >
              {stats.map((stat) => (
                <li key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-white/40 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
            className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full bg-[#2ccbb5]/20 blur-[70px]"
              aria-hidden
            />
            <div
              className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-[#f5c542]/25 blur-[50px]"
              aria-hidden
            />
            <motion.img
              src={kvoltMascot}
              alt="KVolt — Go framework mascot"
              className="relative z-10 w-[min(88vw,340px)] sm:w-[min(70vw,400px)] lg:w-full max-w-[440px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(44,203,181,0.35)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* Feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease },
                  },
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 hover:border-[#2ccbb5]/40 hover:bg-white/[0.06] transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2ccbb5]/15 border border-[#2ccbb5]/25 flex items-center justify-center mb-4 group-hover:bg-[#f5c542]/20 group-hover:border-[#f5c542]/35 transition-colors">
                  <Icon className="w-5 h-5 text-[#2ccbb5] group-hover:text-[#f5c542] transition-colors" strokeWidth={2} />
                </div>
                <h3 className="text-white font-bold text-sm sm:text-[15px] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default KVolt;
