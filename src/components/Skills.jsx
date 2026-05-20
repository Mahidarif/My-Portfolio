import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive Design'],
    icon: '◇',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Python', 'CRUD Operations'],
    icon: '◆',
  },
  {
    title: 'Database & DevOps',
    skills: ['MongoDB', 'Database Optimization', 'Postman', 'Git/GitHub', 'Version Control'],
    icon: '◈',
  },
  {
    title: 'Platforms & CMS',
    skills: ['WordPress', 'Shopify', 'Performance Optimization', 'Cross-Browser Compat'],
    icon: '◇',
  },
];

const marqueeSkills = [
  'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript',
  'Python', 'WordPress', 'Shopify', 'REST API', 'Git', 'JWT',
  'Tailwind CSS', 'MERN Stack', 'AI Integration', 'Postman',
  'Responsive Design', 'Database Optimization', 'E-Commerce',
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">
            Technologies & <span className="gold-underline">Skills</span>
          </h2>
          <p className="section-subtitle">
            A curated toolkit I leverage to build modern, scalable, and beautiful web applications.
          </p>
        </motion.div>

        <div className="skills__categories">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="skills__card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * idx, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <span className="skills__card-icon">{cat.icon}</span>
              <h3 className="skills__card-title">{cat.title}</h3>
              <ul className="skills__card-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skills__card-item">
                    <span className="skills__dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div className="skills__marquee-wrapper">
          <motion.div
            className="skills__marquee"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span key={i} className="skills__marquee-item">
                <span className="skills__marquee-dot">✦</span>
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
