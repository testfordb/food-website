'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@uidotdev/usehooks';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    rootMargin: '-96px',
  });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.style.overflowY = isNavOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <header
      className={`header flex justify-between items-center h-[9.6rem] bg-[#fdf2e9] px-[4.8rem] relative z-50 ${entry?.isIntersecting ? '' : 'fixed top-0 left-0 w-full h-[8rem] bg-white/95 shadow-[0_1.2rem_3.2rem_rgba(0,0,0,0.03)]'} max-[1200px]:px-[3.2rem]`}
      ref={ref}
    >
      <a href="#">
        <Image src="/img/omnifood-logo.png" alt="Omnifood logo" width={88} height={22} className="logo h-[2.2rem]" />
      </a>
      <nav className={`main-nav fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-[10px] flex items-center justify-center transition-all duration-500 ${isNavOpen ? 'translate-x-0 opacity-100 pointer-events-auto visible' : 'translate-x-full opacity-0 pointer-events-none invisible'} md:static md:bg-transparent md:h-auto md:translate-x-0 md:opacity-100 md:pointer-events-auto md:visible`}>
        <ul className="main-nav-list flex flex-col md:flex-row items-center gap-[4.8rem] list-none max-[1200px]:gap-[3.2rem] max-[944px]:gap-[4.8rem]">
          {[
            { text: 'How it works', href: '#how' },
            { text: 'Meals', href: '#meals' },
            { text: 'Testimonials', href: '#testimonials' },
            { text: 'Pricing', href: '#pricing' },
            { text: 'Try for free', href: '#cta', cta: true },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`main-nav-link text-[1.8rem] font-medium text-[#333] no-underline transition-all hover:text-[#cf711f] ${item.cta ? 'nav-cta bg-[#e67e22] text-white px-[2.4rem] py-[1.2rem] rounded-[9px] hover:bg-[#cf711f]' : ''} max-[944px]:text-[3rem]`}
                onClick={toggleNav}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className="btn-mobile-nav hidden md:hidden" onClick={toggleNav} aria-label="Toggle navigation">
        <svg className={`icon-mobile-nav h-[4.8rem] w-[4.8rem] text-[#333] ${isNavOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg className={`icon-mobile-nav h-[4.8rem] w-[4.8rem] text-[#333] ${isNavOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </header>
  );
}