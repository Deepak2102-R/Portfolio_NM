import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs';


const insta = () => {
  window.open('https://www.instagram.com/deepak_02_official/');
};
const linkedin = () => {
  window.open('https://www.linkedin.com/in/deepak-r-232644211/');
};
const faceb = () => {
  window.open('https://www.facebook.com/deepak.r.716?mibextid=rS40aB7S9Ucbxw6v');
};
const yt = () => {
  window.open('https://www.youtube.com/@theDeepakR02');
};


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsInstagram onClick={insta}/>
        </div>
        <div>
            <BsLinkedin onClick={linkedin}/>
        </div>
        <div>
            <FaFacebookF onClick={faceb }/>
        </div>
        <div>
          <BsYoutube onClick={yt}/>
        </div>
    </div>
  )
}

export default SocialMedia