import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarCheck, Users, Zap } from 'lucide-react';
import calImg from '../assets/Cal.png';
import conBgImg from '../assets/conbgimg.png';

const features = [
  { icon: CalendarCheck, label: 'Free Consultation' },
  { icon: Users, label: 'Expert Guidance' },
  { icon: Zap, label: 'Fast Response' },
];

export const ConsultationBanner = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1db8a4 0%, #2ccbb5 35%, #3dd8c2 70%, #2ccbb5 100%)',
          }}
        >
          <img
            src={conBgImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25 sm:opacity-40 md:opacity-55 pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16">
            <div className="flex flex-col items-start text-left order-1 md:max-w-2xl md:mx-auto lg:max-w-none lg:mx-0">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 sm:mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Let&apos;s Build Something Great
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading text-white leading-[1.08] mb-4 sm:mb-5"
              >
                Book a
                <br />
                Consultation
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/85 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-5 sm:mb-6 md:mb-8"
              >
                Have a project in mind or need expert advice? Schedule a free consultation with our team and
                let&apos;s turn your ideas into reality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8"
              >
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <span
                      key={f.label}
                      className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] sm:text-sm font-semibold"
                    >
                      <Icon className="size-3.5 sm:size-4 shrink-0" />
                      {f.label}
                    </span>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5 w-full"
              >
                <Link
                  to="/contact"
                  className="cursor-pointer relative bg-white py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group inline-flex w-fit max-w-full items-center justify-start hover:bg-gray-50 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-lg no-underline border-0 shrink-0"
                >
                  <span className="absolute flex px-1 py-0.5 justify-start items-center inset-0 pointer-events-none">
                    <span className="rounded-full shrink-0 flex justify-center items-center shadow-sm h-full aspect-square bg-[#2ccbb5] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-dark">
                      <span className="size-[0.8rem] text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] inline-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                          <path
                            fill="currentColor"
                            d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                          />
                        </svg>
                      </span>
                    </span>
                  </span>
                  <span className="pl-[3.4rem] pr-[1.2rem] text-dark font-bold text-sm whitespace-nowrap">
                    Book a Consultation
                  </span>
                </Link>

                <span className="hidden lg:flex items-center gap-1 text-white/80">
                  <svg
                    width="36"
                    height="24"
                    viewBox="0 0 36 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                    aria-hidden
                  >
                    <path
                      d="M34 18C28 6 14 4 4 12"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.8"
                    />
                    <path
                      d="M9 7L4 12L9 17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      opacity="0.8"
                    />
                  </svg>
                  <span
                    className="text-base lg:text-lg"
                    style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
                  >
                    Let&apos;s discuss your project
                  </span>
                </span>
              </motion.div>
            </div>

            {/* Calendar: mobile + desktop only — hidden on tablet (md–lg) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="order-2 flex md:hidden lg:flex justify-center items-center w-full pt-2 sm:pt-0 pb-2 sm:pb-4 lg:pb-0"
            >
              <div className="relative w-full flex justify-center">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] max-w-[280px] aspect-square bg-white/15 rounded-full blur-[60px] pointer-events-none"
                  aria-hidden
                />
                <img
                  src={calImg}
                  alt="Book a consultation calendar"
                  className="relative z-10 w-[min(88vw,300px)] sm:w-[min(75vw,340px)] md:w-[min(100%,320px)] lg:w-[min(90%,400px)] xl:max-w-[420px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
