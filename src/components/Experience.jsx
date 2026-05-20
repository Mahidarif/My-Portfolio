import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Salar Technologies Private Limited, Lahore',
    period: 'Nov 2025 – Apr 2026',
    points: [
      'Developed scalable RESTful APIs using Node.js and Express.js for backend services',
      'Built responsive and dynamic frontend applications using React.js, Next.js, and Tailwind CSS',
      'Optimized MongoDB database schemas and queries, significantly improving application performance',
      'Integrated REST APIs with state management, validation, and error handling for seamless functionality',
      'Collaborated on interactive dashboards, admin panels, and authentication modules using Git',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Aim Services, Pakistan',
    period: 'Aug 2025 – Nov 2025',
    points: [
      'Engineered responsive user interfaces using HTML5, CSS3, and JavaScript, enhancing user engagement',
      'Collaborated with cross-functional teams to deliver user-centric features on time',
      'Optimized website performance and ensured cross-browser compatibility',
    ],
  },
  {
    role: 'WordPress Developer',
    company: 'Freelance',
    period: 'Jan 2025 – Aug 2025',
    points: [
      'Designed and developed 10+ custom WordPress websites with responsive themes and plugin integrations',
      'Optimized websites for speed, SEO, and improved user experience',
      'Delivered tailored solutions based on client requirements with timely project completion',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Professional <span className="gold-underline">Journey</span>
          </h2>
          <p className="section-subtitle">
            From internships to freelance — each role has sharpened my craft and deepened my expertise.
          </p>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__line" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              className="experience__item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * idx, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="experience__dot" />
              <div className="experience__card glass-card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <span className="experience__company">{exp.company}</span>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__points">
                  {exp.points.map((point) => (
                    <li key={point} className="experience__point">
                      <span className="experience__point-dot" />
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
