const projects = [
  {
    title: 'Africa Rising Safaris Website',
    description: 'A responsive tourism website showcasing safari experiences across Africa, designed to promote travel packages, destinations, and bookings with a clean user interface.',
    icon: 'fas fa-layer-group',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/moyana2307-art/Africa-Rising-Website-',
    demo: 'http://africa-rising.vercel.app/',
  },
  {
    title: 'Flames Restaurant Website',
    description: 'A modern restaurant website featuring an interactive menu, online reservation system, and engaging UI to enhance customer experience and brand presence.',
    icon: 'fas fa-layer-group',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/moyana2307-art/Flames-Project-Main',
    demo: null,
  },
  {
    title: 'Medlink',
    description: 'A healthcare platform concept designed to improve access to medical services by connecting patients with healthcare providers through a simple and efficient digital system.',
    icon: 'fas fa-layer-group',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/moyana2307-art/Medilink',
    demo: 'https://medilink-egxk.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'A real-time weather application that displays current weather conditions and forecasts using API integration, built with a clean and responsive interface.',
    icon: 'fas fa-layer-group',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/moyana2307-art/Weather-App',
    demo: null,
  },
  {
    title: 'Todo App',
    description: 'A task management application that helps users organize daily activities, track progress, and improve productivity with a simple and intuitive UI.',
    icon: 'fas fa-layer-group',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/moyana2307-art/TODOAPP',
    demo: 'https://todoapp-blush-phi.vercel.app/',
  },
  {
    title: 'Love for Africa',
    description: 'A modern full website for Love for Africa, dedicated to supporting and uplifting communities across the continent.',
    icon: 'fas fa-heart',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: null,
    demo: 'https://love-for-africa.vercel.app/',
  },
]

export default function Projects() {
  return (
    <div className="spa-view view-active">
      <section className="projects-catalog">
        <h2 className="section-title">Complete Portfolio <span className="gradient-text">Catalog</span></h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="card-image"><i className={`${project.icon} card-icon`}></i></div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="card-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
