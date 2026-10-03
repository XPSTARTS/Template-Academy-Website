import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Check, Clock3, Compass, GraduationCap, MapPin, MessageCircle, Sparkles, Star, UsersRound } from 'lucide-react';
import { PageIntro, SectionHeading, WhatsAppButton, OutlineLink } from '@/components/site-shell';
import { Reveal, WhatsAppLink } from '@/components/interactions';
import { aboutMessage, academy, admissionsMessage, courseMessage, faculty, facultyMessage, feesMessage, packages, planMessage, primaryMessage, programs, visitMessage, whatsappUrl } from '@/lib/site-data';

function ProgramCard({ program, dark = false }: { program: (typeof programs)[number]; dark?: boolean }) {
  return (
    <article className={`program-card ${dark ? 'program-card-dark' : ''}`}>
      <div className="program-top"><span className="program-symbol">{program.icon}</span><span className="program-badge">{program.badge}</span></div>
      <p className="program-type">{program.type}</p>
      <h3>{program.name}</h3>
      <p>{program.detail}</p>
      <div className="program-meta"><span><Clock3 size={13} /> {program.duration}</span><WhatsAppLink message={courseMessage(program.name)}>Book your seat <ArrowUpRight size={14} /></WhatsAppLink></div>
    </article>
  );
}

function FacultyCard({ teacher }: { teacher: (typeof faculty)[number] }) {
  return (
    <article className="faculty-card">
      <div className={`faculty-avatar faculty-avatar-${teacher.color}`} aria-hidden="true"><span>{teacher.initials}</span><i /></div>
      <div className="faculty-content"><p className="faculty-subject">{teacher.role}</p><h3>{teacher.name}</h3><p className="faculty-credential">{teacher.credential}</p><p>{teacher.bio}</p></div>
    </article>
  );
}

