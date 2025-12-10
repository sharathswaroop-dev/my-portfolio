import "./App.css";

export default function App() {
  return (
    <div className="page-dark">
      {/* Top nav */}
      <header className="nav">
        <div className="nav-left">Sharath Swaroop M</div>

        <nav className="nav-center">
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <span className="nav-pill" />
          <span>Available for work</span>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="hero2">
        <div className="hero2-inner">
          {/* Left column */}
          <div className="hero2-left">
            <p className="eyebrow">Portfolio • 2025</p>
            <h1 className="hero2-title">
              Designing clean
              <br />
              digital experiences.
            </h1>
            <p className="hero2-subtitle">
              I&apos;m <strong>Sharath Swaroop M</strong>, a beginner developer
              focused on <strong>frontend, React</strong> and{" "}
              <strong>modern UI</strong>. I love turning ideas into simple,
              sharp interfaces.
            </p>

            <div className="hero2-cta-row">
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById("work");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View portfolio
              </button>
              <button className="btn-ghost">Download CV</button>
            </div>

            <div className="hero2-stats">
              <div>
                <div className="stat-number">+10</div>
                <div className="stat-label">Mini projects</div>
              </div>
              <div>
                <div className="stat-number">+3</div>
                <div className="stat-label">Hackathons</div>
              </div>
              <div>
                <div className="stat-number">1st yr</div>
                <div className="stat-label">Engineering</div>
              </div>
            </div>
          </div>

          {/* Right column – profile card */}
          <div className="hero2-right">
            <div className="profile-card">
              <div className="profile-header">
                <div className="avatar-circle">
                  <span>SS</span>
                </div>
                <div>
                  <h3>Sharath Swaroop M</h3>
                  <p>Frontend / Web developer</p>
                </div>
                <span className="availability-pill">Open to projects</span>
              </div>

              <div className="profile-body">
                <p>
                  Currently learning <strong>React</strong>,{" "}
                  <strong>C++</strong> and <strong>JavaScript</strong>, and
                  building personal projects + hackathon ideas to sharpen my
                  skills.
                </p>

                <div className="chips">
                  <span>React</span>
                  <span>HTML &amp; CSS</span>
                  <span>UI design</span>
                  <span>Git &amp; GitHub</span>
                </div>

                <div className="profile-footer">
                  <div className="dot-row">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="profile-links">
                    <a
                      href="https://github.com/your-username"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              </div>
            </div>

            {/* floating mini-card */}
            <div className="floating-card">
              <p>Latest activity</p>
              <h4>FLAREd Up Hybrid Hackathon</h4>
              <p className="floating-sub">
                Built a FLR-based travel helper concept with crypto payments.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* WORK SECTION */}
      <section id="work" className="section-dark">
        <h2>Selected work</h2>
        <div className="cards-row">
          <article className="work-card">
            <h3>PriceCompare</h3>
            <p>
              E-commerce price comparison concept for Amazon, Flipkart and other
              stores with a clean UI.
            </p>
          </article>
          <article className="work-card">
            <h3>Travel Helper – FLAREd Up</h3>
            <p>
              Web3 travel helper idea built during the FLAREd Up Hybrid
              Hackathon in Bangalore.
            </p>
          </article>
          <article className="work-card">
            <h3>This portfolio</h3>
            <p>React-based landing page inspired by Dribbble designs.</p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-dark">
        <h2>About</h2>
        <p>
          I&apos;m an engineering student from India learning full-stack
          development. Right now I&apos;m focused on mastering{" "}
          <strong>React, C++ and JavaScript</strong>, participating in
          hackathons and building projects that look and feel professional.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-dark">
        <h2>Let&apos;s connect</h2>
        <p>
          Want to collaborate, invite me to a hackathon team, or just talk about
          projects?
        </p>
        <ul className="contact-list-dark">
          <li>📧  sharathswaroopm.25cse@cambridge.edu.in</li>
          <li>
            🐙{" "}
            <a href="https://github.com/sharathswaoop-dev" target="_blank">
               github.com/sharathswaoop-dev
            </a>
          </li>
          <li>
            💼{" "}
            <a a href="https://linkedin.com/in/sharath-swaroop-m-179a9a379" target="_blank">
                 linkedin.com/in/sharath-swaroop-m-179a9a379
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer-dark">
        © {new Date().getFullYear()} Sharath — Portfolio landing page
      </footer>
    </div>
  );
}
