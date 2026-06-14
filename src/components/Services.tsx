import { motion } from 'framer-motion';
import Button from './common/Button';
import { services } from '../data/services';
import type { Service } from '../data/services';
import serviceone from '../assets/s1.png';
import servicetwo from '../assets/s2.png';
import servicethree from '../assets/s3.png';

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const cardsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.06,
    },
  },
};

const cardRevealVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easeSmooth,
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const contentLineVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeSmooth },
  },
};

const BackgroundDecorations = () => (
  <aside
    className="absolute right-4 sm:right-8 top-1/3 pointer-events-none select-none hidden md:block"
    aria-hidden
  >
    <span className="grid grid-cols-5 gap-2">
      {Array.from({ length: 25 }).map((_, i) => (
        <span key={i} className="block w-1.5 h-1.5 rounded-full bg-gray-300/80" />
      ))}
    </span>
  </aside>
);

const splitDescLines = (text: string) =>
  text.split(/(?<=[.!?])\s+/).filter((line) => line.trim().length > 0);

const ServiceCard = ({ title, image, desc, icon: Icon }: Service) => {
  const descLines = splitDescLines(desc);

  return (
    <motion.article variants={cardRevealVariants} className="group flex flex-col w-full">
      <motion.div
        variants={contentLineVariants}
        className="relative h-48 sm:h-52 md:h-56 overflow-hidden rounded-t-md"
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: easeSmooth }}
        />
      </motion.div>

      <motion.div
        variants={contentLineVariants}
        className="relative -mt-12 sm:-mt-14 mx-2 sm:mx-3 md:mx-4 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-4 sm:px-6 pb-5 sm:pb-6 pt-8 sm:pt-10 flex-1 flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: easeSmooth }}
      >
        <motion.div
          variants={contentLineVariants}
          className="absolute -top-4 sm:-top-5 right-4 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#f97316] flex items-center justify-center shadow-md ring-4 ring-white"
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
        </motion.div>

        <motion.h3
          variants={contentLineVariants}
          className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2 sm:mb-3"
        >
          {title}
        </motion.h3>

        <motion.div className="space-y-1.5 sm:space-y-2 flex-1">
          {descLines.map((line, i) => (
            <motion.p
              key={`${title}-line-${i}`}
              variants={contentLineVariants}
              className="text-gray-400 text-xs sm:text-sm leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

const Services = () => (
  <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#f4f5f7] overflow-hidden relative">
    <BackgroundDecorations />

    <motion.div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ccbb5]/10 border border-[#2ccbb5]/20 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#2ccbb5]" />
          <span className="text-[#2ccbb5] text-[10px] font-black uppercase tracking-widest">
            Our Services
          </span>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-black px-2">
          Innovative Services
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm sm:text-base px-4">
          Websites, apps, AI, server support and maintenance, and blockchain — everything your business
          needs to grow online.
        </p>
      </motion.div>

      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.06 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6"
      >
        {services.map((service, index) => {
          const images = [serviceone, servicetwo, servicethree];
          return (
            <ServiceCard 
              key={service.title} 
              {...service} 
              image={index < 3 ? images[index] : service.image} 
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 sm:mt-20 text-center px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3">
          Ready to bring your idea to life?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg">
          Tell us what you need and we&apos;ll help you choose the right service and get started.
        </p>
        <div className="flex justify-center">
          <Button to="/contact">Get in Touch</Button>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Services;
