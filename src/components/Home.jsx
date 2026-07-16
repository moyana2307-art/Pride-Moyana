import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="spa-view view-active">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Crafting Digital <span className="gradient-text">Experiences</span></h1>
          <p className="hero-subtitle">Full-Stack Developer specializing in clean UI/UX and strong backend.</p>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>

      <section className="home-about-preview">
        <h2 className="section-title">Who <span className="gradient-text">I Am</span></h2>
        <div className="preview-grid">
          <p>I build interactive, high-performance web applications with modular architecture. Driven by clean design principles, I translate complex technical problems into fluid, engaging digital realities.</p>
          <Link to="/about" className="btn btn-secondary">Read My Full Journey</Link>
        </div>
      </section>

      <section className="home-skills-strip">
        <div className="skills-ticker">
          <span><i className="fab fa-html5"></i> HTML</span>
          <span><i className="fab fa-css3-alt"></i> CSS</span>
          <span><i className="fab fa-js"></i> JavaScript</span>
          <span><i className="fab fa-python"></i> Python</span>
          <span><i className="fab fa-react"></i> React</span>
          <span><i className="fab fa-django"></i> Django</span>
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured <span className="gradient-text">Inventions</span></h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="card-image"><i className="fas fa-calendar-check card-icon"></i></div>
            <div className="card-content">
              <h3>Real-Time Booking Platform</h3>
              <p>A multi-screen queue ecosystem with separate barber and client administrative dashboards.</p>
              <Link to="/projects" className="project-link">Learn More <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics-section">
        <div className="stats-grid">
          <div className="stat-item"><h3>5+</h3><p>Projects Delivered</p></div>
          <div className="stat-item"><h3>90%</h3><p>Client Satisfaction</p></div>
          <div className="stat-item"><h3>1K+</h3><p>Lines of Code</p></div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Have a dynamic project in mind?</h2>
          <Link to="/contact" className="btn btn-primary">Let's Connect Now</Link>
        </div>
      </section>
    </div>
  )
}
