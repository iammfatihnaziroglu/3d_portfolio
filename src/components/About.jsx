import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServicesCard = ({ index, title, icon}) => {
  return (
    <p>{title}</p>
  )
}

const About = () => {
  return (
   <> 
    <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
     Buraya uzunca yazıcam. Şimdilik, ben Frontend Developer!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services, index) => (
        <ServicesCard key={services.title} index={index} {...services} />
      ))}

    </div>
   </>
  )
}

export default About