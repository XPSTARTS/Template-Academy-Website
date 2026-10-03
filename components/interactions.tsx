'use client';

import { useEffect, useRef, useState, type AnchorHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react';
import { academy, admissionsMessage, navigation, primaryMessage, whatsappUrl } from '@/lib/site-data';

export function WhatsAppLink({
  message = primaryMessage,
  children,
  className = '',
  ariaLabel,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { message?: string; children: ReactNode; ariaLabel?: string }) {
  return (
    <a {...props} href={whatsappUrl(message)} className={className} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <div className="mobile-nav">
      <button className="icon-button mobile-nav-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation-panel" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}>
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <div className="mobile-nav-panel" id="mobile-navigation-panel">
          <div className="mobile-nav-top"><span>Explore Ilmora</span><button className="icon-button" type="button" aria-label="Close menu" onClick={() => setOpen(false)}><X size={20} /></button></div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span className="mobile-nav-index">0{index + 1}</span>{item.label}<ArrowUpRight size={16} />
              </Link>
            ))}
            <Link href="/contact/" onClick={() => setOpen(false)}><span className="mobile-nav-index">07</span>Contact<ArrowUpRight size={16} /></Link>
          </nav>
          <WhatsAppLink className="button button-primary mobile-menu-cta" message={admissionsMessage} onClick={() => setOpen(false)}>Ask about admissions <ArrowUpRight size={16} /></WhatsAppLink>
          <p className="mobile-menu-note">{academy.city} · One conversation at a time.</p>
        </div>
      )}
      {open && <button className="mobile-nav-scrim" aria-label="Close navigation menu" onClick={() => setOpen(false)} />}
    </div>
  );
}

export function FloatingWhatsApp() {
  return <WhatsAppLink className="floating-whatsapp" message={primaryMessage} ariaLabel="Chat with Ilmora Academy on WhatsApp"><MessageCircle size={20} fill="currentColor" strokeWidth={1.8} /><span>Chat with us</span></WhatsAppLink>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
