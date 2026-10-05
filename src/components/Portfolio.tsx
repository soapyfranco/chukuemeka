import { useEffect, useRef, useState } from 'react'
import { cases, chapters, deck, evidence, links, media, profile } from '../content/portfolio'
import type { EvidenceKey, LinkKey, MediaKey } from '../content/portfolio'

type Overlay = { type: 'evidence'; key: EvidenceKey } | { type: 'video'; key: MediaKey } | { type: 'link'; key: LinkKey } | { type: 'deck' } | { type: 'results' } | { type: 'pilot' } | null

function Arrow({ direction = 'up', className = '' }: { direction?: 'up' | 'down' | 'left' | 'right'; className?: string }) {
  return <svg className={`arrow arrow-${direction} ${className}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg>
}
function Play() {
  return <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 4 13 8-13 8V4Z" fill="currentColor" /></svg>
}

export function Portfolio() {
  const [overlay, setOverlay] = useState<Overlay>(null)
  const [activeCase, setActiveCase] = useState<EvidenceKey>('account')
  const [activeChapter, setActiveChapter] = useState('work')
  const [progress, setProgress] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const currentCase = cases.find(c => c.id === activeCase)!
  const open = (value: Overlay) => { returnFocus.current = document.activeElement as HTMLElement; setMenuOpen(false); setOverlay(value); if (value?.type === 'deck') setSlide(0) }
  const close = () => { dialog.current?.close(); setOverlay(null); returnFocus.current?.focus() }

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActiveChapter(entry.target.id)
    }, { rootMargin: '-20% 0px -60% 0px' })
    chapters.forEach(chapter => {
      const element = document.getElementById(chapter.id)
      if (element) observer.observe(element)
    })
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); observer.disconnect() }
  }, [])

  useEffect(() => {
    const element = dialog.current
    if (!overlay || !element) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    element.showModal()
    return () => { element.close(); document.body.style.overflow = previousOverflow }
  }, [overlay])

  useEffect(() => {
    if (overlay?.type !== 'deck') return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') { event.preventDefault(); setSlide(s => Math.min(deck.length - 1, s + 1)) }
      if (event.key === 'ArrowLeft') { event.preventDefault(); setSlide(s => Math.max(0, s - 1)) }
      if (event.key === 'Home') { event.preventDefault(); setSlide(0) }
      if (event.key === 'End') { event.preventDefault(); setSlide(deck.length - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [overlay])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="David Nkemere — back to top">DAVID NKEMERE<span className="wordmark-dot" /></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#story">Story</a><a href="#contact">Connect</a></nav>
      <button className="deck-trigger" onClick={() => open({ type: 'deck' })}>View as a deck <Arrow /></button>
      <button className="mobile-menu-trigger" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(v => !v)}><span /><span /></button>
    </header>
    {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{chapters.map(ch => <a key={ch.id} href={`#${ch.id}`} onClick={() => setMenuOpen(false)}><span>{ch.number}</span>{ch.label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Connect <Arrow /></a></nav>}

    <main id="main">
      <section id="top" className="hero section-wrap">
        <div className="hero-topline"><p className="eyebrow">GTM strategy & creative direction</p><p className="eyebrow edition">Selected work / 2018—2026</p></div>
        <div className="hero-grid">
          <div className="hero-heading"><h1>Growth,<br /><span>by design.</span></h1><p className="hero-thesis">I build the systems that turn<br className="desktop-only" /> ambition into coordinated action.</p></div>
          <div className="hero-aside"><button className="hero-image media-button" onClick={() => open({ type: 'video', key: 'halo' })} aria-label="Watch KAIRO HALO, directed by David Nkemere"><img src="/media/halo.webp" alt="KAIRO in HALO, a music video directed by David Nkemere" width="1280" height="720" fetchPriority="high" /><span className="round-play"><Play /></span></button><div className="image-caption"><span>Creative direction · KAIRO</span><span>2026</span></div><p>I modernized Net Health’s GTM.<br />The tools. The standard for strategy.<br />The language we organized around.</p><a className="text-link" href="#work">Explore the work <Arrow direction="down" /></a></div>
        </div>
        <div className="hero-bottom"><span className="eyebrow">Strategy is a practice.<br />Art is an instinct.</span><span className="eyebrow muted">Based in Los Angeles<br />Built across disciplines</span><a href="#work" className="scroll-cue" aria-label="Scroll to selected work"><span>Scroll to discover</span><Arrow direction="down" /></a></div>
      </section>

      <div className="chapter-nav" aria-label="Story chapters"><div>{chapters.map(ch => <a key={ch.id} href={`#${ch.id}`} className={activeChapter === ch.id ? 'active' : ''} aria-current={activeChapter === ch.id ? 'location' : undefined}><span>{ch.number}</span>{ch.label}</a>)}</div></div>

      <section id="work" className="work-section section-wrap">
        <div className="section-label"><span>01 / The transformation</span><span>Net Health · 2022—2026</span></div>
        <div className="section-heading split-heading"><h2>I modernized how<br />we go to market.</h2><p>At a company approaching a quarter-billion in ARR, I went from running digital marketing to designing how the revenue team understands problems, makes decisions and moves together.</p></div>
        <div className="impact-grid">
          <div><span className="impact-value">$15.4<span>M</span></span><h3>Digital pipeline</h3><p>+43% year over year</p></div>
          <div><span className="impact-value">$3.25<span>M</span></span><h3>Closed-won revenue</h3><p>+69% year over year</p></div>
          <div><span className="impact-value">6</span><h3>Product lines</h3><p>One connected commercial view</p></div>
        </div>
        <div className="source-line"><span>Digital channel performance reported in my resume.</span><button onClick={() => open({ type: 'results' })}>Read the context <Arrow /></button></div>
        <div className="work-narrative"><p className="eyebrow">The role expanded.<br />So did the problem.</p><div><p>I became a one-person function managing an almost million-dollar annual ad budget, an agency relationship in the UK, and the analysis of marketing’s influence on pipeline and revenue.</p><p>Under a direct mandate from the Chief Revenue Officer, I began doing the work between functions: finding the real driver of a revenue problem, building the analysis, presenting the narrative to business unit presidents and the executive team, and making sure the recommendations actually became GTM tests.</p><p className="pull-line">The function didn’t exist yet.<br />The need already did.</p></div></div>
      </section>

      <section id="first-test" className="pilot-section">
        <div className="section-wrap"><div className="section-label"><span>02 / The first test</span><span>TherapySource · 2025</span></div>
          <div className="section-heading split-heading"><h2>What if the sellers<br />helped create demand?</h2><p>The first test used a seller’s expertise to shape marketing itself. Real conversations about staffing, operations and finance became thought leadership and paid activation, with the product introduced as a remedy.</p></div>
          <div className="pilot-exhibit"><div className="pilot-left"><p className="eyebrow">Website inbound + paid</p><h3>Fewer leads.<br />More real opportunities.</h3><button className="text-link" onClick={() => open({ type: 'pilot' })}>Explore the readout <Arrow /></button></div><div className="comparison"><div className="comparison-header"><span>Observed outcome</span><span>2024</span><span>2025</span></div><div className="comparison-row"><span>MQLs</span><span>412</span><strong>308</strong></div><div className="comparison-row"><span>SQOs</span><span>2</span><strong>31</strong></div><div className="comparison-row featured"><span>Pipeline</span><span>$31.2K</span><strong>$1.02M</strong></div><div className="comparison-row"><span>Closed-won</span><span>$0</span><strong>$63.1K</strong></div><p className="comparison-note">Apr–Dec 2024 vs Jan–Oct 2025. Different observation windows; this comparison does not isolate causality.</p></div></div>
          <div className="pilot-after"><span className="eyebrow">The turning point</span><p>This sparked more full-funnel work with sellers upstream of marketing initiatives. It changed the question from “What should we promote?” to “What does this buyer need to understand, and who is best placed to help?”</p></div>
        </div>
      </section>

      <section id="operating-model" className="systems-section section-wrap">
        <div className="section-label"><span>03 / The operating model</span><span>Strategy made operational</span></div>
        <div className="section-heading"><h2>A different way<br />to organize growth.</h2><p className="heading-description">I built the Account Progression model Net Health pivoted to, redesigned outbound, and redesigned how work gets commissioned and activated across GTM.</p></div>
        <div className="case-tabs" role="tablist" aria-label="GTM operating models">{cases.map((c, index) => <button key={c.id} id={`tab-${c.id}`} role="tab" aria-selected={activeCase === c.id} aria-controls={`panel-${c.id}`} tabIndex={activeCase === c.id ? 0 : -1} onClick={() => setActiveCase(c.id)} onKeyDown={event => { let next = index; if (event.key === 'ArrowRight') next = (index + 1) % cases.length; else if (event.key === 'ArrowLeft') next = (index - 1 + cases.length) % cases.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = cases.length - 1; else return; event.preventDefault(); setActiveCase(cases[next].id); document.getElementById(`tab-${cases[next].id}`)?.focus() }}><span>{c.number}</span>{c.id === 'account' ? 'Account Progression' : c.id === 'outbound' ? 'Outbound' : 'GTM commissioning'}<Arrow /></button>)}</div>
        <div className="case-panel" role="tabpanel" id={`panel-${activeCase}`} aria-labelledby={`tab-${activeCase}`} tabIndex={0} key={activeCase}><div className="case-text"><p className="eyebrow">{currentCase.subtitle}</p><h3>{currentCase.title}</h3><div className="case-detail"><span>Problem</span><p>{currentCase.problem}</p></div><div className="case-detail"><span>Intervention</span><p>{currentCase.change}</p></div><div className="case-detail"><span>What changed</span><p>{currentCase.implication}</p></div><p className="case-status">{currentCase.status}</p></div><div className="case-art"><button onClick={() => open({ type: 'evidence', key: activeCase })} className="deck-excerpt" aria-label={`Expand exhibit: ${evidence[activeCase].title}`}><img loading="lazy" src={evidence[activeCase].image} alt={evidence[activeCase].alt} width="1188" height="918" /><span className="excerpt-expand"><Arrow /><span>Open the exhibit</span></span></button><div className="image-caption"><span>Adapted from my executive deck</span><span>2026</span></div></div></div>
        <div className="signal-strip"><div><strong>17<span>%</span></strong><p>of outbound enrollments<br />were demand-warm</p></div><div><strong>60<span>%</span></strong><p>of meetings came<br />from those enrollments</p></div><div><strong>92<span>%</span></strong><p>of meetings happened<br />within the first five steps</p></div><p className="signal-source">Observed in my outbound analysis.<br />The operating design turns those signals into testable decisions.</p></div>
        <div className="strategy-statement"><p className="eyebrow">The philosophy</p><h3>Get to the real driver.<br />Make the next action clear.<br /><span>Then make it happen.</span></h3><p>I built repeatable frameworks and self-serve tools to make recurring work faster and more rigorous. Alongside an AI-first SVP of Marketing I helped bring in, I worked on a new model for GTM interlocks: stronger premises, clearer ownership and a shared definition of commercial progress.</p></div>
      </section>

      <section id="story" className="story-section section-wrap">
        <div className="section-label"><span>04 / The long way here</span><span>Art → organizational change → GTM</span></div>
        <div className="section-heading split-heading"><h2>Before the executive<br />decks, warehouse parties.</h2><p>I studied Learning & Organizational Change at Northwestern. I learned quickly that management consulting wasn’t the life I wanted. Building things with people was.</p></div>
        <div className="story-grid"><div className="story-photo"><img src="/media/dialup-party.webp" alt="Archival footage from the Dial Up collective" loading="lazy" width="640" height="480" /><div className="image-caption"><span>Dial Up / the early days</span><span>Chicago</span></div></div><div className="story-copy"><p>I was doing design work for <button className="inline-link" onClick={() => open({ type: 'link', key: 'testing' })}>A$AP Rocky’s TESTING <Arrow /></button>, throwing warehouse parties and <button className="inline-link" onClick={() => open({ type: 'video', key: 'kidsuper' })}>Shopify activations with KidSuper <Arrow /></button>, and <button className="inline-link" onClick={() => open({ type: 'link', key: 'yachty' })}>performing with Lil Yachty <Arrow /></button> at drive-in shows in Chicago.</p><p>I grew <button className="inline-link" onClick={() => open({ type: 'link', key: 'dialup' })}>an art collective <Arrow /></button> from four people to sixteen. While working and traveling, I took a remote digital marketing job at Net Health.</p><p>At first, I wanted health benefits and something credible to point my immigrant Nigerian parents toward while I kept pursuing art.</p><p className="story-turn">Then the business problems got interesting.</p><p>The instinct carried over: understand the people, define the idea, build the team, make the work real. It just started showing up in revenue models, operating frameworks and executive rooms.</p></div></div>
        <div className="career-line"><div><span className="eyebrow">Foundation</span><strong>Northwestern</strong><p>BS, Learning & Organizational Change</p></div><div><span className="eyebrow">Creative practice</span><strong>Dial Up</strong><p>Co-founder · collective grew 4 → 16</p></div><div><span className="eyebrow">Commercial practice</span><strong>Net Health</strong><p>Digital → demand generation → GTM strategy</p></div></div>
      </section>

      <section id="california" className="california-section section-wrap">
        <div className="section-label"><span>05 / California Deep Clean</span><span>Founder · Los Angeles</span></div>
        <div className="california-grid"><div><p className="eyebrow">The same instinct, at another scale</p><h2>Build the whole<br />experience.</h2><p>A local service business makes the connection between marketing and operations immediate. The website promises an experience. The rest of the business has to deliver it.</p><p>At California Deep Clean, I built the website, CRM and growth automations to connect that customer experience to the work behind it.</p><button className="text-link" onClick={() => open({ type: 'link', key: 'california' })}>Explore California Deep Clean <Arrow /></button></div><div className="california-exhibit"><button className="brand-preview" onClick={() => open({ type: 'link', key: 'california' })} aria-label="View California Deep Clean"><img src="/media/california-deep-clean.webp" alt="California Deep Clean brand" loading="lazy" width="1200" height="630" /><span><Arrow /></span></button><div className="build-components"><span>Website</span><span>CRM</span><span>Growth automations</span></div><p className="image-caption">From first impression to follow-through.</p></div></div>
      </section>

      <section id="kairo" className="kairo-section"><div className="section-wrap"><div className="section-label"><span>06 / Still an artist</span><span>KAIRO · 2026</span></div><div className="section-heading split-heading"><h2>The art<br />never left.</h2><div><p>In 2026, I directed HALO and JWIO as Creative Director for KAIRO, for Island / Def Jam and VEVO.</p><p>Different canvas. Same attention to what moves people.</p></div></div><div className="film-grid">{(['halo', 'jwio'] as const).map(key => <div className="film" key={key}><button className="media-button film-image" onClick={() => open({ type: 'video', key })} aria-label={`Watch ${media[key].title}`}><img src={media[key].image} alt={`${media[key].title}, directed by David Nkemere`} loading="lazy" width="1280" height="720" /><span className="round-play"><Play /></span><span className="film-watch">Watch film <Arrow /></span></button><div className="film-caption"><h3>{key === 'halo' ? 'HALO' : 'JWIO'}</h3><span>KAIRO / Creative direction</span><Arrow /></div></div>)}</div></div></section>

      <section id="contact" className="contact-section section-wrap"><p className="eyebrow">The next chapter</p><h2>Let’s build<br />what’s next.</h2><div className="contact-bottom"><p>Looking for a GTM leader who can<br />find the driver, design the system<br />and get the work across the line?</p><a className="contact-link" href={`mailto:${profile.email}`}>Start a conversation <Arrow /></a></div></section>
    </main>
    <footer className="site-footer section-wrap"><span>© 2026 David Nkemere</span><span>GTM strategy & creative direction</span><a href="#top">Back to top <Arrow /></a></footer>

    {overlay && <dialog ref={dialog} className={`overlay overlay-${overlay.type}`} aria-labelledby="modal-title" onCancel={close} onClick={event => { if (event.target === dialog.current) close() }}><button className="overlay-close" onClick={close} aria-label="Close overlay"><span /><span /></button>
      {overlay.type === 'evidence' && <div className="evidence-modal"><p className="eyebrow">{evidence[overlay.key].category}</p><h2 id="modal-title">{evidence[overlay.key].title}</h2><p>{evidence[overlay.key].description}</p><img src={evidence[overlay.key].image} alt={evidence[overlay.key].alt} width="1188" height="918" /><p className="modal-source">{evidence[overlay.key].source}</p></div>}
      {overlay.type === 'video' && <div className="video-modal"><p className="eyebrow">{media[overlay.key].category}</p><h2 id="modal-title">{media[overlay.key].title}</h2><div className="video-frame"><iframe title={media[overlay.key].title} src={`https://www.youtube-nocookie.com/embed/${media[overlay.key].videoId}?autoplay=1&start=${'start' in media[overlay.key] ? media[overlay.key].start : 0}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><div className="video-meta"><p>{media[overlay.key].description}</p><a href={media[overlay.key].url} target="_blank" rel="noopener noreferrer">Open on YouTube <Arrow /></a></div></div>}
      {overlay.type === 'link' && <div className="link-modal"><p className="eyebrow">{links[overlay.key].category}</p><h2 id="modal-title">{links[overlay.key].title}</h2>{'image' in links[overlay.key] && <img src={links[overlay.key].image} alt={links[overlay.key].title} />}<p>{links[overlay.key].description}</p><a className="button" href={links[overlay.key].url} target="_blank" rel="noopener noreferrer">{overlay.key === 'yachty' ? 'Read the article' : 'Visit the project'} <Arrow /></a><span className="external-note">Opens the original source in a new tab.</span></div>}
      {overlay.type === 'results' && <div className="context-modal"><p className="eyebrow">Net Health / Performance context</p><h2 id="modal-title">What these numbers represent.</h2><p>The $15.4M in pipeline and $3.25M in closed-won revenue are digital channel results reported in my resume, across paid, organic and programmatic work supporting six products. The reported year-over-year changes are +43% and +69%, respectively.</p><p>They describe channel performance during my tenure, alongside the work of Sales, Marketing and the wider business. They are not presented as revenue I generated alone.</p><div className="context-fact"><span>Operating scope</span><strong>~$950K annual advertising budget</strong></div><div className="context-fact"><span>Company context</span><strong>Approaching $250M ARR</strong></div><p className="modal-source">Source: David Nkemere’s resume and account of the work. Reported year-over-year digital channel performance.</p></div>}
      {overlay.type === 'pilot' && <div className="context-modal"><p className="eyebrow">TherapySource / Pilot readout</p><h2 id="modal-title">A seller-led premise.<br />A different funnel.</h2><p>The January 2025 test paired seller-authored thought leadership with LinkedIn Conversation Ads. The premise came from buyer tensions in operations, staffing and finance.</p><div className="pilot-table-wrap"><table><caption>LinkedIn only · Apr–Dec 2024 versus Jan–Oct 2025</caption><thead><tr><th scope="col">Metric</th><th scope="col">2024</th><th scope="col">2025</th></tr></thead><tbody><tr><th scope="row">MQLs</th><td>250</td><td>74</td></tr><tr><th scope="row">SALs</th><td>148</td><td>52</td></tr><tr><th scope="row">SQLs</th><td>1</td><td>15</td></tr><tr><th scope="row">SQOs</th><td>1</td><td>10</td></tr><tr><th scope="row">Pipeline</th><td>$0</td><td>$561,340</td></tr><tr><th scope="row">Closed-won</th><td>$0</td><td>$18,000</td></tr></tbody></table></div><p>This was the first test that sparked more full-funnel work using sellers themselves to drive marketing initiatives. It created a repeatable strategic direction; the before-and-after comparison does not establish the test’s isolated causal effect.</p><p className="modal-source">Source: internal readout shared in October 2025. Nine-month versus approximately ten-month windows. Website inbound + paid totals on the main page include channels beyond LinkedIn.</p></div>}
      {overlay.type === 'deck' && <div className="deck-modal"><div className="deck-topline"><span>David Nkemere / Selected work</span><span aria-live="polite">{String(slide + 1).padStart(2, '0')} / {String(deck.length).padStart(2, '0')}</span></div><div className="deck-slide" key={slide}><p className="eyebrow">{deck[slide].kicker}</p><h2 id="modal-title">{deck[slide].title}</h2><p className="deck-body">{deck[slide].text}</p><div className="deck-metric"><strong>{deck[slide].metric}</strong><span>{deck[slide].caption}</span></div></div><div className="deck-controls"><span className="deck-help">Use ← → to navigate</span><div className="deck-dots" aria-label="Deck slides">{deck.map((s, i) => <button key={s.title} onClick={() => setSlide(i)} className={slide === i ? 'active' : ''} aria-label={`Slide ${i + 1}: ${s.title}`} aria-current={slide === i ? 'step' : undefined} />)}</div><div className="deck-arrows"><button disabled={slide === 0} onClick={() => setSlide(s => s - 1)} aria-label="Previous slide"><Arrow direction="left" /></button><button disabled={slide === deck.length - 1} onClick={() => setSlide(s => s + 1)} aria-label="Next slide"><Arrow direction="right" /></button></div></div></div>}
    </dialog>}
  </>
}
