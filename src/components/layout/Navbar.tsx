import { useState, useEffect } from 'react';
import { Menu, X, MoveUpRight } from 'lucide-react';
import { ABSSLogo } from '../common/ABSSLogo';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why ABSS', href: '#why-abss' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = navItems.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 h-[82px] bg-[#f7f6f2]/95 border-b border-[#dedbd2] backdrop-blur-md transition-all">
      <div className="page-width h-full flex items-center justify-between">
        {/* Brand Link */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9282f]"
          aria-label="ABSS Global Corporation Home"
        >
          <ABSSLogo variant="dark" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 font-mono text-xs tracking-wider uppercase"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`py-1 transition-colors relative ${
                  isActive
                    ? 'text-[#d9282f] font-semibold'
                    : 'text-[#5e635f] hover:text-[#d9282f]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d9282f]" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            className="button button-red ml-3 text-[10px] py-2.5 px-4"
          >
            <span>Enquire Now</span>
            <MoveUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden p-2 text-[#202322] hover:text-[#d9282f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9282f]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[82px] bottom-0 bg-[#f7f6f2] z-30 border-t border-[#dedbd2] flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-1 font-mono text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="py-3.5 border-b border-[#e5e3dc] text-[#5e635f] hover:text-[#d9282f] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <MoveUpRight size={15} className="opacity-40" />
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#e5e3dc]">
            <a
              href="#contact"
              onClick={closeMenu}
              className="button button-red w-full text-xs py-3.5"
            >
              <span>Wholesale Enquiry</span>
              <MoveUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
