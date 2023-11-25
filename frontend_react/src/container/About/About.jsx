import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss';
import { images } from '../../constants';
import { ursFor,client, urlFor } from '../../client';
import { AppWrap } from '../../wrapper';

// import DownloadButton from './Downloadbutton';

// const abouts =[
//   {title: "Web Development", description: 'Interactive Web developer', imgUrl: images.webdev},
//   {title: "UI/UX Design", description: 'A Creative Designer', imgUrl: images.uidesign},
//   {title: "App Development", description: 'Android App Developer', imgUrl: images.appdev},
//   {title: "Content Creator", description: 'Passionate Content Creator', imgUrl: images.youtuber},
// ]

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/16Oknkbqc6lsBu62ibv20OwAIA5VjIgYp/view?usp=sharing', '_blank');
  };

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data)=> { setAbouts(data)})
  }, []);
  

  return (
    <>
      <h2 className='head-text '>
         Tech Enthusiast, <span> Passionate in <br /></span>
         Learning and using <span>Modern Tech</span>
      </h2>
      

      <button className="download-button" onClick={handleDownload}>
      Download My CV
      </button>
      

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity : 1}}
            whileHover={{scale:1.1}}
            teransition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt="about.title" />
              <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop:10}}>{about.description}</p>            
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');