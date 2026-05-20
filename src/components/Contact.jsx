import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const contactMethods = [
  {
    label: 'Email Me',
    value: 'mahid.arif@gmail.com',
    href: 'mailto:mahid.arif@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
    color: '#C9A84C',
  },
  {
    label: 'Call Me',
    value: '+92 341 9870070',
    href: 'tel:+923419870070',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#E8D48B',
  },
  {
    label: 'LinkedIn',
    value: '/in/mahidarif',
    href: 'https://linkedin.com/in/mahidarif',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: '#A0832E',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />

      {/* Decorative top border */}
      <div className="contact__ornament">
        <span className="contact__ornament-line" />
        <span className="contact__ornament-diamond">◇</span>
        <span className="contact__ornament-line" />
      </div>

      <div className="container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            Let's Create Something <span className="gold-underline">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            I'm currently open to freelance projects and collaborations. 
            Reach out and let's build something remarkable together.
          </p>
        </motion.div>

        {/* Availability banner */}
        <motion.div
          className="contact__availability"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact__avail-pulse">
            <div className="contact__avail-dot" />
          </div>
          <span className="contact__avail-text">Available for new projects — Let's talk</span>
        </motion.div>

        {/* Contact cards */}
        <div className="contact__cards">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === 'LinkedIn' ? '_blank' : undefined}
              rel={method.label === 'LinkedIn' ? 'noreferrer' : undefined}
              className="contact__card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="contact__card-icon" style={{ '--card-color': method.color }}>
                {method.icon}
              </div>
              <div className="contact__card-body">
                <span className="contact__card-label">{method.label}</span>
                <span className="contact__card-value">{method.value}</span>
              </div>
              <div className="contact__card-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom decorative divider */}
        <motion.div
          className="contact__footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="contact__footer-line" />
          <p className="contact__footer-text">Lahore, Pakistan — mahid.arif@gmail.com</p>
          <div className="contact__footer-line" />
        </motion.div>
      </div>
    </section>
  );
}
