import React from 'react'
import { motion } from 'framer-motion';
// import { AppWrap } from '../../wrapper';
import images from '../../constants/images';
import './Header.scss';
import { AppWrap } from '../../wrapper';

const scaleVaritants={
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    },
  },
};
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100, 0], opacity:[0,1] }}
      transition={{duration: 1}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋 </span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'> Hello, I am </p>
              <h1 className='head-text'>DEEPAK</h1>
            </div>
          </div>
          
          <div className='tag-cmp app__flex'>
            <p className='bold-text'> Web Developer </p>
            <p className='p-text'> App Developer </p>
            <p className='p-text'>Grapic Designer</p>
            <p className='bold-text'>Youtuber</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
       whileInView={{scale:[0,1] }}
       transition={{duration: 1, delayChildren: 0.5}}
       className='app__header-img'>
        <img src={images.profile} alt="profile_bg" />
        
        <motion.img
         whileInView={{scale:[0,1], opacity:[0, 0.5] }}
         transition={{duration: 1, ease: "easeInOut"}}
         className='overlay__circle'
         src={images.circle}
         width={300}
         alt='circle.png'
        />
      </motion.div>

      <motion.div
      variant={scaleVaritants}
      whileInView={scaleVaritants.whileInView}
      className='app__header-circles'
      >
        {[images.html, images.css, images.js, images.python, images.sql, images.react].map((circle, inedex) => (
          <div className='cicle-cmp app__flex' key={`cicle-index`}>
            <img src={circle} alt="circle" />
          </div>
        ))}

      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');