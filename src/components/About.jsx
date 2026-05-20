import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './About.css';

const stats = [
  { label: 'Projects Delivered', value: 10, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
  { label: 'Tech Stack Proficiencies', value: 12, suffix: '+' },
  { label: 'Years Coding', value: 1, suffix: '+' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="about__stat-number">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="about__grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about__text" variants={itemVariants}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting Digital <span className="gold-underline">Excellence</span>
            </h2>
            <div className="gold-divider" />
            <p className="about__paragraph">
              Computer Science graduate from the University of Management & Technology, Lahore, with hands-on expertise in <strong>MERN Stack development</strong>. I specialize in building scalable full-stack web applications, RESTful APIs, and modern e-commerce platforms using React.js, Next.js, Node.js, Express.js, and MongoDB.
            </p>
            <p className="about__paragraph">
              From architecting RESTful APIs to crafting pixel-perfect React interfaces with Tailwind CSS, I bring technical precision and creative vision to every project. My experience spans AI-powered e-commerce platforms, real estate web applications, digital marketing dashboards, and custom WordPress solutions.
            </p>
            <p className="about__paragraph">
              When I'm not coding, you'll find me running my perfume business (<em>Mahid Aromas</em>), playing football, or exploring the latest in AI and web technologies. I believe great software comes from understanding both the code and the people who use it.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Lahore, Pakistan</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">mahid.arif@gmail.com</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Phone</span>
                <span className="about__info-value">+92 341 9870070</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Availability</span>
                <span className="about__info-value about__info-value--gold">Open for Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="about__stats" variants={itemVariants}>
            <div className="about__stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat-card glass-card">
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="about__quote glass-card">
              <svg className="about__quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p className="about__quote-text">
                "Code is not just syntax — it's a craft. Every line is an opportunity to create something meaningful."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
