export const profile = {
  name: 'David Nkemere', fullName: 'Chukuemeka David Nkemere',
  email: 'david.nkemere@gmail.com', location: 'Los Angeles',
  focus: 'GTM strategy & creative direction',
}

// The homepage follows David's original narrative, with punctuation edits only.
export const story = {
  opening: 'I modernized Net Health’s GTM.',
  thesis: 'At the most observable level, the tool stack, the standard / bar for what’s considered strategy, but most importantly, the language and philosophy we organized around.',
  education: 'I originally got my Bachelor of Science in Learning & Organizational Change at Northwestern University and pretty quickly decided life in Management Consulting was not it for me.',
  collective: 'I led and grew an art collective from 4 to 16 and built a lot in the process.',
  job: 'While working and traveling, I took a fully remote job doing Digital Marketing for a B2B SaaS company called Net Health.',
  parents: 'At first, I wanted health benefits and something I could credibly point my immigrant Nigerian parents to as a distraction as I continued pursuing art.',
  digital: 'But before long I was a one-person function managing a million-dollar ad spend budget, agency relationships with a company based in the UK, evaluating marketing’s influence, spend, and other KPIs, while driving more first-touch digital pipeline and revenue than the company had ever seen before.',
  promotions: 'I was promoted first to Digital Marketing Manager, then to Interim Director of Digital, then to Manager of Demand Generation.',
  funnel: 'From that seat, I began touching work that touched the full funnel (campaigns, SDR handoffs, ABM, etc.), then architecting it under direct mandate from the Chief Revenue Officer.',
  analytics: 'I started owning the analytics of our Revenue (GTM) team, isolating the problems on the way to creating pipeline / revenue, building the analysis, crafting the narrative, presenting it to Business Unit Presidents and the Executive Leadership Team, and making sure the recommendations (GTM Tests) actually got implemented.',
  strategy: 'From my point of view, the function not existing yet (GTM Strategy) didn’t mean the need for that translation layer was not crucially important to the business. I built repeatable frameworks and self-serve tools that made the team’s recurring work faster and more rigorous over time.',
  scale: 'For a company approaching a quarter-billion in ARR (~$250M), our processes were shockingly archaic.',
  account: 'I built the Account Progression model that Net Health pivoted to.',
  interlocks: 'I helped bring in a new AI-first SVP of Marketing and a new model for GTM interlocks to build alongside. I redesigned how Outbound works. I redesigned how work gets commissioned and activated across the GTM team.',
  test: 'This was the first test that sparked off more full-funnel work using the sellers themselves to drive marketing initiatives.',
  scope: 'I’ve been the go-to guy for key problems over a wide range of topics, such as growth analysis, revenue forecasting, market sizing, pricing, and more. Day to day, I’m evaluating and modeling new initiatives, working across senior stakeholders to drive alignment, and leading projects through to completion.',
  next: 'I’m sitting at the heart of how growth is driven in 2026 and excited for an opportunity to build on that with other leaders as hungry as I am.',
  california: 'I also co-founded California Deep Clean, building the website, CRM, and growth automations.',
  art: 'And that art touch has not left.',
  kairo: 'In 2026, I directed HALO and JWIO for Island / Def Jam and VEVO as Creative Director for KAIRO.',
}

export const creative = {
  testing: 'I was doing design work for A$AP Rocky’s 2018 album TESTING. The site my team built is still live.',
  kidsuper: 'Throwing warehouse parties and Shopify activations with KidSuper on their way to earning their LVMH Karl Lagerfeld award.',
  yachty: 'And performing with Lil Yachty at socially distanced drive-in shows in Chicago.',
}

export const accountStages = [
  { title: 'Read the signal', detail: 'Start with an account showing intent or failing to progress. Establish the commercial problem.' },
  { title: 'Assign a path', detail: 'Give the account an owner and a route: net-new, expansion, reactivation, or nurture.' },
  { title: 'Build coverage', detail: 'Understand the buying committee, what they care about, and where the team already has access.' },
  { title: 'Run the play', detail: 'Connect seller outreach, content, paid activation, and account-specific work.' },
  { title: 'Inspect movement', detail: 'Look for conversations, qualification, and pipeline movement. Activity alone does not establish progress.' },
  { title: 'Set the next play', detail: 'Advance, change the stakeholder or proposition, or return the account to nurture until a new signal arrives.' },
] as const

