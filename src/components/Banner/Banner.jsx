import './Banner.css'
import banner from '../../assets/banner.jpg'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className='bannerContainer'>
    <div className="banner" style={{ '--banner-image': `url(${banner})` }}>
      <div className='bannerText'>
      <h1>We ensure <span style={{ whiteSpace: 'nowrap' }}><Screen /></span></h1>
      <p>Enjoy a Dining Experience That Bridges Cultures and Celebrates the Art of Cooking from Around the World.</p>
        <Link to='services' smooth={true} offset={-275} duration={500}><button className='btn'>Explore more</button></Link>
      </div>
      </div>
      </div>
  );
}

const Screen = () => {
  const words = ["Exceptional Service", "Quality Food", "Community engagement", "Hygiene"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [words.length]);

  return (
    <motion.span
      key={index}
      variants={variants}
      animate="show"
      initial="hide"
      style={{ display: "inline-block", whiteSpace: "nowrap" }}
    >
      {` ${words[index]}`}
    </motion.span>
  );
};

export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.9
    }
  },
  hide: {
    y: -20,
    opacity: 0
  }
};
