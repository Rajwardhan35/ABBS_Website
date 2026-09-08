import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  PackageCheck,
  Quote,
  Sparkles,
  X,
} from 'lucide-react';

type Product = {
  name: string;
  category: string;
  description: string;
  image: string;
  accent: string;
};

const products: Product[] = [
  { name: 'Almond Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/11852052/pexels-photo-11852052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#b97946] to-[#553421]' },
  { name: 'Groundnut Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/6448483/pexels-photo-6448483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#d9a84b] to-[#715024]' },
  { name: 'Safflower Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/39281916/pexels-photo-39281916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#bb4d2c] to-[#481d18]' },
  { name: 'Flaxseed Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#8d9b48] to-[#29361d]' },
  { name: 'Mustard Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/35156984/pexels-photo-35156984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#d9901d] to-[#6a3514]' },
  { name: 'Coconut Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/8996217/pexels-photo-8996217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#d2c19a] to-[#5b4731]' },
  { name: 'Sesame Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#8d6e49] to-[#30261e]' },
  { name: 'Sunflower Oil', category: 'Oil products', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/19282822/pexels-photo-19282822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#e5b73c] to-[#7b4d12]' },
  { name: 'Coconut Copra', category: 'Agricultural commodities', description: 'Available for wholesale enquiry.', image: 'https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', accent: 'from-[#8c6a42] to-[#312419]' },
];

const galleryImages = [
  { src: 'https://images.pexels.com/photos/4282730/pexels-photo-4282730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Glass vessels and ingredients arranged on a warm wooden table', label: 'Products' },
  { src: 'https://images.pexels.com/photos/11852052/pexels-photo-11852052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Almonds beside a bottle of oil', label: 'Ingredients' },
  { src: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Almonds arranged in a bowl', label: 'Source' },
  { src: 'https://images.pexels.com/photos/3682190/pexels-photo-3682190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Sesame seeds in a glass jar', label: 'Materials' },
];

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Products', '#products'],
  ['Why ABSS', '#why-abss'],
  ['Gallery', '#gallery'],
  ['Contact', '#contact'],
];

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`eyebrow ${light ? 'text-[#e86a67]' : 'text-[#d9282f]'}`}>{children}</p>;
}

