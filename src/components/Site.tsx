import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { evidence, links, media, profile, type EvidenceKey, type LinkKey, type MediaKey } from '../content/portfolio'

export type StoryPath = '/stories/creative-work' | '/stories/net-health' | '/stories/seller-led-test' | '/stories/california-deep-clean' | '/stories/kairo'
type Popup = { kind: 'video'; key: MediaKey } | { kind: 'source'; key: LinkKey } | { kind: 'exhibit'; key: EvidenceKey }
const Context = createContext<{ open: (popup: Popup) => void; paused: boolean }>({ open: () => {}, paused: true })
export const useSite = () => useContext(Context)

export function Site({ children }: { children: ReactNode }) {
  const [popup, setPopup] = useState<Popup | null>(null)
  const [paused, setPaused] = useState(true)
  useEffect(() => {
    const pref = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPaused(pref.matches)
    const update = () => setPaused(pref.matches)
    pref.addEventListener('change', update)
    return () => pref.removeEventListener('change', update)
  }, [])
  return <Context.Provider value={{ open: setPopup, paused: paused || popup !== null }}>
    <a className="skip-link" href="#main">Skip to story</a>
    <header className="site-header page-width"><Link to="/" className="name-link">{profile.name}<span>GTM & creative work</span></Link><nav aria-label="Main navigation"><Link to="/stories/net-health">Net Health</Link><Link to="/stories/creative-work">Creative work</Link><a href="/#contact">Contact</a></nav><button className="motion-toggle" onClick={() => setPaused(p => !p)} aria-pressed={paused}><span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Play motion' : 'Pause motion'}</button></header>
    {children}
    <footer className="site-footer page-width"><Link to="/">{profile.fullName}</Link><span>GTM strategy & creative direction</span><a href={'mailto:' + profile.email}>Get in touch</a></footer>
    {popup && <PopupView popup={popup} close={() => setPopup(null)} />}
  </Context.Provider>
}

export function Brand({ name }: { name: 'northwestern' | 'shopify' | 'redbull' }) {
  const brands = { northwestern: { label: 'Northwestern University', file: 'northwestern.png', url: 'https://www.northwestern.edu/' }, shopify: { label: 'Shopify', file: 'shopify.svg', url: 'https://www.shopify.com/' }, redbull: { label: 'Red Bull', file: 'redbull.svg', url: 'https://www.redbull.com/' } }
  const b = brands[name]
  return <a className={'brand-logo ' + name} href={b.url} target="_blank" rel="noreferrer" aria-label={b.label}><img src={'/media/logos/' + b.file} alt={b.label} loading="lazy" /></a>
}

export function StoryLink({ to, children }: { to: StoryPath; children: ReactNode }) {
  return <Link to={to} className="text-link">{children}<span className="round-arrow" aria-hidden="true">↗</span></Link>
}

export function InlineSource({ source, children }: { source: MediaKey | LinkKey; children: ReactNode }) {
  const { open } = useSite()
  const video = source === 'halo' || source === 'jwio' || source === 'kidsuper'
  return <button className="inline-source" onClick={() => video ? open({ kind: 'video', key: source }) : open({ kind: 'source', key: source })}>{children}<sup aria-hidden="true">↗</sup></button>
}

export function MediaCard({ title, subtitle, image, video, to, onClick, play = false, className = '' }: { title: string; subtitle: string; image: string; video?: string; to?: StoryPath; onClick?: () => void; play?: boolean; className?: string }) {
  const contents = <><div className="card-media">{video ? <MotionVideo src={video} poster={image} /> : <img src={image} alt="" loading="lazy" />}</div><div className="card-shade" /><div className="card-copy"><span>{subtitle}</span><h3>{title}</h3></div><span className="card-action" aria-hidden="true">{play ? '▷' : '↗'}</span></>
  if (to) return <Link to={to} className={'media-card ' + className}>{contents}</Link>
  return <button type="button" onClick={onClick} className={'media-card ' + className}>{contents}</button>
}

export function MotionVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const { paused } = useSite()
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(entries => setVisible(entries.some(e => e.isIntersecting)), { threshold: 0.15 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const video = ref.current
    if (!video) return
    const sync = () => {
      if (!paused && visible && document.visibilityState === 'visible') void video.play().catch(() => {})
      else video.pause()
    }
    sync()
    document.addEventListener('visibilitychange', sync)
    return () => { document.removeEventListener('visibilitychange', sync); video.pause() }
  }, [paused, visible])
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-hidden="true" />
}

function PopupView({ popup, close }: { popup: Popup; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const item = popup.kind === 'video' ? media[popup.key] : popup.kind === 'exhibit' ? evidence[popup.key] : links[popup.key]
  useEffect(() => {
    const dialog = ref.current
    const focused = document.activeElement as HTMLElement | null
    const overflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => { dialog?.close(); document.body.style.overflow = overflow; focused?.focus() }
  }, [])
  return <dialog ref={ref} className={'popup ' + (popup.kind === 'exhibit' ? 'exhibit-popup' : '')} onCancel={close} onClick={event => { if (event.target === event.currentTarget) close() }} aria-labelledby="popup-title">
    <div className="popup-heading"><div><span className="small-label">{item.category}</span><h2 id="popup-title">{item.title}</h2></div><button className="close-button" onClick={close} aria-label="Close popup">×</button></div>
    {popup.kind === 'video' ? <><div className="video-frame"><iframe title={media[popup.key].title} src={'https://www.youtube-nocookie.com/embed/' + media[popup.key].videoId + '?autoplay=1&rel=0&start=' + (media[popup.key].start ?? 0)} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /></div><div className="popup-caption"><p>{item.description}</p><a className="text-link" href={media[popup.key].url} target="_blank" rel="noreferrer">Watch on YouTube ↗</a></div></> : popup.kind === 'exhibit' ? <><img className="exhibit-image" src={evidence[popup.key].image} alt={evidence[popup.key].alt} /><div className="popup-caption"><p>{item.description}</p><span>{evidence[popup.key].source}</span></div></> : <div className="source-preview">{popup.key === 'testing' ? <img src="/media/testing-cover.jpg" alt="A$AP Rocky TESTING album artwork" /> : links[popup.key].image ? <img src={links[popup.key].image} alt={item.title} /> : <div className="article-cover"><span>XXL</span><p>Lil Yachty<br />Drive-in concert</p><small>Chicago · Live performance</small></div>}<div><p>{item.description}</p><a className="source-url" href={links[popup.key].url} target="_blank" rel="noreferrer">{new URL(links[popup.key].url).hostname}</a><a className="button" href={links[popup.key].url} target="_blank" rel="noreferrer">{popup.key === 'yachty' ? 'Read the original article' : 'Visit the project'} ↗</a></div></div>}
  </dialog>
}
