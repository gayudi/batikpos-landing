import { useEffect, useState } from 'react'
import './App.css'

const copyrightYear = new Date().getFullYear()

const slides = [
  { image: '/images/dashboard.svg', title: 'Kenali bisnismu, dalam satu tampilan.', text: 'Pantau ringkasan penjualan dan produk terlaris. Ambil langkah berikutnya dengan gambaran usaha yang lebih jelas.', tag: 'Dashboard usaha' },
  { image: '/images/kasir.svg', title: 'Transaksi lancar, pelanggan pun senang.', text: 'Pilih produk, atur pesanan, dan lihat total belanja dari layar kasir yang sederhana dan mudah dipahami.', tag: 'Kasir intuitif' },
  { image: '/images/stok.svg', title: 'Stok terpantau, jualan lebih tenang.', text: 'Lihat ketersediaan produk dan kenali stok yang mulai menipis agar kebutuhan usaha tetap terkendali.', tag: 'Manajemen stok' },
]

function Icon({ name, size = 22, ...props }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    chart: <path d="M4 4v16h16M8 15v-4m5 4V7m5 8v-6" />,
    bag: <><path d="M5 7h14l1 14H4L5 7Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></>,
    box: <path d="m12 3 9 5-9 5-9-5 9-5ZM3 8v9l9 5 9-5V8M12 13v9M7 5.8l9 5" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    pause: <path d="M9 5v14M15 5v14" />,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}

function Brand() {
  return <a className="brand" href="#beranda" aria-label="BatikPOS beranda"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span>batik<span className="brand-light">pos</span><span className="brand-dot">.</span></span></a>
}