function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <article className="product-card group">
      <div className={`product-image bg-gradient-to-br ${product.accent}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-overlay" />
        <span className="product-category">{product.category}<small>Reference image</small></span>
        <button className="product-arrow" aria-label={`View ${product.name}`} onClick={() => onSelect(product)}><MoveUpRight size={18} /></button>
      </div>
      <div className="flex items-start justify-between gap-4 pt-5">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <button className="text-[#d9282f] transition-transform group-hover:translate-x-1" onClick={() => onSelect(product)} aria-label={`Enquire about ${product.name}`}><ArrowRight size={18} /></button>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [locationNotice, setLocationNotice] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#home" className="brand" onClick={closeMenu} aria-label="ABSS Global Corporation home">
            <img src="/assets/images/ABSS_logo.png" alt="ABSS Global Corporation" />
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Enquire Now <MoveUpRight size={15} /></a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-image" />
          <div className="hero-grid" />
          <div className="hero-content page-width">
            <div className="hero-copy reveal">
              <SectionLabel light>Manufacturer & Wholesale Trader · Est. 2018</SectionLabel>
              <h1>Quality rooted<br /><em>in every drop.</em></h1>
              <p>ABSS Global Corporation is a manufacturer and wholesale trader of oil products and agricultural commodities, established in 2018.</p>
              <div className="hero-actions">
                <a className="button button-red" href="#products">Explore Products <MoveUpRight size={17} /></a>
                <a className="text-link text-white" href="#contact">Talk to us <ArrowRight size={17} /></a>
              </div>
            </div>
            <div className="hero-note reveal delay-2"><span>01</span><div><strong>ABSS Global Corporation</strong><small>Karad, Maharashtra · India</small></div></div>
          </div>
          <a className="scroll-cue" href="#introduction"><span>Scroll to discover</span><ArrowDownRight size={18} /></a>
        </section>

        <section id="introduction" className="intro-section page-width section-space">
          <div className="intro-image reveal"><img src="https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Almonds and coconut arranged as natural ingredients" loading="lazy" /><span className="image-stamp">ABSS<br /><small>since</small><br />2018</span></div>
          <div className="intro-copy reveal delay-1"><SectionLabel>The ABSS approach</SectionLabel><h2>Built on experience.<br /><em>Driven by quality.</em></h2><p className="lead">Established in 2018, ABSS Global Corporation is a manufacturer and wholesale trader of cold pressed oils, coconut copra and other products.</p><p>We are well-supported by a team of highly skilled vendors with rich industry experience in their respective domains. Our experienced professionals bring strong support to day-to-day business operations and a clear focus on the satisfaction of our clients.</p><a className="text-link" href="#about">Learn more about ABSS <ArrowRight size={17} /></a></div>
        </section>

        <section className="highlights-section"><div className="page-width highlights-grid reveal"><div className="highlight-intro"><SectionLabel light>At a glance</SectionLabel><h2>A reliable partner<br />for the <em>long view.</em></h2></div><div className="highlight-item"><span>01</span><strong>2018</strong><p>Established</p></div><div className="highlight-item"><span>02</span><strong>Manufacturer<br />& trader</strong><p>Business type</p></div><div className="highlight-item"><span>03</span><strong>Oil & agricultural<br />products</strong><p>Product categories</p></div></div></section>

        <section id="products" className="products-section page-width section-space"><div className="section-heading reveal"><div><SectionLabel>Our product range</SectionLabel><h2>Products for wholesale<br /><em>and business requirements.</em></h2></div><p>The ABSS range includes oil products and coconut copra. Product information, availability and requirements can be discussed with our team.</p></div><div className="catalogue-group reveal"><div className="catalogue-heading"><span>01</span><h3>Oil products</h3></div><div className="product-grid">{products.filter((product) => product.category === 'Oil products').map((product, index) => <div key={product.name} className={`reveal delay-${(index % 3) + 1}`}><ProductCard product={product} onSelect={setSelectedProduct} /></div>)}</div></div><div className="catalogue-group commodity-group reveal"><div className="catalogue-heading"><span>02</span><h3>Agricultural commodities</h3></div><div className="product-grid commodity-grid">{products.filter((product) => product.category === 'Agricultural commodities').map((product) => <div key={product.name}><ProductCard product={product} onSelect={setSelectedProduct} /></div>)}</div></div></section>

        <section className="process-section"><div className="page-width process-layout"><div className="process-copy reveal"><SectionLabel>Working together</SectionLabel><h2>Built around<br /><em>your requirements.</em></h2><p>A clear, considered way to begin a wholesale conversation with ABSS Global Corporation.</p><a className="text-link" href="#contact">Discuss your requirements <ArrowRight size={17} /></a></div><div className="process-list reveal delay-1">{[['01', 'Understand requirements', MessageCircle], ['02', 'Product selection', Leaf], ['03', 'Business coordination', CircleUserRound], ['04', 'Supply & fulfilment', PackageCheck]].map(([number, title, Icon]) => <div className="process-step" key={title as string}><span>{number as string}</span><Icon size={20} strokeWidth={1.5} /><strong>{title as string}</strong><ChevronRight size={16} /></div>)}</div></div></section>

        <section id="why-abss" className="why-section page-width section-space"><div className="section-heading centered reveal"><SectionLabel>Why ABSS</SectionLabel><h2>A thoughtful way<br /><em>to do business.</em></h2><p>Experience, people and a practical understanding of business operations come together in the way we work.</p></div><div className="pillars-grid">{[['01', 'Experience', 'Established in 2018.', Sparkles], ['02', 'Skilled network', 'Supported by experienced vendors.', Leaf], ['03', 'Professional team', 'Experienced professionals supporting business operations.', CircleUserRound], ['04', 'Customer focus', 'A strong focus on providing satisfaction to clients.', MessageCircle]].map(([number, title, body, Icon], index) => <article className={`pillar reveal delay-${index + 1}`} key={title as string}><span>{number as string}</span><Icon size={24} /><h3>{title as string}</h3><p>{body as string}</p></article>)}</div></section>

        <section id="about" className="story-section"><div className="page-width story-layout"><div className="story-quote reveal"><Quote size={42} /><p>“We have garnered a reputed position in this highly competitive industry.”</p><span>— ABSS Global Corporation</span></div><div className="story-copy reveal delay-1"><SectionLabel>Our story</SectionLabel><h2>Guided by people<br /><em>who know the work.</em></h2><p>Under the supervision of our guide Mr. Aslam Mulla, ABSS Global Corporation has garnered a reputed position in this highly competitive industry.</p><p>We believe strong business relationships are built through attentive service, experienced support and a commitment to understanding every requirement.</p><div className="timeline"><span className="timeline-dot" /><div><strong>2018</strong><p>ABSS Global Corporation established</p></div></div></div></div></section>

        <section className="guidance-section page-width section-space"><div className="guidance-card reveal"><div className="profile-placeholder"><span>AM</span></div><div><SectionLabel>Guided by experience</SectionLabel><h2>Mr. Aslam Mulla</h2><p>Under the supervision and guidance of Mr. Aslam Mulla, ABSS Global Corporation has garnered a reputed position in a highly competitive industry.</p></div><MoveUpRight className="guidance-arrow" size={27} /></div></section>

        <section id="gallery" className="gallery-section page-width section-space"><div className="section-heading reveal"><div><SectionLabel>Visual references</SectionLabel><h2>A place for the<br /><em>ABSS story.</em></h2></div><p>These temporary reference images indicate the visual direction for future ABSS product, facility and business photography. They are not photographs of ABSS.</p></div><div className="gallery-grid">{galleryImages.map((image, index) => <button className={`gallery-item gallery-${index + 1} reveal delay-${(index % 3) + 1}`} key={image.src} onClick={() => setLightboxIndex(index)}><img src={image.src} alt={image.alt} loading="lazy" /><span>{image.label} · Reference image<MoveUpRight size={16} /></span></button>)}</div></section>

        <section className="contact-banner"><div className="page-width contact-banner-inner reveal"><div><SectionLabel light>Wholesale enquiries</SectionLabel><h2>Let’s build a<br /><em>business connection.</em></h2></div><a className="button button-light" href="#contact">Start a conversation <MoveUpRight size={17} /></a></div></section>

        <section id="contact" className="contact-section page-width section-space"><div className="contact-intro reveal"><SectionLabel>Contact ABSS</SectionLabel><h2>Let’s talk about<br /><em>what’s next.</em></h2><p>For product enquiries, wholesale requirements and business conversations, reach out to ABSS Global Corporation.</p><div className="contact-details"><div><MessageCircle size={18} /> <span>Official enquiry email — to be confirmed</span></div><div><MapPin size={18} /> <span>C-55, MIDC, Tasavade,<br />Karad, Maharashtra 415109, India</span></div></div></div><div className="contact-form-wrap reveal delay-1">{submitted ? <div className="form-success"><span><Check size={22} /></span><h3>Thank you for reaching out.</h3><p>Your enquiry has been noted in this website preview. A live submission service can be connected here when ready.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowRight size={17} /></button></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Company<input required name="company" placeholder="Company name" /></label></div><div className="form-row"><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone<input name="phone" placeholder="Phone number" /></label></div><label>Message<textarea required name="message" rows={4} placeholder="Tell us how we can help" /></label><button className="button button-red" type="submit">Send Enquiry <MoveUpRight size={17} /></button><p className="form-note">Enquiry service to be connected.</p></form>}</div></section>

        <section className="location-section"><div className="location-map"><div className="map-lines" /><div className="map-pin"><MapPin size={22} fill="currentColor" /><span>ABSS Global Corporation</span></div></div><div className="location-copy"><SectionLabel>Find us</SectionLabel><h2>Karad,<br /><em>Maharashtra.</em></h2><p>C-55, MIDC, Tasavade,<br />Karad, Maharashtra 415109, India</p><button className="text-link location-button" type="button" onClick={() => setLocationNotice(!locationNotice)}>Open Location <MoveUpRight size={17} /></button>{locationNotice && <p className="location-note">Official map link to be added.</p>}</div></section>
      </main>

      <footer className="site-footer"><div className="page-width footer-top"><div className="footer-brand"><img src="/assets/images/ABSS_logo.png" alt="ABSS Global Corporation" /><p>Manufacturer & Wholesale Trader</p></div><div className="footer-links"><div><strong>Explore</strong>{navItems.slice(0, 3).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><strong>Connect</strong>{navItems.slice(3).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></div><div className="footer-address"><strong>Visit us</strong><p>C-55, MIDC, Tasavade,<br />Karad, Maharashtra 415109, India</p><a href="#contact">Make an enquiry <MoveUpRight size={15} /></a></div></div><div className="page-width footer-bottom"><span>© 2026 ABSS Global Corporation. All Rights Reserved.</span><span>Quality rooted in every drop.</span></div></footer>

      {selectedProduct && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProduct(null)}><div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close product details" onClick={() => setSelectedProduct(null)}><X size={20} /></button><div className="modal-image"><img src={selectedProduct.image} alt={`${selectedProduct.name} reference image`} /><span>Reference image</span></div><div><SectionLabel>{selectedProduct.category}</SectionLabel><h2 id="product-modal-title">{selectedProduct.name}</h2><p>{selectedProduct.description}</p><p className="modal-note">Product specifications and availability can be discussed with the ABSS team.</p><a className="button button-red" href="#contact" onClick={() => setSelectedProduct(null)}>Enquire about this product <MoveUpRight size={17} /></a></div></div></div>}

      {lightboxIndex !== null && <div className="modal-backdrop lightbox" role="presentation" onClick={() => setLightboxIndex(null)}><button className="modal-close" aria-label="Close gallery" onClick={() => setLightboxIndex(null)}><X size={20} /></button><button className="lightbox-control prev" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length); }}><ChevronLeft /></button><img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} onClick={(event) => event.stopPropagation()} /><button className="lightbox-control next" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galleryImages.length); }}><ChevronRight /></button></div>}
    </div>
  );
}

export default App;
