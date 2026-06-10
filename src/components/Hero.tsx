import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import Button from './common/Button';
import { heroServiceHighlights, heroTagline } from '../data/services';

const HeroImage = ({ className = '' }: { className?: string }) => (
  <div className={`relative w-full max-w-xs sm:max-w-sm mx-auto ${className}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className="w-full h-[260px] sm:h-[300px] lg:h-[500px] xl:h-[550px] overflow-hidden relative"
    >
      <img
        src="/hero.png"
        alt="KASPX digital solutions"
        className="w-full h-full object-contain"
      />
    </motion.div>
    <motion.div
      className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full p-2 shadow-lg flex items-center justify-center z-40"
      aria-hidden
    >
      <span className="relative w-full h-full border border-dashed border-gray-200 rounded-full flex items-center justify-center">
        <span className="text-[7px] sm:text-[8px] font-black uppercase text-center leading-none text-accent px-1">
          Your Tech
          <br />
          Partner
        </span>
      </span>
    </motion.div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="pt-[7.25rem] sm:pt-36 lg:pt-44 pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left: copy + mobile image */}
        <div className="lg:col-span-5 z-10 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ccbb5]/10 border border-[#2ccbb5]/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#2ccbb5]" />
            <span className="text-[#2ccbb5] text-[10px] font-black uppercase tracking-widest">
              Digital Solutions
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight mb-6 text-dark"
          >
            Build Smarter
            <br />
            <span className="text-[#2ccbb5]">Digital Products</span>
          </motion.h1>

          {/* Hero image — mobile/tablet only, directly below headline */}
          <HeroImage className="lg:hidden mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            {heroTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10"
          >
            <Button to="/contact">Start a Project</Button>

            <NavHashLink
              smooth
              to="/#about"
              className="flex items-center gap-2 font-bold text-secondary hover:text-dark transition-colors"
            >
              <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </span>
              How We Work
            </NavHashLink>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-gray-500"
          >
            {heroServiceHighlights.map((s) => (
              <li
                key={s.title}
                className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100"
              >
                {s.title}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right: cards + image — desktop only */}
        <div className="hidden lg:flex lg:col-span-7 relative flex-row items-center justify-end gap-6">
          <div className="flex flex-col gap-4 z-20 shrink-0">
            {heroServiceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <NavHashLink smooth to="/#services" key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="card-dark p-6 rounded-3xl w-48 shadow-2xl flex flex-col justify-between h-40 cursor-pointer"
                  >
                    <span className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-xs font-bold leading-tight uppercase tracking-wider">
                      {service.title}
                    </h3>
                  </motion.div>
                </NavHashLink>
              );
            })}
          </div>

          <HeroImage className="max-w-md" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
