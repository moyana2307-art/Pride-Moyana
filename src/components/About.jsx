export default function About() {
  return (
    <div className="spa-view view-active">
      <section className="about-main">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="about-lead">Passionate software developer focused on engineering highly structural UI environments and single-page mechanics.</p>

        <div className="timeline">
          <div className="timeline-item reveal-on-view">
            <div className="timeline-date">2026 - Present</div>
            <div className="timeline-info">
              <h4>Product Designer</h4>
              <p>Designing the overall experience and appearance of a product, focusing on how it looks, feels, and works for the user.</p>
            </div>
          </div>
          <div className="timeline-item reveal-on-view" style={{ transitionDelay: '0.15s' }}>
            <div className="timeline-date">2026 - Present</div>
            <div className="timeline-info">
              <h4>Lead Frontend Craftsman</h4>
              <p>Architecting client portals and queue administrative platforms utilizing modular core principles.</p>
            </div>
          </div>
          <div className="timeline-item reveal-on-view" style={{ transitionDelay: '0.3s' }}>
            <div className="timeline-date">2026 - Present</div>
            <div className="timeline-info">
              <h4>Full-Stack Engineer</h4>
              <p>Managed responsive service web structures, templates, and standard print workflow systems.</p>
            </div>
          </div>
        </div>

        <div className="education-block">
          <h3>Education</h3>
          <div className="edu-card reveal-on-view">
            <h4>Software Engineering and Product Design</h4>
            <p>Building scalable, user-focused digital solutions through clean code, thoughtful design, and strong problem-solving.</p>
          </div>
        </div>

        <div className="skills-matrix">
          <div className="matrix-col reveal-on-view">
            <h3>Technical Skill Matrix</h3>
            <ul className="matrix-list">
              <li><i className="fas fa-check-circle"></i> Advanced HTML</li>
              <li><i className="fas fa-check-circle"></i> Advanced CSS Layout Handling</li>
              <li><i className="fas fa-check-circle"></i> Modern JSON Data Transmissions</li>
            </ul>
          </div>
          <div className="matrix-col reveal-on-view" style={{ transitionDelay: '0.15s' }}>
            <h3>Soft Skills Profile</h3>
            <ul className="matrix-list">
              <li><i className="fas fa-heart"></i> Transparent Group Cooperation</li>
              <li><i className="fas fa-brain"></i> Analytical Infrastructure Debugging</li>
              <li><i className="fas fa-comments"></i> Clean Client Communication</li>
            </ul>
          </div>
        </div>

        <div className="interests-block">
          <h3>Interests & Pursuits</h3>
          <div className="interests-tags">
            <span className="reveal-on-view"><i className="fas fa-palette"></i> UI Design Trends</span>
            <span className="reveal-on-view" style={{ transitionDelay: '0.1s' }}><i className="fas fa-microchip"></i> System Automation</span>
            <span className="reveal-on-view" style={{ transitionDelay: '0.2s' }}><i className="fas fa-book-open"></i> Technical Mentorship</span>
          </div>
        </div>
      </section>
    </div>
  )
}
