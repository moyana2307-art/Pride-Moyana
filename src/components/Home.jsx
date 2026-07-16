import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function AnimatedStat({ value, label, delay }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 1500
          const stepTime = 30
          const steps = duration / stepTime
          const increment = numericPart / steps

          const timer = setInterval(() => {
            start += increment
            if (start >= numericPart) {
              setCount(numericPart)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, stepTime)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericPart])

  return (
    <div className="stat-item" ref={ref}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

const skills = [
  { icon: 'fab fa-html5', label: 'HTML' },
  { icon: 'fab fa-css3-alt', label: 'CSS' },
  { icon: 'fab fa-js', label: 'JavaScript' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fab fa-react', label: 'React' },
  { icon: 'fab fa-django', label: 'Django' },
]

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
          {skills.map((skill) => (
            <span key={skill.label}><i className={skill.icon}></i> {skill.label}</span>
          ))}
        </div>
      </section>

      <section className="featured-projects">
        <h2 className="section-title">Featured <span className="gradient-text">Inventions</span></h2>
        <div className="projects-grid">
          <div className="project-card reveal-on-view">
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
          <AnimatedStat value="5+" label="Projects Delivered" delay={0} />
          <AnimatedStat value="90%" label="Client Satisfaction" delay={0.15} />
          <AnimatedStat value="1K+" label="Lines of Code" delay={0.3} />
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card reveal-on-view">
          <h2>Have a dynamic project in mind?</h2>
          <Link to="/contact" className="btn btn-primary">Let's Connect Now</Link>
        </div>
      </section>
    </div>
  )
}