function PackageCard({ plan }: { plan: (typeof packages)[number] }) {
  return (
    <article className={`package-card ${plan.featured ? 'package-card-featured' : ''}`}>
      {plan.featured && <span className="package-ribbon">Most chosen</span>}
      <span className="package-label">{plan.name}</span>
      <h3>{plan.course.split(' · ')[0]}</h3>
      <p className="package-course">{plan.course}</p>
      <p className="package-price">{plan.price}</p><p className="package-note">{plan.note}</p>
      <div className="package-rule" />
      <ul className="package-features">{plan.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
      <WhatsAppButton className={plan.featured ? 'button button-cream' : 'button button-primary'} message={planMessage(plan.name, plan.course)}>Ask about this plan</WhatsAppButton>
    </article>
  );
}

function CtaBand({ title, description, button = 'Talk to admissions', message = admissionsMessage }: { title: React.ReactNode; description: string; button?: string; message?: string }) {
  return (
    <section className="cta-band"><div className="container cta-band-inner"><div className="cta-band-copy"><p className="eyebrow"><span className="eyebrow-mark" />Your next step, made clearer</p><h2>{title}</h2><p>{description}</p></div><WhatsAppButton className="button button-cream" message={message}>{button}</WhatsAppButton></div></section>
  );
}

function ProgramGrid({ count = programs.length, dark = false }: { count?: number; dark?: boolean }) {
  return <div className="program-grid">{programs.slice(0, count).map((program, index) => <Reveal key={program.id} delay={index * 70}><ProgramCard program={program} dark={dark} /></Reveal>)}</div>;
}

export function HomePage() {
  return (
    <>
      <section className="hero"><div className="container hero-shell">
        <div className="hero-copy animate-hero"><div className="hero-overline"><span className="hero-overline-dot" />Admissions open · Lahore</div><h1>Your next result starts with a <em>better plan.</em></h1><p className="hero-lede">Focused preparation, thoughtful teachers and a clear next step — for the exam or opportunity that matters to you.</p><div className="hero-actions"><WhatsAppButton message={admissionsMessage}>Talk to admissions</WhatsAppButton><Link className="text-link" href="/programs/">Explore our programs <ArrowRight size={16} /></Link></div><div className="hero-note"><Sparkles size={15} /><span>A supportive space to do your best work.</span></div></div>
        <div className="hero-photo-wrap animate-image"><img className="hero-photo" src="/images/ilmora-hero.webp" alt="College-age students working together on exam preparation" fetchPriority="high" /><div className="hero-caption">A better way to prepare <span>·</span> Gulberg, Lahore</div></div><div className="hero-side-badge">Start with<br />a plan</div>
      </div><div className="hero-index"><strong>01</strong><span className="hero-index-line" /><span>Learning that moves with you</span></div></section>
      <section className="trust-ribbon"><div className="container trust-inner">
        <div className="trust-item"><span className="trust-icon"><GraduationCap size={19} /></span><span><strong>Expert-guided</strong><small>classes that make sense</small></span></div>
        <div className="trust-item"><span className="trust-icon"><UsersRound size={18} /></span><span><strong>Small learning groups</strong><small>room to ask and grow</small></span></div>
        <div className="trust-item"><span className="trust-icon"><BookOpen size={17} /></span><span><strong>Weekly progress checks</strong><small>know what comes next</small></span></div>
        <div className="trust-item"><span className="trust-icon"><MapPin size={17} /></span><span><strong>Based in Lahore</strong><small>local, welcoming campus</small></span></div>
      </div></section>
      <section className="section"><div className="container split-section">
        <Reveal className="split-copy"><p className="eyebrow"><span className="eyebrow-mark" />A little more than a classroom</p><h2>Good preparation changes how you <em>feel about the future.</em></h2><p>At Ilmora, we pair clear teaching with a plan you can actually follow. Whether you are aiming for a language test, an entry exam or stronger foundations, you will know what you are working on — and why.</p><ul className="feature-list"><li><span className="feature-check"><Check size={13} /></span>Learn concepts before you memorise the answers.</li><li><span className="feature-check"><Check size={13} /></span>Practice in a calm, encouraging group.</li><li><span className="feature-check"><Check size={13} /></span>Get helpful feedback on what to focus on next.</li></ul><OutlineLink href="/about/">Get to know Ilmora</OutlineLink></Reveal>
        <Reveal className="photo-stack" delay={120}><img className="photo-main" src="/images/ilmora-learning.webp" alt="An instructor helping students work through their preparation notes" loading="lazy" /><div className="photo-stamp"><strong>One step</strong><span>at a time, with guidance</span></div><span className="photo-caption">Purposeful learning in Lahore</span></Reveal>
      </div></section>
      <section className="section section-soft"><div className="container"><div className="section-kicker-row"><SectionHeading eyebrow="Find your focus" title={<>A course for the <em>next chapter.</em></>} description="Small steps, clear practice and a program shaped around your goal." /><OutlineLink href="/programs/">See all programs</OutlineLink></div><ProgramGrid count={3} /></div></section>
      <section className="section section-dark"><div className="container"><SectionHeading light eyebrow="The Ilmora approach" title={<>Not more pressure.<br /><em>A better rhythm.</em></>} description="Preparation works best when progress feels possible. We make space for understanding, practice and honest feedback." /><div className="values-grid"><div className="value-item"><span className="value-number">01</span><h3>Make it clear</h3><p>Start with the core idea. Build confidence before moving on to harder questions.</p></div><div className="value-item"><span className="value-number">02</span><h3>Practice with purpose</h3><p>Connect class learning to the kind of questions and tasks you will actually meet.</p></div><div className="value-item"><span className="value-number">03</span><h3>Keep moving forward</h3><p>Use regular check-ins to see what is improving and where to focus next.</p></div></div></div></section>
      <CtaBand title={<>The next step is a<br /><em>conversation.</em></>} description="Tell us what you are preparing for. We will help you find a good place to begin." />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Our story" title={<>A more thoughtful<br /><em>way to learn.</em></>} description="Ilmora Academy brings focused preparation and human guidance together — so learners can make their next move with more confidence." aside="A sample academy brand based in Lahore, Pakistan" />
      <section className="section"><div className="container split-section"><Reveal className="photo-stack"><img className="photo-main" src="/images/ilmora-learning.webp" alt="An academy teacher guiding learners through an exercise" loading="lazy" /><div className="photo-stamp"><strong>Learn</strong><span>with clarity and care</span></div><span className="photo-caption">A learning space built around people</span></Reveal><Reveal className="split-copy"><p className="eyebrow"><span className="eyebrow-mark" />Why we are here</p><h2>Every learner deserves a plan that feels <em>within reach.</em></h2><p>Preparing for a test or a new opportunity can feel like a lot to carry. Our role is to make it easier to see the path ahead — with attentive teaching, focused practice and guidance that treats every question as a good place to start.</p><p>Ilmora is a sample academy identity created to show how a modern Pakistani learning centre can communicate its approach online. Replace this story with your academy's real history and mission before launch.</p><WhatsAppButton message={aboutMessage}>Ask about our approach</WhatsAppButton></Reveal></div></section>
      <section className="section section-dark"><div className="container"><SectionHeading light eyebrow="What guides us" title={<>Small things that make<br /><em>learning feel different.</em></>} description="A few principles shape how every session is designed." /><div className="values-grid"><div className="value-item"><span className="value-number">01</span><h3>Respect the learner</h3><p>Meet students where they are. Let questions be part of how progress happens.</p></div><div className="value-item"><span className="value-number">02</span><h3>Teach for understanding</h3><p>Make hard ideas easier to hold on to, not just easier to repeat.</p></div><div className="value-item"><span className="value-number">03</span><h3>Make progress visible</h3><p>Regular practice and useful feedback help learners see the work paying off.</p></div></div></div></section>
      <CtaBand title={<>Let’s find your<br /><em>starting point.</em></>} description="Share your goal and our admissions team can help you explore the right course." />
    </>
  );
}

export function ProgramsPage() {
  return (
    <>
      <PageIntro eyebrow="Programs & subjects" title={<>Prepare for what<br /><em>comes next.</em></>} description="Choose a focused path for your language goal, entry test or intermediate studies. Each program is designed to make the next step easier to see." aside="Course durations shown are illustrative; confirm the current intake with admissions." />
      <section className="section section-soft"><div className="container"><div className="sample-disclaimer"><Sparkles size={15} />These program descriptions are sample website content. Ask admissions to confirm current batches, schedules and availability.</div><ProgramGrid /></div></section>
      <section className="section"><div className="container split-section"><Reveal className="split-copy"><p className="eyebrow"><span className="eyebrow-mark" />A clear routine helps</p><h2>From first lesson to final <em>practice test.</em></h2><p>Our teaching rhythm balances learning, independent practice and review. The right mix can vary by subject and your starting point, so we begin by understanding what you need.</p><ul className="feature-list"><li><span className="feature-check"><Check size={13} /></span>Get a feel for the course before you commit.</li><li><span className="feature-check"><Check size={13} /></span>Ask how each batch fits with your schedule.</li><li><span className="feature-check"><Check size={13} /></span>Know what materials and practice are included.</li></ul><WhatsAppButton message={admissionsMessage}>Ask which program fits</WhatsAppButton></Reveal><div className="contact-card"><p className="eyebrow"><span className="eyebrow-mark" />Not sure yet?</p><h3>Start with a question.</h3><p>Send us the exam you are preparing for and your preferred start date. Our team can share a suitable next step and current batch details.</p><WhatsAppButton message={admissionsMessage}>Message admissions</WhatsAppButton></div></div></section>
      <CtaBand title={<>Your goal deserves<br /><em>a good game plan.</em></>} description="Tell us where you are starting. We will help you understand the path." />
    </>
  );
}

export function FacultyPage() {
  return (
    <>
      <PageIntro eyebrow="Meet the faculty" title={<>Guidance from people<br /><em>who care.</em></>} description="Great teaching makes room for questions, clear explanations and steady encouragement. Meet the sample faculty team behind the Ilmora Academy template." aside="Sample instructor profiles and qualifications — replace with verified faculty information." />
      <section className="section section-soft"><div className="container"><div className="faculty-grid">{faculty.map((teacher, index) => <Reveal key={teacher.name} delay={index * 70}><FacultyCard teacher={teacher} /></Reveal>)}</div></div></section>
      <section className="section"><div className="container split-section"><Reveal className="split-copy"><p className="eyebrow"><span className="eyebrow-mark" />Learning, together</p><h2>Good teachers help you see what you can <em>do next.</em></h2><p>Our instructors focus on clear explanations and useful feedback, so every learner can take away something practical from each session.</p><ul className="feature-list"><li><span className="feature-check"><Check size={13} /></span>Subject-specific support across exam pathways.</li><li><span className="feature-check"><Check size={13} /></span>Approachable teaching with room to ask questions.</li><li><span className="feature-check"><Check size={13} /></span>Regular check-ins that keep learning on track.</li></ul></Reveal><div className="contact-card"><p className="eyebrow"><span className="eyebrow-mark" />Teaching at Ilmora</p><h3>Want to meet the right instructor?</h3><p>Tell us the subject and course you have in mind. We can share faculty details and help you understand how the classes work.</p><WhatsAppButton message={facultyMessage}>Ask about faculty</WhatsAppButton></div></div></section>
      <CtaBand title={<>Learn with a team<br /><em>in your corner.</em></>} description="Reach out to ask about our subjects, class formats and current faculty." />
    </>
  );
}

export function PackagesPage() {
  return (
    <>
      <PageIntro eyebrow="Packages & fees" title={<>A plan that fits<br /><em>your next step.</em></>} description="Explore sample learning plans for English practice and entry-test preparation. We will help you compare options and understand what is included." aside="Fees and inclusions below are illustrative demo content, not an official offer." />
      <section className="section section-soft"><div className="container"><div className="sample-disclaimer"><Sparkles size={15} />Sample packages and PKR fees for this template only. Replace with your academy's current prices, schedule, and enrolment terms before launch.</div><div className="package-grid">{packages.map((plan, index) => <Reveal key={plan.name} delay={index * 75}><PackageCard plan={plan} /></Reveal>)}</div></div></section>
      <section className="section"><div className="container split-section"><div className="split-copy"><p className="eyebrow"><span className="eyebrow-mark" />Before you enrol</p><h2>Know what is included. <em>Feel good about the choice.</em></h2><p>Every learner starts from a different place. Ask about the current batch, placement, timetable, resources and payment schedule to find an option that makes sense for you.</p><ul className="feature-list"><li><span className="feature-check"><Check size={13} /></span>Ask whether a trial or placement conversation is available.</li><li><span className="feature-check"><Check size={13} /></span>Confirm start dates and weekly class timings.</li><li><span className="feature-check"><Check size={13} /></span>Get a written summary of fee and course inclusions.</li></ul></div><div className="contact-card"><p className="eyebrow"><span className="eyebrow-mark" />Need a hand?</p><h3>Let’s compare your options.</h3><p>Send admissions the course you have in mind and your preferred start date. We can share the latest package information.</p><WhatsAppButton message={feesMessage}>Ask for current fees</WhatsAppButton></div></div></section>
      <CtaBand title={<>Let’s find a plan<br /><em>that works for you.</em></>} description="Ask us about current fees, inclusions and upcoming batches." button="Ask about packages" message={feesMessage} />
    </>
  );
}

export function LocationPage() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(academy.mapQuery)}`;
  return (
    <>
      <PageIntro eyebrow="Location & visit" title={<>A welcoming place<br /><em>to focus.</em></>} description="Visit our sample Gulberg location to ask about classes, meet the team and get a feel for the learning space." aside="Demo address shown for the template. Replace it with the academy's exact location." />
      <section className="section"><div className="container location-layout"><div><p className="eyebrow"><span className="eyebrow-mark" />Come say salam</p><h2>Find us in<br /><em>Gulberg, Lahore.</em></h2><p className="section-description">We would be happy to help you find the right course and answer questions about visiting the academy.</p><div className="contact-list"><div className="contact-row"><span className="contact-icon"><MapPin size={17} /></span><div><b>Address</b><span>{academy.address}<br />Lahore, Pakistan</span></div></div><div className="contact-row"><span className="contact-icon"><Clock3 size={17} /></span><div><b>Visiting hours</b><span>{academy.hours}<br />Please message before your visit.</span></div></div><div className="contact-row"><span className="contact-icon"><MessageCircle size={17} /></span><div><b>WhatsApp</b><a href={whatsappUrl(visitMessage)} target="_blank" rel="noopener noreferrer">{academy.phoneDisplay} <ArrowUpRight size={12} /></a></div></div></div><a className="button button-primary" style={{marginTop:28}} href={directionsUrl} target="_blank" rel="noopener noreferrer">Get directions <Compass size={15} /></a></div><div className="map-card" aria-label="Illustrative map showing Ilmora Academy in Gulberg, Lahore"><a className="map-open" href={directionsUrl} target="_blank" rel="noopener noreferrer">Open in Maps <ArrowUpRight size={13} /></a><span className="map-pin"><MapPin size={21} fill="currentColor" /></span><span className="map-label">Ilmora Academy · Gulberg</span><span className="map-caption">Illustrative location map · verify address before visiting</span></div></div></section>
      <CtaBand title={<>A quick message makes<br /><em>planning easier.</em></>} description="Confirm directions, visiting hours or your preferred appointment before coming by." button="Message before visiting" message={visitMessage} />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact & admissions" title={<>Tell us where<br /><em>you want to go.</em></>} description="A quick conversation can make the next step clearer. Share the course you are considering and we will help with the details." aside="Typically the easiest way to reach us is WhatsApp." />
      <section className="section"><div className="container location-layout"><div><p className="eyebrow"><span className="eyebrow-mark" />We are here to help</p><h2>Let’s start with<br /><em>your question.</em></h2><p className="section-description">Ask about subjects, current batches, timings or fees. You do not need to have everything figured out before you write.</p><div className="contact-list"><div className="contact-row"><span className="contact-icon"><MessageCircle size={17} /></span><div><b>WhatsApp admissions</b><a href={whatsappUrl(admissionsMessage)} target="_blank" rel="noopener noreferrer">{academy.phoneDisplay} <ArrowUpRight size={12} /></a></div></div><div className="contact-row"><span className="contact-icon"><MapPin size={17} /></span><div><b>Visit us</b><span>{academy.address}<br />{academy.city}</span></div></div><div className="contact-row"><span className="contact-icon"><Clock3 size={17} /></span><div><b>Opening hours</b><span>{academy.hours}</span></div></div></div><WhatsAppButton message={admissionsMessage}>Message admissions</WhatsAppButton></div><div className="contact-card"><p className="eyebrow"><span className="eyebrow-mark" />A few common questions</p><div className="faq-list"><div className="faq-item"><h3>How do I choose a program?</h3><p>Tell us what you are preparing for, your timeline and where you would like support. Our team can explain the best-fit options.</p></div><div className="faq-item"><h3>How do I confirm the latest fees?</h3><p>WhatsApp admissions for current fee details, batch availability and any active enrolment information.</p></div><div className="faq-item"><h3>Can I visit before joining?</h3><p>Yes. Please message first so the team can confirm visiting hours and arrange a convenient time.</p></div></div><Link href="/programs/" className="text-link" style={{marginTop:23}}>Explore the programs <ArrowRight size={15} /></Link></div></div></section>
      <section className="section section-soft section-compact"><div className="container"><SectionHeading align="center" eyebrow="Choose your starting point" title={<>One message can help you <em>make a plan.</em></>} description="Share a little about your goal and preferred start date." /><div style={{display:'flex',justifyContent:'center'}}><WhatsAppButton message={primaryMessage}>Start a WhatsApp conversation</WhatsAppButton></div></div></section>
    </>
  );
}
