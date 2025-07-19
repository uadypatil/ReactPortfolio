
import { useEffect, React } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function example() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <h1 data-aos="fade-up">Vite + React</h1>
      <p className="read-the-docs" data-aos="fade-up">
        Click on the Vite and React logos to learn more
      </p>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Framer Motion Animation</h1>
      </motion.div>
    </>
  )
}

export default example