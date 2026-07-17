import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import { Mail } from 'lucide-react';

const COMPANY_EMAIL = 'kaspxtech@gmail.com';
const COMPANY_EMAIL_HREF = 'mailto:kaspxtech@gmail.com';

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About Us', to: '/#about' },
  { label: 'What We Do', to: '/#services' },
  { label: 'KVolt', to: '/#kvolt' },
  { label: 'Projects', to: '/#projects' },
  { label: "Let's Talk", to: '/contact', isRoute: true },
];

const layerTransition = {
  type: 'spring' as const,
  damping: 30,
  stiffness: 300,
};

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const closeMenu = () => setIsMenuOpen(false);

  const isHome = pathname === '/';
  const showTopBar = !scrolled && !isMenuOpen;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      return;
    }

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (pathname === '/') {
        const sections = ['home', 'about', 'services', 'kvolt', 'projects'];
        const scrollPosition = window.scrollY + 180;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const mainNavTop = showTopBar ? 'top-10 lg:top-12' : 'top-0';

  return (
    <>
      {/* Top utility bar — hidden when scrolled or mobile menu open */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 transition-all duration-300 ease-in-out lg:block ${
          showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!showTopBar}
      >
        <div className="max-w-7xl mx-auto h-10 lg:h-12 px-3 sm:px-6 flex items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className="text-sm shrink-0" aria-hidden>
              🚀
            </span>
            <span className="text-gray-800 font-bold text-[10px] sm:text-[13px] tracking-wide font-sans truncate">
              Your Technology Partner for Business Growth
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 min-w-0">
            <Mail className="size-3.5 sm:size-4 text-[#d946ef] shrink-0" aria-hidden />
            <span className="text-gray-800 font-bold text-[10px] sm:text-[13px] font-sans whitespace-nowrap">
              Connect Us :
            </span>
            <a
              href={COMPANY_EMAIL_HREF}
              className="text-gray-900 font-bold text-[10px] sm:text-[13px] font-sans hover:text-[#2ccbb5] transition-colors no-underline truncate max-w-[9rem] sm:max-w-none"
            >
              {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${mainNavTop} ${
          isMenuOpen ? 'lg:opacity-100 opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="w-full bg-[#2ccbb5] px-4 sm:px-6 py-3 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <Link
              to="/"
              className="text-white text-xl sm:text-2xl font-sans font-black no-underline tracking-wide hover:opacity-90 transition-opacity shrink-0"
              onClick={closeMenu}
            >
              KASPX
            </Link>

            {/* Desktop / large tablet nav */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8 list-none m-0 p-0">
              {navLinks.map((item) => {
                const sectionName = item.to.replace('/#', '');
                const isActive =
                  ('isRoute' in item && item.isRoute && pathname === '/contact') ||
                  (isHome && activeSection === sectionName);

                return (
                  <li key={item.label} className="relative py-1">
                    {'isRoute' in item && item.isRoute ? (
                      <Link
                        to={item.to}
                        className={`font-semibold transition-colors no-underline text-sm xl:text-[15px] ${
                          isActive ? 'text-white' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <HashLink
                        smooth
                        to={item.to}
                        className={`font-semibold transition-colors no-underline text-sm xl:text-[15px] ${
                          isActive ? 'text-white' : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </HashLink>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-white rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block shrink-0">
              <Link
                to="/contact"
                className="cursor-pointer relative bg-white py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group inline-flex w-fit max-w-full items-center justify-start hover:bg-gray-50 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-lg no-underline border-0"
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
            </div>

            {/* Mobile & tablet menu toggle */}
            <button
              type="button"
              className="lg:hidden text-base font-semibold uppercase text-white hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer p-0 shrink-0"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet full-screen layered menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 w-full h-[100dvh] bg-black z-[1001] lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ...layerTransition, delay: 0 }}
            />
            <motion.div
              className="fixed inset-0 w-full h-[100dvh] bg-[#2ccbb5] z-[1002] lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ...layerTransition, delay: 0.1 }}
            />
            <motion.div
              className="fixed inset-0 w-full h-[100dvh] bg-white z-[1003] overflow-y-auto lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ...layerTransition, delay: 0.2 }}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-4 bg-white border-b border-gray-100">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-black text-xl font-sans font-black no-underline"
                >
                  KASPX
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="text-base font-semibold uppercase text-black hover:opacity-60 transition-opacity bg-transparent border-0 cursor-pointer"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>

              <motion.nav
                className="flex flex-col gap-6 px-6 py-10 min-h-[calc(100dvh-4.5rem)] justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.3 }}
                  >
                    {'isRoute' in item && item.isRoute ? (
                      <Link
                        to={item.to}
                        onClick={closeMenu}
                        className="text-[1.5rem] sm:text-[1.75rem] font-semibold uppercase text-black no-underline hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <HashLink
                        smooth
                        to={item.to}
                        onClick={closeMenu}
                        className="text-[1.5rem] sm:text-[1.75rem] font-semibold uppercase text-black no-underline hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </HashLink>
                    )}
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
