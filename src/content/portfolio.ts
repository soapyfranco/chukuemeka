export const profile = {
  name: 'David Nkemere',
  fullName: 'Chukuemeka David Nkemere',
  email: 'david.nkemere@gmail.com',
  location: 'Los Angeles',
  focus: 'GTM strategy & creative direction',
}

export const journey = [
  { id: 'top', label: 'Introduction', short: 'Start', image: '/media/jwio.webp', caption: 'GTM strategy & creative direction', tone: 'light' },
  { id: 'work', label: 'The transformation', short: 'Net Health', image: '/media/account-progression.svg', caption: 'How a revenue team moves together', tone: 'dark' },
  { id: 'performance', label: 'Making growth observable', short: 'Impact', image: '/media/outbound-model.svg', caption: 'Digital performance → executive translation', tone: 'light' },
  { id: 'first-test', label: 'The first test', short: 'The test', image: '/media/work-commissioning.svg', caption: 'Sellers upstream of marketing', tone: 'light' },
  { id: 'operating-model', label: 'The operating model', short: 'The model', image: '/media/account-progression.svg', caption: 'Account Progression · outbound · interlocks', tone: 'light' },
  { id: 'story', label: 'The long way here', short: 'Origins', image: '/media/dialup-night.webp', caption: 'Northwestern → Dial Up → GTM', tone: 'dark' },
  { id: 'california', label: 'California Deep Clean', short: 'California', image: '/media/california-deep-clean.webp', caption: 'Founder · website · CRM · growth', tone: 'light' },
  { id: 'kairo', label: 'The art never left', short: 'KAIRO', image: '/media/halo.webp', caption: 'HALO / JWIO · creative direction', tone: 'dark' },
  { id: 'contact', label: 'The next chapter', short: 'Connect', image: '/media/dialup-collective.webp', caption: 'Let’s build what’s next', tone: 'light' },
] as const

export const gallery = [
  { image: '/media/dialup-night.webp', label: 'The early days', caption: 'A frame from the public Dial Up party archive. Chicago.', kind: 'Dial Up / archive' },
  { image: '/media/dialup-collective.webp', label: 'The collective', caption: 'A frame from Dial Up’s public squad archive. The creative practice began with people.', kind: 'Dial Up / archive' },
  { image: '/media/dialup-studio.webp', label: 'In good company', caption: 'A second frame from Dial Up’s public squad archive.', kind: 'Dial Up / archive' },
  { image: '/media/kidsuper.webp', label: 'KidSuper × Shopify', caption: 'Original thumbnail from the supplied Shopify activation film.', kind: 'Creative activation' },
  { image: '/media/halo.webp', label: 'HALO', caption: 'KAIRO, directed by David Nkemere. Original film thumbnail, 2026.', kind: 'Creative direction' },
  { image: '/media/jwio.webp', label: 'JWIO', caption: 'KAIRO, directed by David Nkemere. Original film thumbnail, 2026.', kind: 'Creative direction' },
]

export const accountStages = [
  { title: 'Read the signal', owner: 'One commercial view', detail: 'Start with an account that is showing intent, facing a barrier, or failing to progress. Establish the real commercial problem.' },
  { title: 'Assign a path', owner: 'Clear ownership', detail: 'Give the account an owner and a route. Net-new, expansion, reactivation and nurture require different next actions.' },
  { title: 'Build coverage', owner: 'Buying committee', detail: 'Understand who needs to be reached, what they care about, and where the team already has access.' },
  { title: 'Run the play', owner: 'Coordinated activation', detail: 'Connect seller outreach, content, paid activation and account-specific work around the same commercial premise.' },
  { title: 'Inspect movement', owner: 'Shared evidence', detail: 'Look for buyer conversations, qualification and pipeline movement. Activity alone does not establish progress.' },
  { title: 'Set the next play', owner: 'A real decision', detail: 'Advance, change the stakeholder or proposition, or return the account to nurture until a new signal arrives.' },
]

export const chapters = [
  { id: 'work', number: '01', label: 'The transformation' },
  { id: 'first-test', number: '02', label: 'The first test' },
  { id: 'operating-model', number: '03', label: 'The operating model' },
  { id: 'story', number: '04', label: 'The long way here' },
  { id: 'california', number: '05', label: 'California Deep Clean' },
  { id: 'kairo', number: '06', label: 'Still an artist' },
]

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

