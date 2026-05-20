import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Digital Marketing Platform',
    subtitle: 'MERN Stack – Ongoing',
    description: 'Developing a full-stack platform for managing clients, campaigns, leads, and performance analytics. Built with React.js for real-time client dashboards, Node.js/Express.js for scalable RESTful APIs with JWT authentication, and optimized MongoDB schemas for efficient data retrieval.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Analytics'],
    icon: '◈',
    color: '#C9A84C',
  },
  {
    id: 2,
    title: 'MedMagic',
    subtitle: 'AI-Powered E-Commerce',
    description: 'A full-stack AI-integrated e-commerce platform built with MERN Stack and Python. Features intelligent product recommendations, RESTful APIs with JWT authentication, dynamic React frontend, and optimized MongoDB schemas for high performance and scalability.',
    tags: ['MERN Stack', 'Python', 'AI Integration', 'JWT Auth', 'MongoDB'],
    icon: '◆',
    color: '#E8D48B',
  },
  {
    id: 3,
    title: 'Real Estate Web App',
    subtitle: 'Full-Stack Property Platform',
    description: 'A modern full-stack real estate platform built from scratch supporting property listings, advanced search with filters, user management, and JWT authentication. Features robust CRUD APIs and responsive React interfaces for buyers, sellers, and admins.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CRUD', 'JWT'],
    icon: '◇',
    color: '#A0832E',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gold-underline">Work</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects that showcase my passion for building exceptional digital experiences.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`projects__card ${hoveredId === project.id ? 'projects__card--hovered' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * idx, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <div className="projects__card-bg">
                <div className="projects__card-orb" style={{ background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)` }} />
              </div>

              <span className="projects__card-icon">{project.icon}</span>
              <span className="projects__card-number">0{idx + 1}</span>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-subtitle">{project.subtitle}</p>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    className="projects__card-detail"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="projects__card-desc">{project.description}</p>
                    <div className="projects__card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="projects__tag">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="projects__card-cta">
                <span>Click to {expandedId === project.id ? 'collapse' : 'explore'}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
