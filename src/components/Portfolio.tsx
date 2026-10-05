import { Link } from '@tanstack/react-router'
import { story, profile } from '../content/portfolio'
import { Site, useSite, MediaCard, InlineSource, Brand, StoryLink } from './Site'

export function Portfolio() {
  return <Site><Homepage /></Site>
}

function Homepage() {
  const { open } = useSite()
  return <main id="main">
    <section className="intro page-width">
      <div className="intro-label"><span>GTM strategy</span><span>Creative direction</span></div>
      <h1>{story.opening}</h1>
      <div className="intro-bottom"><p>{story.thesis}</p><a className="text-link" href="#the-story">Here’s how I got there <span aria-hidden="true">↓</span></a></div>
    </section>
    <div className="opening-grid page-width" aria-label="Explore selected work">
      <MediaCard title="Net Health" subtitle="Account Progression · Outbound · GTM interlocks" image="/media/account-progression.svg" to="/stories/net-health" className="model-card" />
      <MediaCard title="Dial Up" subtitle="The art collective I grew from 4 to 16" image="/media/dialup-night.webp" video="/media/dialup-party.mp4" to="/stories/creative-work" />
      <MediaCard title="KAIRO" subtitle="Creative direction · 2026" image="/media/jwio.webp" to="/stories/kairo" />
    </div>
    <section id="the-story" className="story-section page-width education">
      <div className="section-marker">The way here <span>01</span></div>
      <div className="education-layout"><div className="brand-block"><Brand name="northwestern" /><span>BS · Learning & Organizational Change</span></div><p className="narrative">{story.education}</p></div>
    </section>
    <section className="creative-section page-width">
      <p className="narrative creative-intro">I was doing design work for A$AP Rocky’s 2018 album <InlineSource source="testing">TESTING</InlineSource>, throwing warehouse parties and <InlineSource source="kidsuper">Shopify activations</InlineSource> with KidSuper on their way to earning their LVMH Karl Lagerfeld award, and <InlineSource source="yachty">performing with Lil Yachty</InlineSource> at socially distanced drive-in shows in Chicago.</p>
      <div className="creative-grid">
        <MediaCard title="TESTING" subtitle="A$AP Rocky · Digital design · 2018" image="/media/testing-cover.jpg" onClick={() => open({ kind: 'source', key: 'testing' })} />
        <MediaCard title="KidSuper × Shopify" subtitle="Watch the activation" image="/media/kidsuper.webp" onClick={() => open({ kind: 'video', key: 'kidsuper' })} play />
      </div>
      <div className="creative-foot"><div className="context-brands"><Brand name="shopify" /><Brand name="redbull" /></div><StoryLink to="/stories/creative-work">More of the creative work</StoryLink></div>
    </section>
    <section className="collective-section page-width">
      <div className="collective-copy"><p className="narrative">I led and grew an <InlineSource source="dialup">art collective</InlineSource> from <span className="number-inline">4 to 16</span> and built a lot in the process.</p><p>{story.job}</p></div>
      <MediaCard title="Dial Up" subtitle="People, parties, and the work we built" image="/media/dialup-collective.webp" video="/media/dialup-squad.mp4" to="/stories/creative-work" />
    </section>
    <section className="net-health-section"><div className="page-width">
      <div className="section-marker">Net Health <span>02</span></div>
      <div className="parents-line"><span className="small-label">Why I took the job</span><p className="narrative">{story.parents}</p></div>
      <div className="digital-layout"><p className="narrative">{story.digital}</p><aside className="scope-note"><strong>~$1M</strong><span>Ad spend budget</span><p>A one-person digital function.</p></aside></div>
      <div className="role-history"><p>{story.promotions}</p><div><span>Digital Marketing Manager</span><span aria-hidden="true">↗</span><span>Interim Director of Digital</span><span aria-hidden="true">↗</span><span>Manager of Demand Generation</span></div></div>
      <div className="narrative-column"><p className="narrative">{story.funnel}</p><p>{story.analytics}</p><p>{story.strategy}</p></div>
      <div className="gtm-caption"><p>{story.scale}</p><span>Company context, not my personal revenue contribution.</span></div>
      <div className="gtm-panels">
        <Link to="/stories/net-health" className="gtm-panel"><span>Account Progression</span><h2>{story.account}</h2><img src="/media/account-progression.svg" alt="A portfolio adaptation of my Account Progression model" loading="lazy" /><span className="panel-action">Explore the model <span aria-hidden="true">↗</span></span></Link>
        <div className="gtm-panel interlocks-panel"><span>Outbound & GTM interlocks</span><p className="narrative">{story.interlocks}</p><StoryLink to="/stories/net-health">The analysis and operating work</StoryLink></div>
      </div>
      <div className="test-preview"><div><span className="small-label">The first seller-led test</span><h2>{story.test}</h2><StoryLink to="/stories/seller-led-test">Open the test and readout</StoryLink></div><div className="test-numbers"><span>SQOs</span><strong>2 <span>→</span> 31</strong><p>Apr–Dec 2024 / Jan–Oct 2025<br />Different windows · descriptive comparison</p></div></div>
      <div className="narrative-column closing-gtm"><p>{story.scope}</p><p className="narrative">{story.next}</p></div>
    </div></section>
    <section className="california-section page-width">
      <div className="section-marker">California Deep Clean <span>03</span></div>
      <div className="california-grid"><div><h2>{story.california}</h2><StoryLink to="/stories/california-deep-clean">See what I built</StoryLink></div><MediaCard title="California Deep Clean" subtitle="Website · CRM · Growth automations" image="/media/california-deep-clean.webp" to="/stories/california-deep-clean" className="brand-image" /></div>
    </section>
    <section className="kairo-section"><div className="page-width">
      <div className="section-marker">KAIRO <span>04 / 2026</span></div>
      <div className="kairo-intro"><h2>{story.art}</h2><p>In 2026, I directed <InlineSource source="halo">HALO</InlineSource> and <InlineSource source="jwio">JWIO</InlineSource> for Island / Def Jam and VEVO as Creative Director for KAIRO.</p></div>
      <div className="film-grid"><MediaCard title="HALO" subtitle="KAIRO · Directed by David Nkemere" image="/media/halo.webp" onClick={() => open({ kind: 'video', key: 'halo' })} play /><MediaCard title="JWIO" subtitle="KAIRO · Directed by David Nkemere" image="/media/jwio.webp" onClick={() => open({ kind: 'video', key: 'jwio' })} play /></div>
      <StoryLink to="/stories/kairo">The films</StoryLink>
    </div></section>
    <section className="contact-section page-width" id="contact"><span className="small-label">{profile.name}</span><h2>Let’s build.</h2><a href={'mailto:' + profile.email}>{profile.email}</a><p>{profile.focus} · {profile.location}</p></section>
  </main>
}
