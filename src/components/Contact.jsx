import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        const result = await response.json().catch(() => ({}))
        alert(result.detail || 'Something went wrong. Please try again.')
        setStatus('idle')
      }
    } catch (error) {
      console.error('Network Error:', error)
      alert('Could not connect to the server. Please try again later.')
      setStatus('idle')
    }
  }

  return (
    <div className="spa-view view-active">
      <section className="contact-hub">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

        <div className="contact-split-layout">
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p><i className="fas fa-envelope"></i> moyana2307@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +263 777 452 902</p>
            <p><i className="fas fa-map-marker-alt"></i> Victoria Falls, Zimbabwe</p>

            <div className="social-links-strip">
              <a href="https://github.com/moyana2307-art/" aria-label="Github Profile" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/pride-moyana-5611143ab/" aria-label="LinkedIn Connect" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" required placeholder=" " value={formData.name} onChange={handleChange} />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required placeholder=" " value={formData.email} onChange={handleChange} />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <textarea id="message" required rows="4" placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                <label htmlFor="message">Project Details</label>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span>Sending...</span> <i className="fas fa-spinner fa-spin"></i></>
                ) : status === 'sent' ? (
                  <><span>Message Sent!</span> <i className="fas fa-check"></i></>
                ) : (
                  <><span>Send Message</span> <i className="fas fa-paper-plane"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
