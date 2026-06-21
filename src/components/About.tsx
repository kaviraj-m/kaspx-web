import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from './common/Button';
import image from '../assets/about.png';

const highlights = [
  'Dedicated partnership with every client',
  'Expertise across web, apps, AI, and application hosting',
  'Ongoing support and maintenance after launch',
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden border-t border-gray-50">
      <article className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2ccbb5]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />

          <div className="relative z-10 group max-w-sm sm:max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] rounded-[3rem] sm:rounded-[4rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl border-[6px] sm:border-[8px] border-white transition-all duration-500 group-hover:rounded-[2.5rem]">
              <img
                src={image}
                alt="KASPX team building digital solutions"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-6 gap-2 -z-10 opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
        >
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ccbb5]/10 border border-[#2ccbb5]/20"
            >
              <span className="w-2 h-2 rounded-full bg-[#2ccbb5]" />
              <span className="text-[#2ccbb5] text-[10px] font-black uppercase tracking-widest">
                About Us
              </span>
            </motion.p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-sans font-black text-black leading-[1.15] tracking-tight">
              Empowering Brands
              <br />
              <span className="text-[#2ccbb5]">Through Technology</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              At KASPX, we don&apos;t just deliver digital solutions—we build strong, long-term
              partnerships. Our team blends creativity, advanced technology, and smart strategy to
              create work that is reliable, innovative, and built to grow with your business.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:gap-5 text-left max-w-xl mx-auto lg:mx-0">
            {highlights.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="w-6 h-6 mt-0.5 rounded-lg bg-[#2ccbb5] flex items-center justify-center shrink-0 shadow-lg shadow-[#2ccbb5]/20 transition-transform group-hover:scale-110">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <p className="text-gray-700 font-medium text-sm sm:text-[15px] leading-snug">{item}</p>
              </motion.li>
            ))}
          </ul>

          <div className="pt-2 flex justify-center lg:justify-start">
            <Button to="/#services">View Services</Button>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default About;
