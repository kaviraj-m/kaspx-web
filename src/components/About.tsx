import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Button from './common/Button';
import image from '../assets/about.png';



const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden border-t border-gray-50">
      <article className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Image with Unique Shape */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Background Shapes */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#2ccbb5]/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-100 rounded-full blur-3xl -z-10 opacity-60" />
          
          <div className="relative z-10 group max-w-md mx-auto">
            {/* The Unique Shaped Image Container */}
            <div className="w-full aspect-[4/5] rounded-[4rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-2xl border-[8px] border-white transition-all duration-500 group-hover:rounded-[2.5rem]">
              <img 
                src={image}
                alt="Our Team Collaborating" 
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
            
           

            {/* Decorative Dot Grid */}
            <div className="absolute -top-4 -right-4 w-24 h-24 grid grid-cols-6 gap-2 -z-10 opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-black rounded-full" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
           
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-black text-black leading-[1.1] tracking-tight">
              Empowering Brands <br />
              <span className="text-gray-400 italic font-light">Through Technology</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              At Kaspx, we don’t just deliver digital solutions we build strong, long-term partnerships. 
              Our team blends creativity, advanced technology, and smart strategy to create solutions that 
              are reliable, innovative, and impactful.
            </p>
          </div>

          <div className="space-y-8 pt-4">
           
            <div className="grid grid-cols-1 gap-5">
              {[
                "Strong partnership with every client",
                "Expertise across modern digital solutions",
                "Continuous support and long-term maintenance for your products"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#2ccbb5] flex items-center justify-center shrink-0 shadow-lg shadow-[#2ccbb5]/20 transition-transform group-hover:scale-110">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <p className="text-gray-600 font-medium text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="pt-6">
            <Button to="/#services">View Services</Button>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default About;
