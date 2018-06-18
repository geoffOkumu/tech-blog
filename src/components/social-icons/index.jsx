import React from 'react';
import github from './assets/github.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';

const Icons = () =>{
    return(
    <div>
        <a href='https://twitter.com/Austoe6' target='_blank'>
          <img src={twitter} alt='twitter-link' className='social-icons' />
        </a>
        <a href='https://dribbble.com/geoffokumu' target='_blank'>
          <img src={facebook} alt='dribble-link' className='social-icons' />
        </a>
        <a href='https://github.com/geoffOkumu' target='_blank'>
          <img src={github} alt='github-link' className='social-icons' />
        </a>
        <a href='https://www.linkedin.com/in/geoffrey-okumu-b39309b9/' target='_blank'>
          <img src={linkedin} alt='linkedin-link' className='social-icons' />
        </a>
    </div>
    );
}

export default Icons;