export const cases: Array<{
  id: EvidenceKey; number: string; title: string; subtitle: string;
  problem: string; change: string; implication: string; status: string;
}> = [
  {
    id: 'account', number: '01', title: 'Change the unit of work.',
    subtitle: 'From contact volume to account progression.',
    problem: 'A form fill could become a task without becoming a real commercial opportunity. Different teams were optimizing different parts of the funnel.',
    change: 'I built the Account Progression model Net Health pivoted to: a shared loop for buying committee coverage, ownership, next actions and movement.',
    implication: 'Campaigns, SDR handoffs, ABM and seller activity could be organized around the same account, with a common definition of progress.',
    status: 'I built the model and helped lead the pivot.',
  },
  {
    id: 'outbound', number: '02', title: 'Redesign the pursuit.',
    subtitle: 'From more touches to better decisions.',
    problem: 'Long sequences were treated as effort. The data showed that meetings clustered early, and that warm demand performed very differently from cold enrollment.',
    change: 'I redesigned outbound around a focused pursuit, a clear disposition, buying committee coverage, and a route back to marketing nurture.',
    implication: 'Sales and Marketing share the motion. A seller can change contacts without losing the account, and a new signal can trigger re-entry.',
    status: 'Analysis and operating design; the five-touch, six-day model is a test hypothesis.',
  },
  {
    id: 'commissioning', number: '03', title: 'Give work a commercial job.',
    subtitle: 'From a production queue to a GTM decision.',
    problem: 'A performance miss, a market signal and a recurring calendar request could all trigger the same production process before the real problem was understood.',
    change: 'I redesigned how work gets commissioned and activated across GTM: settle the audience, barrier, premise, owner and success measure upstream.',
    implication: 'PMM, Marketing, Sales, RevOps and business leaders have clearer decision rights, activation responsibilities and a shared readout.',
    status: 'Framework and interlock redesign, with clearer decision rights and activation responsibilities.',
  },
]

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

export const deck = [
  { kicker: 'David Nkemere / Selected work', title: 'Growth, by design.', text: 'GTM strategy, organizational change and creative direction. I build the systems that turn a commercial idea into coordinated action.', metric: '01', caption: 'A short introduction' },
  { kicker: 'Net Health / The transformation', title: 'I modernized how we go to market.', text: 'The tools. The standard for strategy. Most importantly, the language and philosophy the team organized around.', metric: '~$250M', caption: 'ARR context · six product lines' },
  { kicker: 'Digital / Reported performance', title: 'First, make growth observable.', text: 'A one-person digital function became an executive translation layer: diagnose the driver, build the analysis, tell the story and make sure the test gets implemented.', metric: '$15.4M', caption: 'Digital pipeline · +43% YoY · resume-reported' },
  { kicker: 'The first test / 2025', title: 'Let sellers shape the demand.', text: 'Seller expertise became the premise for thought leadership and paid activation. The TherapySource test opened the door to more full-funnel work.', metric: '2 → 31', caption: 'SQOs · Apr–Dec 2024 vs Jan–Oct 2025 · descriptive comparison' },
  { kicker: 'Account Progression / 2026', title: 'Change the unit of work.', text: 'Signal → path → coverage → play → movement → next play. The model I built connected Marketing and Sales around the account.', metric: 'One loop', caption: 'A common definition of progress' },
  { kicker: 'Outbound & interlocks / 2026', title: 'Make the next decision clear.', text: 'I redesigned outbound pursuit, how work gets commissioned, and how the GTM team activates together. A brief becomes a test, a readout and a next action.', metric: '92%', caption: 'Meetings in the first five steps · outbound analysis' },
  { kicker: 'The long way here', title: 'The creative instinct came first.', text: 'Northwestern. A$AP Rocky’s TESTING. KidSuper. Warehouse parties. Lil Yachty. An art collective that grew from four people to sixteen.', metric: '4 → 16', caption: 'Dial Up collective' },
  { kicker: 'California Deep Clean', title: 'Build the whole experience.', text: 'A local service business. The website, the CRM and the growth automations. The same instinct, applied at a different scale.', metric: 'End to end', caption: 'Founder / growth systems' },
  { kicker: 'KAIRO / 2026', title: 'The art never left.', text: 'Creative Director for KAIRO. Directed HALO and JWIO for Island / Def Jam and VEVO. Still building things that move people.', metric: 'HALO / JWIO', caption: 'Creative direction · Let’s build something.' },
]
