export default function Resume() {
  return (
    <div className="spa-view view-active">
      <section className="resume-hub">
        <h2 className="section-title">Professional <span className="gradient-text">Resume</span></h2>
        <div className="resume-download-bar"></div>

        <div className="resume-section-group">
          <h3>Professional Experience</h3>
          <div className="experience-card">
            <h4>Junior Software Developer</h4>
            <h5>Epress Computech A4 Printing Solutions Enterprise (2025 - Present)</h5>
            <p>As a Press Operator at a printing company, I operated and monitored printing machinery to produce high-quality printed materials efficiently while ensuring accuracy, consistency, and adherence to production specifications.</p>
          </div>
        </div>

        <div className="resume-section-group">
          <h3>Certifications</h3>
          <div className="certifications-grid">
            <div className="cert-item"><i className="fas fa-certificate"></i> Freecodecamp Python Certificate</div>
            <div className="cert-item"><i className="fas fa-certificate"></i> Crash Course on Python (Coursera)</div>
            <div className="cert-item"><i className="fas fa-certificate"></i> Certificate in Product Designing</div>
            <div className="cert-item"><i className="fas fa-certificate"></i> Certificate in Core UI Components</div>
            <div className="cert-item"><i className="fas fa-certificate"></i> Certificate in UX Design Foundations</div>
            <div className="cert-item"><i className="fas fa-certificate"></i> Certificate in Information Architecture</div>
          </div>
        </div>

        <div className="resume-section-group">
          <h3>Key Achievements</h3>
          <ul className="achievements-list">
            <li><i className="fas fa-trophy"></i> Designed and developed multiple responsive web applications with clean, user-focused interfaces.</li>
            <li><i className="fas fa-star"></i> Developed real-time applications such as a weather app using API integration.</li>
          </ul>
        </div>

        <div className="resume-section-group">
          <h3>Current Focus & Learning</h3>
          <div className="learning-card">
            <p><i className="fas fa-code-branch"></i> Currently perfecting declarative deep micro-routing engines and state persistence models within standard browser runtimes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
