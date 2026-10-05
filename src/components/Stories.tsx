import { useState, type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { accountStages, creative, evidence, pilot, pilotNote, story, type EvidenceKey } from '../content/portfolio'
import { Brand, InlineSource, MediaCard, Site, StoryLink, useSite, type StoryPath } from './Site'

function StoryPage({ label, title, intro, next, children }: { label: string; title: string; intro: string; next: { to: StoryPath; label: string }; children: ReactNode }) {
  return <Site><main className="story-page page-width" id="main"><div className="story-top"><Link to="/" className="breadcrumb">← Back to my story</Link><span className="small-label">{label}</span><h1>{title}</h1><p className="story-dek">{intro}</p></div>{children}<div className="story-next"><p>Keep reading</p><StoryLink to={next.to}>{next.label}</StoryLink></div></main></Site>
}

export function CreativeStory() {
  return <StoryPage label="Northwestern / Dial Up / Creative work" title="Management Consulting was not it for me." intro={story.education} next={{ to: '/stories/net-health', label: 'Then, Net Health' }}><CreativeDetails /></StoryPage>
}

function CreativeDetails() {
  const { open } = useSite()
  return <>
    <div className="archive-grid"><MediaCard title="Dial Up" subtitle="The collective · Chicago" image="/media/dialup-night.webp" video="/media/dialup-party.mp4" onClick={() => open({ kind: 'source', key: 'dialup' })} /><MediaCard title="TESTING" subtitle="A$AP Rocky · 2018" image="/media/testing-cover.jpg" onClick={() => open({ kind: 'source', key: 'testing' })} /><MediaCard title="KidSuper × Shopify" subtitle="The activation film" image="/media/kidsuper.webp" onClick={() => open({ kind: 'video', key: 'kidsuper' })} play /></div>
    <p className="archive-caption">Real project artwork, an activation film, and footage from the public Dial Up archive.</p>
    <div className="story-prose"><Brand name="northwestern" /><h2>TESTING, warehouse parties, and drive-in shows.</h2><p>{creative.testing} <InlineSource source="testing">Open TESTING</InlineSource></p><p>{creative.kidsuper} <InlineSource source="kidsuper">Watch the activation</InlineSource></p><div className="context-brands"><Brand name="shopify" /><Brand name="redbull" /></div><p style={{ marginTop: 35 }}>{creative.yachty} <InlineSource source="yachty">Read the XXL article</InlineSource></p><h2>4 to 16.</h2><p className="narrative">{story.collective}</p><p><InlineSource source="dialup">Dial Up</InlineSource> was the collective.</p></div>
    <div className="story-hero"><MediaCard title="Dial Up" subtitle="The people · Public squad archive" image="/media/dialup-collective.webp" video="/media/dialup-squad.mp4" onClick={() => open({ kind: 'source', key: 'dialup' })} /></div>
    <div className="story-prose"><p>{story.job}</p><p className="narrative">{story.parents}</p></div>
  </>
}

export function NetHealthStory() {
  return <StoryPage label="Net Health / GTM" title={story.opening} intro={story.thesis} next={{ to: '/stories/seller-led-test', label: 'The first seller-led test' }}><NetHealthDetails /></StoryPage>
}

const modelTitles: Record<EvidenceKey, string> = { account: 'I built the Account Progression model that Net Health pivoted to.', outbound: 'I redesigned how Outbound works.', commissioning: 'I redesigned how work gets commissioned and activated across the GTM team.' }

function NetHealthDetails() {
  const { open } = useSite()
  const [model, setModel] = useState<EvidenceKey>('account')
  const [stage, setStage] = useState(0)
  const selected = evidence[model]
  const stageItem = accountStages[stage]!
  return <>
    <div className="story-prose"><p>{story.digital}</p><p>{story.promotions}</p><p className="narrative">{story.funnel}</p><p>{story.analytics}</p><p>{story.strategy}</p></div>
    <div className="results-band"><div><strong>$15.4M</strong><p>Digital pipeline · +43% YoY</p><span>Resume-reported digital channel result.</span></div><div><strong>$3.25M</strong><p>Digital closed-won · +69% YoY</p><span>Channel performance; not sole attribution.</span></div></div>
    <div className="story-prose"><p>{story.scale}</p><p className="narrative">{story.account}</p><p>{story.interlocks}</p></div>
    <section className="model-explorer" aria-label="Explore my GTM work">
      <div className="model-tabs" role="tablist" aria-label="GTM models">{(['account', 'outbound', 'commissioning'] as const).map(key => <button key={key} role="tab" aria-selected={model === key} aria-controls="model-panel" id={'tab-' + key} onClick={() => setModel(key)}>{key === 'account' ? 'Account Progression' : key === 'outbound' ? 'Outbound' : 'Commissioning & interlocks'}</button>)}</div>
      <div id="model-panel" role="tabpanel" aria-labelledby={'tab-' + model} className="model-layout"><button className="exhibit-trigger" onClick={() => open({ kind: 'exhibit', key: model })}><img src={selected.image} alt={selected.alt} /><span>Open the exhibit · Portfolio adaptation</span></button><div><h3>{modelTitles[model]}</h3><p>{selected.description}</p>{model === 'outbound' && <p>In the analysis, warm demand was 17% of enrollment and produced 60% of meetings. 92% of meetings came in the first five steps. The five-touch, six-day design is a proposed test.</p>}<span className="small-label">{selected.category}</span></div></div>
      {model === 'account' && <><div className="stage-selector" aria-label="Account Progression stages">{accountStages.map((item, i) => <button key={item.title} onClick={() => setStage(i)} aria-pressed={stage === i}><span>0{i + 1}</span>{item.title}</button>)}</div><div className="stage-detail" aria-live="polite"><strong>{stageItem.title}</strong><p>{stageItem.detail}</p></div></>}
    </section>
    <div className="story-prose"><p>{story.scope}</p><p>{story.next}</p></div>
  </>
}

export function SellerTestStory() {
  return <StoryPage label="Net Health / TherapySource / First seller-led test" title="Using the sellers themselves to drive marketing initiatives." intro={story.test} next={{ to: '/stories/california-deep-clean', label: 'California Deep Clean' }}><SellerDetails /></StoryPage>
}

function SellerDetails() {
  const [view, setView] = useState<'all' | 'linkedin'>('all')
  const linkedin = [
    { label: 'MQLs', before: 250, after: 74 }, { label: 'SALs', before: 148, after: 52 },
    { label: 'SQLs', before: 1, after: 15 }, { label: 'SQOs', before: 1, after: 10 },
    { label: 'Pipeline', before: 0, after: 561340 }, { label: 'Closed-won', before: 0, after: 18000 },
  ]
  const rows = view === 'all' ? pilot : linkedin
  const format = (value: number, label: string) => label === 'Pipeline' || label === 'Closed-won' ? '$' + value.toLocaleString('en-US') : value.toLocaleString('en-US')
  return <>
    <div className="story-prose"><p className="narrative">The seller’s expertise became the starting point for marketing.</p><p>For the TherapySource test, seller expertise informed thought leadership and paid activation. That test sparked the broader full-funnel work: campaigns, SDR handoffs, ABM, and seller involvement upstream.</p></div>
    <section className="readout" aria-label="Seller-led test readout"><div className="readout-top"><h2>The readout</h2><div className="comparison-toggle" aria-label="Channel comparison"><button aria-pressed={view === 'all'} onClick={() => setView('all')}>Inbound + paid</button><button aria-pressed={view === 'linkedin'} onClick={() => setView('linkedin')}>LinkedIn only</button></div></div>
      <div className="result-row"><span>Measure</span><span>Apr–Dec 2024</span><span>Jan–Oct 2025</span></div>
      {rows.map(row => <div className="result-row" key={row.label}><span>{row.label}</span>{(['before', 'after'] as const).map(period => <div key={period} className={'result-value ' + period}><strong>{format(row[period], row.label)}</strong><div className="result-bar" aria-hidden="true"><span style={{ width: (row[period] / Math.max(row.before, row.after, 1) * 100) + '%' }} /></div></div>)}</div>)}
      <p className="readout-note">{view === 'all' ? pilotNote : 'LinkedIn only. Apr–Dec 2024 compared with Jan–Oct 2025. This is a subset of inbound + paid, not additional pipeline to add to that total. The windows differ in length; the comparison is descriptive.'}</p>
    </section>
    <div className="story-prose"><p>{story.analytics}</p><p>{story.strategy}</p></div>
  </>
}

export function CaliforniaStory() {
  return <StoryPage label="California Deep Clean / Co-founder" title="Website. CRM. Growth automations." intro={story.california} next={{ to: '/stories/kairo', label: 'And the art touch has not left' }}><CaliforniaDetails /></StoryPage>
}

function CaliforniaDetails() {
  const { open } = useSite()
  return <><div className="story-hero"><MediaCard title="California Deep Clean" subtitle="Open the live business" image="/media/california-deep-clean.webp" onClick={() => open({ kind: 'source', key: 'california' })} className="brand-image" /></div><div className="system-grid"><article><span className="small-label">01</span><h2>Website</h2><p>The customer-facing site for the cleaning business.</p></article><article><span className="small-label">02</span><h2>CRM</h2><p>The system for keeping track of inquiries and customer relationships.</p></article><article><span className="small-label">03</span><h2>Growth automations</h2><p>The follow-up and growth work connected to the business.</p></article></div><div className="story-prose"><p><InlineSource source="california">Visit California Deep Clean</InlineSource></p></div></>
}

export function KairoStory() {
  return <StoryPage label="KAIRO / Creative Director / 2026" title={story.art} intro={story.kairo} next={{ to: '/stories/creative-work', label: 'Back to the creative beginnings' }}><KairoDetails /></StoryPage>
}

function KairoDetails() {
  const { open } = useSite()
  return <><div className="film-grid"><MediaCard title="HALO" subtitle="KAIRO · Island / Def Jam · VEVO" image="/media/halo.webp" onClick={() => open({ kind: 'video', key: 'halo' })} play /><MediaCard title="JWIO" subtitle="KAIRO · Island / Def Jam · VEVO" image="/media/jwio.webp" onClick={() => open({ kind: 'video', key: 'jwio' })} play /></div><div className="story-prose"><p>Directed by David Nkemere.</p><p><InlineSource source="halo">Watch HALO</InlineSource> · <InlineSource source="jwio">Watch JWIO</InlineSource></p></div></>
}
