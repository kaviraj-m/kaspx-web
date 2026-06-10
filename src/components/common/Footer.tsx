import { motion } from 'framer-motion';
import { Youtube, Linkedin, Slack, Twitter, Instagram, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white pt-24 overflow-hidden relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top Section with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
          {/* Column 1: Brand & Desc */}
          <div className="pb-12 lg:pb-24 lg:pr-12 lg:border-r border-white/5 space-y-8">
            <div>
              <Link to="/">
                <h2 className="text-3xl font-sans font-black tracking-tighter text-white">
                  KASPX
                </h2>
              </Link>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              At Kaspx, we build strong, long-term partnerships. Our team blends creativity, advanced technology, and smart strategy to create solutions that are reliable, innovative, and impactful.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="pb-12 lg:pb-24 lg:px-12 lg:border-r border-white/5 space-y-8">
            <h4 className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', link: '/#home' },
                { name: 'About Us', link: '/#about' },
                { name: 'What We Do', link: '/#services' },
                { name: 'Projects', link: '/#projects' },
                { name: 'Let\'s Talk', link: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link smooth to={item.link} className="text-gray-300 hover:text-[#2ccbb5] transition-colors text-sm font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Column 4: Contact & Socials */}
          <div className="pb-12 lg:pb-24 lg:pl-12 space-y-10">
            <div className="space-y-6">
              <h4 className="text-gray-400 uppercase tracking-[0.2em] text-[10px] font-bold">
                Let's Talk
              </h4>
              <div className="space-y-3">
                <a href="tel:+917904612266" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <Phone size={16} className="text-[#2ccbb5]" />
                  +91 7904612266
                </a>
                <a href="tel:+918122388269" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <Phone size={16} className="text-[#2ccbb5]" />
                  +91 81223 88269
                </a>
                <Link to="/contact" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <Mail size={16} className="text-[#2ccbb5]" />
                  kaspxtech@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex gap-2">
              {[Twitter, Youtube, Linkedin, Slack, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#2ccbb5] transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
          <Link smooth to="/#home" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 font-black hover:text-[#2ccbb5] transition-colors group">
            Scroll to Top
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowUpRight size={14} className="rotate-[-45deg]" />
            </motion.div>
          </Link>

          <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
            © 2026 KASPX. All rights reserved.
          </p>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
         
            <span className="text-gray-600">Design by KASPX Tech</span>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
