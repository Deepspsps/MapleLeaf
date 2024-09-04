import React from 'react'
import './About.css'
import pictureOne from '../../assets/aboutOne.jpg'
import pictureTwo from '../../assets/aboutTwo.jpg'
import pictureThree from '../../assets/aboutThree.jpg'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className='about'>
           <div className='imagesGrid'>
        <motion.div 
        initial={{ x: -100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        className='image'>
        <img src={pictureOne} className='aboutImage1' alt=" "/>
        </motion.div>

        <motion.div 
        initial={{ x: -100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        className='image'>
        <img src={pictureTwo} className='aboutImage2' alt=" "/>
        </motion.div>

        <motion.div 
        initial={{ x: -100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        className='image'>
        <img src={pictureThree} className='aboutImage3' alt=" "/>
        </motion.div>
      </div>

      <div className='about-right'>
        <motion.h3
        initial={{ x: 100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        >About us</motion.h3>
        <motion.h2
        initial={{ x: 100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        >A Culinary Passport to Global Delights</motion.h2>
        <motion.p
        initial={{ x: 100, opacity:0 }}
        whileInView={{ x:0, opacity:1 }}
        transition={{
          delay:0.2,
          x:{ type: "spring", stiffness: 60},
          opacity:{duration:0.2},
          ease:"easeIn",
          duration:1,
        }}
        >At Maple Leaf, we celebrate the diversity of global cuisine, offering a menu that brings together
         flavors from around the world. Whether you're craving the bold spices of Mexico, the comforting
          dishes of Italy, or the authentic tastes of India, we serve a rich variety of culinary traditions.
          <br/>
          Our inviting atmosphere and carefully crafted dishes create a dining experience where food brings 
          people together and every meal takes you on a journey across cultures.</motion.p>
      </div>
    </div>
  )
}

export default About