export const pilot = [
  { label: 'MQLs', before: 412, after: 308 },
  { label: 'SALs', before: 237, after: 159 },
  { label: 'SQLs', before: 5, after: 43 },
  { label: 'SQOs', before: 2, after: 31 },
  { label: 'Wins', before: 0, after: 4 },
  { label: 'Pipeline', before: 31236, after: 1022894 },
  { label: 'Closed-won', before: 0, after: 63103 },
] as const

export const pilotNote = 'Website inbound + paid. Apr–Dec 2024 compared with Jan–Oct 2025. The windows differ in length; this is a descriptive comparison, not an isolated estimate of the test’s causal effect.'

export const evidence = {
  account: {
    title: 'The Account Progression loop',
    category: 'Operating model / 2026',
    image: '/media/account-progression.svg',
    alt: 'Portfolio exhibit adapted from an executive slide showing the six stages of the Account Progression loop and the owners and evidence for each stage.',
    description: 'Signal or stuck account. Assign a path. Build coverage. Run a play. Inspect movement. Set the next play. The model gives functions a shared unit of work and makes the next action explicit.',
    source: 'Wound Care GTM 2026, slide 17. Portfolio edition, adapted from my work.',
  },
  outbound: {
    title: 'Outbound as a closed loop',
    category: 'Outbound redesign / 2026',
    image: '/media/outbound-model.svg',
    alt: 'Portfolio exhibit adapted from an executive slide showing a five-step seller pursuit, a day-six contact decision, and paths to qualification, recycling or nurture.',
    description: 'Marketing and sellers both create demand. A focused pursuit produces a decision: qualify, work another stakeholder, or return the account to nurture until a new signal arrives.',
    source: 'Outbound Data Deep Dive, slide 18. Portfolio edition, adapted from my work.',
  },
  commissioning: {
    title: 'How work gets commissioned',
    category: 'GTM interlocks / 2026',
    image: '/media/work-commissioning.svg',
    alt: 'Portfolio exhibit adapted from an executive slide connecting a business objective to a commercial brief, a GTM test, production, activation, measurement and a readout.',
    description: 'Define the commercial premise before committing production capacity. Connect the brief to a test, activation, measurement and a decision about what to do next.',
    source: 'Speed-to-Market Improvement, slide 7. Portfolio edition, adapted from my work.',
  },
}
export type EvidenceKey = keyof typeof evidence

export type MediaKey = 'halo' | 'jwio' | 'kidsuper'
export const media: Record<MediaKey, { title: string; category: string; videoId: string; start?: number; image: string; url: string; description: string }> = {
  halo: { title: 'KAIRO — HALO', category: 'Creative direction / 2026', videoId: 'OtkyvWMHxhU', image: '/media/halo.webp', url: 'https://www.youtube.com/watch?v=OtkyvWMHxhU', description: 'Directed as Creative Director for KAIRO. Island / Def Jam / VEVO.' },
  jwio: { title: 'KAIRO — JWIO', category: 'Creative direction / 2026', videoId: 'FdJAX1KL3pg', image: '/media/jwio.webp', url: 'https://www.youtube.com/watch?v=FdJAX1KL3pg', description: 'Directed as Creative Director for KAIRO. Island / Def Jam / VEVO.' },
  kidsuper: { title: 'KidSuper × Shopify', category: 'Culture / activation', videoId: 'gZBQEBUVMss', start: 364, image: '/media/kidsuper.webp', url: 'https://youtu.be/gZBQEBUVMss?t=364', description: 'Warehouse parties and Shopify activations with KidSuper, on the way to their LVMH Karl Lagerfeld award.' },
}

export type LinkKey = 'testing' | 'yachty' | 'dialup' | 'california'
export const links: Record<LinkKey, { title: string; category: string; url: string; description: string; image?: string }> = {
  testing: { title: 'A$AP Rocky — TESTING', category: 'Digital design / 2018', url: 'https://tstng.co/', description: 'Design work for the TESTING album. The website my team built is still live.' },
  yachty: { title: 'A drive-in show with Lil Yachty', category: 'XXL / live performance', url: 'https://www.xxlmag.com/lil-yachty-drive-in-concert/', description: 'I performed with Lil Yachty at socially distanced drive-in shows in Chicago. This article documents the concert.' },
  dialup: { title: 'Dial Up', category: 'Collective / creative studio', url: 'https://dialupstuff.com/', description: 'I led an art collective from four people to sixteen, building creative work, experiences and a business along the way.', image: '/media/dialup.webp' },
  california: { title: 'California Deep Clean', category: 'Founder / growth systems', url: 'https://californiadeepclean.com/', description: 'A local service business where I built the website, CRM and growth automations, connecting the customer experience to the operating work.', image: '/media/california-deep-clean.webp' },
}

