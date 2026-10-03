import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Instagram, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { academy, admissionsMessage, navigation, primaryMessage, whatsappUrl } from '@/lib/site-data';
import { MobileMenu, WhatsAppLink } from '@/components/interactions';

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`brand-lockup ${inverse ? 'brand-inverse' : ''}`} aria-label="Ilmora Academy home">
      <svg className="brand-symbol" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 40V22C7 12.6 13.8 6 24 6s17 6.6 17 16v18h-6V22c0-6.4-4-10-11-10s-11 3.6-11 10v18z" fill="currentColor" />
        <path d="m34.8 3.8 2.1 4.6 5 1-3.7 3.5.9 5-4.4-2.5-4.4 2.5.9-5-3.7-3.5 5-1z" fill="#e6ae68" />
      </svg>
      <span className="brand-wordmark">ilmora<span>academy</span></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="topline"><span><Sparkles size={13} /> A little more clarity for your next big step</span><a href={`tel:${academy.phoneE164}`}>{academy.phoneDisplay} <ArrowUpRight size={12} /></a></div>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contact/">Contact</Link>
          </nav>
          <WhatsAppLink className="button button-primary header-cta" message={admissionsMessage}>Admissions <ArrowUpRight size={15} /></WhatsAppLink>
          <MobileMenu />
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-col">
          <BrandMark inverse />
          <p>Clear guidance, focused practice, and a little more confidence for the road ahead.</p>
          <div className="footer-socials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a><WhatsAppLink ariaLabel="WhatsApp Ilmora Academy" message={primaryMessage}><MessageCircle size={17} /></WhatsAppLink></div>
        </div>
        <div className="footer-links-col"><p className="footer-eyebrow">Discover</p>{navigation.slice(1, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/contact/">Contact</Link></div>
        <div className="footer-links-col"><p className="footer-eyebrow">Find your way</p><span><MapPin size={15} />{academy.city}</span><span><Phone size={15} />{academy.phoneDisplay}</span><Link href="/location/">View location <ArrowUpRight size={13} /></Link></div>
        <div className="footer-note-col"><span className="footer-kicker">A good plan changes things.</span><h3>Make the next move<br /><em>with intention.</em></h3><WhatsAppLink className="footer-arrow" message={admissionsMessage} ariaLabel="Ask about admissions on WhatsApp"><ArrowDownRight size={25} /></WhatsAppLink></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Ilmora Academy. All rights reserved.</span><span>Made for learners in Lahore, Pakistan <span className="footer-dot">●</span></span><span><Link href="/contact/">Privacy & contact</Link></span></div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, description, light = false, align = 'left' }: { eyebrow: string; title: React.ReactNode; description?: string; light?: boolean; align?: 'left' | 'center' }) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''} align-${align}`}>
      <p className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description, aside }: { eyebrow: string; title: React.ReactNode; description: string; aside?: string }) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner"><div><p className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</p><h1>{title}</h1></div><div className="page-intro-copy"><p>{description}</p>{aside && <span className="page-intro-aside">{aside}</span>}</div></div>
    </section>
  );
}

export function OutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowRight size={16} /></Link>;
}

export function WhatsAppButton({ message = primaryMessage, children, className = 'button button-primary' }: { message?: string; children: React.ReactNode; className?: string }) {
  return <WhatsAppLink className={className} message={message}>{children}<ArrowUpRight size={16} /></WhatsAppLink>;
}
