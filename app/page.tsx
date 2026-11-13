import { Logo } from "@/components/logo";
import { EnquiryForm, MobileMenu, Reveal } from "@/components/interactive";
import { capabilities, categories, certificates, company, customers, images, nav, plants, stats, steps } from "@/lib/content";

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return <span className="label"><i>{n}</i>{children}</span>;
}

export default function Home() {
  return (
    <div id="top">
      <Reveal />

      <header className="header">
        <div className="wrap header-row">
          <Logo id="hd" />
          <nav className="nav" aria-label="Primary">
            {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            <a href="#contact" className="nav-cta">Enquire →</a>
          </nav>
          <MobileMenu links={[...nav, { href: "#contact", label: "Enquire" }]} />
        </div>
      </header>

      {/* Hero — typographic */}
      <section className="hero">
        <div className="wrap">
          <p className="hero-meta" data-reveal><span>Est. {company.since}</span><span>Delhi NCR, India</span><span>IATF 16949 · ISO 9001</span></p>
          <h1 data-reveal>The quiet precision <em>behind every</em> vehicle connection.</h1>
          <div className="hero-foot" data-reveal>
            <p>Deep Auto Electricals manufactures wire harnesses, cables, terminals and precision components for India&apos;s automotive industry — designed, tooled and tested in-house.</p>
            <a href="#products" className="link-lg">Our products <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="hero-figure" data-reveal>
          <img src={images.hero2} alt="An engineer reviewing a component drawing at DAEPL" />
          <figcaption className="wrap">Fig. 01 — Every part begins with a drawing review.</figcaption>
        </figure>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="wrap split">
          <Label n="01">About</Label>
          <div>
            <p className="statement" data-reveal>For more than twenty-five years, we have made the small parts that carry a vehicle&apos;s signals and power — <span>and we have treated each one as if the whole car depended on it.</span></p>
            <dl className="figures" data-reveal>
              {stats.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      {/* Products — numbered list with hover image */}
      <section id="products" className="section section-rule">
        <div className="wrap split">
          <Label n="02">Products</Label>
          <div>
            <h2 data-reveal>Six product families, <em>one standard of care.</em></h2>
            <ol className="plist">
              {categories.map((c, i) => (
                <li key={c.name} data-reveal>
                  <a href="#contact" className="prow">
                    <span className="prow-no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="prow-main">
                      <strong>{c.name}</strong>
                      <small>{c.summary}</small>
                      <span className="prow-items">{c.products.join(" · ")}</span>
                    </span>
                    <span className="prow-img" style={{ backgroundImage: `url("${c.image}")` }} aria-hidden="true" />
                    <span className="prow-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="section section-tint">
        <div className="wrap split">
          <Label n="03">Infrastructure</Label>
          <div>
            <h2 data-reveal>Made under <em>one roof,</em> from tool to test.</h2>
            <div className="gallery" data-reveal>
              <figure><img src={images.factory} alt="DAEPL production floor" /><figcaption>Production floor</figcaption></figure>
              <figure><img src={images.assembly} alt="Careful assembly work" /><figcaption>Assembly</figcaption></figure>
              <figure><img src={images.engineering} alt="Engineering and planning" /><figcaption>Engineering</figcaption></figure>
            </div>
            <div className="caps">
              {capabilities.map((c) => <div key={c.title} data-reveal><h3>{c.title}</h3><p>{c.text}</p></div>)}
            </div>
            <ol className="steps" data-reveal>
              {steps.map((s, i) => <li key={s.title}><span>{String(i + 1).padStart(2, "0")}</span><strong>{s.title}</strong><small>{s.text}</small></li>)}
            </ol>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="section">
        <div className="wrap split">
          <Label n="04">Quality</Label>
          <div className="quality">
            <div data-reveal>
              <h2>Trust On Quality <em>is not a slogan.</em> It is how the work is done.</h2>
              <p className="body">Our management systems are certified to international automotive standards, and every harness is electrically tested before it leaves the plant.</p>
              <ul className="certs">
                {certificates.map((c) => <li key={c.code}><strong>{c.code}</strong><span>{c.title}</span></li>)}
              </ul>
            </div>
            <figure className="quality-fig" data-reveal><img src={images.production} alt="Inspection at DAEPL" /><figcaption>Fig. 02 — Checked at every stage.</figcaption></figure>
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="section section-rule customers">
        <div className="wrap split">
          <Label n="05">Customers</Label>
          <div className="cust" data-reveal>
            {customers.map((c) => <span key={c}>{c}</span>)}
            <p>Supplying OEMs and Tier-1 manufacturers across India.</p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="section section-tint">
        <div className="wrap split">
          <Label n="06">Locations</Label>
          <div>
            <h2 data-reveal>Three plants, <em>all within Delhi NCR.</em></h2>
            <table className="ltable" data-reveal>
              <tbody>
                {plants.map((p, i) => (
                  <tr key={p.city}>
                    <td>0{i + 1}</td>
                    <th scope="row">{p.city}</th>
                    <td>{p.state}</td>
                    <td>{p.label}</td>
                    <td className={p.status === "Operational" ? "ok" : "soon"}>{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="section">
        <div className="wrap split">
          <Label n="07">Careers</Label>
          <div className="careers" data-reveal>
            <h2>Good work is done by people <em>who care about it.</em></h2>
            <p className="body">We are looking for operators, inspectors and tool-room engineers who take pride in getting the details right.</p>
            <a href="#contact" className="link-lg">See open positions →</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="wrap split">
          <Label n="08">Contact</Label>
          <div>
            <h2 data-reveal>Let&apos;s talk about <em>your next part.</em></h2>
            <a href={`mailto:${company.email}`} className="contact-mail" data-reveal>{company.email}</a>
            <div className="contact-grid">
              <dl data-reveal>
                <div><dt>Telephone</dt><dd><a href={company.phoneHref}>{company.phone}</a></dd></div>
                <div><dt>Head office</dt><dd>Samaypur Industrial Area, Delhi</dd></div>
                <div><dt>Hours</dt><dd>Mon – Sat, 9:00 – 18:00</dd></div>
              </dl>
              <div data-reveal><EnquiryForm button="Send enquiry →" /></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-row">
          <Logo id="ft" />
          <span>© {new Date().getFullYear()} {company.name}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