function App() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!playing || hovered || focused) return
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 6000)
    return () => window.clearInterval(timer)
  }, [playing, hovered, focused])

  function navigateSlide(direction) {
    setActive(current => (current + direction + slides.length) % slides.length)
    setPlaying(false)
  }

  return (
    <>
      <a className="skip-link" href="#konten">Lewati ke konten</a>
      <header className="site-header">
        <div className="container nav">
          <Brand />
          <button className="menu-toggle" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen} aria-controls="navigasi" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
          <nav id="navigasi" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
            <a href="#fitur" onClick={() => setMenuOpen(false)}>Fitur</a>
            <a href="#tampilan" onClick={() => setMenuOpen(false)}>Tampilan aplikasi</a>
            <a href="#untuk-siapa" onClick={() => setMenuOpen(false)}>Untuk usahamu</a>
            <a className="button button-small" href="#tampilan" onClick={() => setMenuOpen(false)}>Jelajahi BatikPOS <Icon name="arrow" size={16} /></a>
          </nav>
        </div>
      </header>
      <main id="konten">
        <section className="hero" id="beranda">
          <div className="hero-motif" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><span className="status-dot" /> DARI TRANSAKSI, JADI INSPIRASI</span>
              <h1>Usaha rapi.<br />Tumbuh lebih <span>pasti.</span></h1>
              <p>Kenalkan, BatikPOS. Teman kelola usaha yang menyatukan kasir, stok, dan laporan penjualan. Lebih simpel untukmu, lebih nyaman untuk pelanggan.</p>
              <div className="hero-actions"><a className="button" href="#tampilan">Kenali BatikPOS <Icon name="arrow" size={18} /></a><a className="text-link" href="#fitur"><span className="play-circle"><Icon name="play" size={14} /></span> Lihat fiturnya</a></div>
              <div className="hero-note"><span><Icon name="check" size={15} /> Mudah dipahami</span><span><Icon name="check" size={15} /> Fokus pada usahamu</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-topline"><span><span className="tiny-dot" /> RUANG KERJA USAHAMU</span><span>01 — 03</span></div>
              <div className="browser-frame">
                <div className="browser-bar"><span className="window-dots"><i /><i /><i /></span><span className="browser-address">batikpos / dashboard</span><span className="browser-lock">◈</span></div>
                <img src="/images/dashboard.svg" alt="Ilustrasi dashboard BatikPOS dengan ringkasan penjualan, grafik mingguan, dan produk terlaris" width="1000" height="660" fetchPriority="high" />
              </div>
              <div className="floating-note"><span className="note-icon"><Icon name="chart" size={22} /></span><div><strong>Semua dalam kendali.</strong><span>Dari buka toko, sampai tutup buku.</span></div><span className="note-check"><Icon name="check" size={14} /></span></div>
              <span className="image-disclaimer">Ilustrasi antarmuka · data contoh</span>
            </div>
          </div>
          <div className="container hero-bottom"><span>Dibuat untuk langkah besar<br /><strong>usaha sehari-hari.</strong></span><div className="business-types"><span>☕ <b>Kafe & resto</b></span><span>◈ <b>Toko retail</b></span><span>▧ <b>UMKM</b></span><span>✳ <b>Usaha lainnya</b></span></div></div>
        </section>

        <section className="section features container" id="fitur">
          <div className="section-heading"><div><span className="eyebrow">LEBIH RINGKAS, LEBIH BERMAKNA</span><h2>Fokus ke usahamu.<br />Biar yang rumit, jadi simpel.</h2></div><p>Satu tempat untuk hal-hal penting.<br />Supaya waktumu kembali untuk mengembangkan usaha.</p></div>
          <div className="feature-grid">
            {[
              { icon: 'bag', number: '01', title: 'Kasir yang mengalir', text: 'Catat pesanan dan hitung total belanja dengan alur transaksi yang praktis.', label: 'Kenali kasir', slide: 1 },
              { icon: 'box', number: '02', title: 'Stok lebih tertata', text: 'Pantau persediaan produk tanpa harus tenggelam dalam catatan yang terpisah.', label: 'Lihat pengelolaan stok', slide: 2 },
              { icon: 'chart', number: '03', title: 'Cerita di balik angka', text: 'Pahami penjualan lewat ringkasan yang jelas untuk keputusan yang lebih terarah.', label: 'Jelajahi dashboard', slide: 0 },
            ].map(feature => <article className="feature-card" key={feature.number}><div className="feature-top"><span className="feature-icon"><Icon name={feature.icon} size={25} /></span><span>{feature.number}</span></div><h3>{feature.title}</h3><p>{feature.text}</p><a href="#tampilan" onClick={() => { setActive(feature.slide); setPlaying(false) }}>{feature.label}<Icon name="arrow" size={18} /></a></article>)}
          </div>
        </section>

        <section className="showcase section" id="tampilan" aria-label="Slideshow tampilan BatikPOS" aria-roledescription="karusel">
          <div className="container">
            <div className="showcase-heading"><span className="eyebrow">INTIP BATIKPOS LEBIH DEKAT</span><h2>Kenalan dulu, <em>baru jatuh hati.</em></h2><p>Antarmuka yang bersih. Informasi yang jelas. Semua terasa lebih mudah.</p></div>
            <div className="product-tour" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
              <div className="tour-tabs" aria-label="Pilih tampilan produk">{slides.map((slide, index) => <button key={slide.tag} aria-pressed={active === index} onClick={() => { setActive(index); setPlaying(false) }}><span>0{index + 1}</span> {slide.tag}</button>)}</div>
              <div className="slide-images">{slides.map((slide, index) => <img key={slide.image} src={slide.image} alt={`Contoh ${slide.tag.toLowerCase()} BatikPOS dengan data ilustrasi`} className={active === index ? 'slide-image active' : 'slide-image'} aria-hidden={active !== index} width="1000" height="660" loading="lazy" />)}</div>
              <div className="slide-caption">
                <div aria-live={playing ? 'off' : 'polite'} aria-atomic="true"><span className="eyebrow">0{active + 1} / 03 — {slides[active].tag}</span><h3>{slides[active].title}</h3><p>{slides[active].text}</p></div>
                <div className="slide-controls"><button aria-label="Tampilan sebelumnya" onClick={() => navigateSlide(-1)}><Icon name="chevron" className="rotate" size={18} /></button><button aria-label={playing ? 'Jeda slideshow' : 'Putar slideshow'} onClick={() => setPlaying(!playing)}><Icon name={playing ? 'pause' : 'play'} size={17} /></button><button aria-label="Tampilan berikutnya" onClick={() => navigateSlide(1)}><Icon name="chevron" size={18} /></button></div>
              </div>
            </div>
            <p className="tour-disclaimer">Tampilan merupakan ilustrasi konsep BatikPOS dengan data contoh, bukan screenshot aplikasi final.</p>
          </div>
        </section>

        <section className="section container audience" id="untuk-siapa"><div><span className="eyebrow">BERAGAM USAHA, SATU SEMANGAT</span><h2>Dari kedai sudut kota,<br />sampai toko penuh cerita.</h2><p>Setiap usaha punya caranya sendiri untuk tumbuh. BatikPOS dirancang untuk membantu merapikan operasional sehari-hari, apa pun cerita usahamu.</p><a className="text-link" href="#tampilan">Temukan cara kerja BatikPOS <Icon name="arrow" size={18} /></a></div><div className="audience-grid">{[{ symbol: '☕', title: 'Kafe & restoran', text: 'Pesanan tertata, layanan lebih nyaman.' }, { symbol: '◈', title: 'Toko retail', text: 'Produk terkelola, stok lebih terjaga.' }, { symbol: '▧', title: 'Usaha rumahan', text: 'Mulai langkah kecil dengan lebih rapi.' }, { symbol: '✳', title: 'Usaha berkembang', text: 'Kenali angka di setiap langkah usaha.' }].map(item => <article key={item.title}><span aria-hidden="true">{item.symbol}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

        <section className="container closing-wrap"><div className="closing"><span className="eyebrow">LANGKAH KECIL, DAMPAK BESAR</span><h2>Usaha punya cerita.<br />BatikPOS bantu menatanya.</h2><p>Mulai kenali cara yang lebih sederhana untuk mengelola usahamu.</p><a href="#tampilan" className="button button-cream">Jelajahi tampilan BatikPOS <Icon name="arrow" size={18} /></a><div className="closing-motif" aria-hidden="true" /></div></section>
      </main>
      <footer className="container footer"><div><Brand /><p>Berakar pada usaha. Bertumbuh bersama.</p></div><span>© {copyrightYear} BatikPOS.</span><a href="#beranda">Kembali ke atas ↑</a></footer>
    </>
  )
}

export default App
