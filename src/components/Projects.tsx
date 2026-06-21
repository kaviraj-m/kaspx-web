import { motion } from 'framer-motion';
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.png';
import memorix from '../assets/memorix.png';

const projects = [
  {
    id: '01',
    title: 'Website',
    image: p1,
    bgColor: 'bg-[#c4cbff]',
    description:
      'Designed and developed a modern, responsive school website for London Look School, showcasing academic programs, admissions, facilities, and school activities through a clean, user-friendly digital experience.',
  },
  {
    id: '02',
    title: 'E-Commerce',
    image: p2,
    bgColor: 'bg-[#9ce89d]',
    description:
      'A modern pet e-commerce website built to showcase aquarium fish, pet supplies, and accessories with a smooth and user-friendly shopping experience.',
  },
  {
    id: '03',
    title: 'KVolt Framework',
    image: p3,
    bgColor: 'bg-[#f3cafc]',
    description:
      'Engineered KVolt, our open-source Go web framework built for production-grade speed and simplicity — zero-allocation routing, async logging, built-in middleware, and automatic request validation. A dedicated CLI helps teams scaffold and ship APIs in minutes.',
  },
  {
    id: '04',
    title: 'Memorix',
    image: memorix,
    bgColor: 'bg-[#fcd5b8]',
    description:
      'Built Memorix, a full-stack order management portal for custom frame businesses — React web app with a Go API, role-based Admin, Executive, and Designer workflows, enquiry-to-dispatch pipeline, analytics dashboards, and attendance reporting.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 xl:mb-20 px-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold leading-tight tracking-tighter uppercase text-dark"
          >
            Explore our recent projects
          </motion.h2>
        </div>

        <div
          className={[
            'flex lg:grid overflow-x-auto lg:overflow-visible',
            'snap-x snap-mandatory lg:snap-none',
            'gap-5 xl:gap-8 lg:items-stretch',
            'lg:grid-cols-2 xl:grid-cols-3',
            'pb-2 lg:pb-0 -mx-1 px-1',
            '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
          ].join(' ')}
        >
          {projects.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className={[
                item.bgColor,
                'rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center',
                'transition-transform hover:-translate-y-1 duration-300 h-full',
                'flex-shrink-0 snap-center',
                'w-[min(85vw,360px)] sm:w-[min(75vw,380px)] md:w-[min(55vw,400px)]',
                'lg:w-full lg:flex-shrink lg:snap-align-none lg:min-w-0',
                'md:p-5 md:rounded-2xl',
                'xl:p-6 xl:rounded-3xl',
              ].join(' ')}
            >
              <div
                className="text-5xl sm:text-6xl md:text-5xl xl:text-7xl font-heading font-black mb-1 select-none leading-none"
                style={{
                  WebkitTextStroke: '1.5px #111827',
                  color: 'transparent',
                }}
              >
                {item.id}
              </div>

              <h3 className="text-lg sm:text-xl md:text-lg xl:text-2xl font-heading font-black uppercase text-dark mb-4 sm:mb-5 md:mb-3 xl:mb-6 tracking-tight">
                {item.title}
              </h3>

              <div className="w-full aspect-[16/10] sm:aspect-[4/3] md:aspect-[5/4] xl:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 md:mb-3 xl:mb-6 shadow-sm border border-dark/10 bg-white/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <p className="text-dark/80 text-sm sm:text-base md:text-[13px] md:leading-snug xl:text-base xl:leading-relaxed font-medium leading-relaxed px-1 sm:px-2 md:px-0 xl:px-2">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
