import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Education.css';

const educationItems = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Management & Technology, Lahore',
    period: '2021 – 2025',
    points: [
      'Strong academic foundation in algorithms, data structures, and software engineering.',
      'Completed advanced coursework in web development, databases, and modern application design.',
      'Led collaborative projects focused on MERN stack development and responsive UI/UX.',
    ],
  },
  {
    degree: 'Full Stack Web Development',
    institution: 'Self-Directed Learning & Projects',
    period: '2024 – Present',
    points: [
      'Built production-ready React and Node.js applications with RESTful APIs.',
      'Applied modern development workflows using Git, responsive design, and deployment best practices.',
      'Focused on performance optimization, scalable architecture, and clean code.',
    ],
  },
  {
    degree: 'Web Design & UX Fundamentals',
    institution: 'Online Certification',
    period: '2024',
    points: [
      'Developed wireframes and prototypes for intuitive user experiences.',
      'Practiced accessibility-first design with polished visual hierarchy and typography.',
      'Enhanced projects with refined interactions and brand-consistent styling.',
    ],
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section education" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="education__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic & <span className="gold-underline">Learning</span>
          </h2>
          <p className="section-subtitle">
            A summary of my formal education, ongoing web development growth, and design-focused learning.
          </p>
        </motion.div>

        <div className="education__timeline">
          <div className="education__line" />
          {educationItems.map((item, idx) => (
            <motion.div
              key={item.degree}
              className="education__item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * idx, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="education__dot" />
              <div className="education__card glass-card">
                <div className="education__card-header">
                  <div>
                    <h3 className="education__degree">{item.degree}</h3>
                    <span className="education__institution">{item.institution}</span>
                  </div>
                  <span className="education__period">{item.period}</span>
                </div>
                <ul className="education__points">
                  {item.points.map((point) => (
                    <li key={point} className="education__point">
                      <span className="education__point-dot" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
