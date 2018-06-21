import React from 'react'
import backgroundImg from '../assets/clouds.svg'
import LogoImg from '../assets/rick.svg'

const Intro = () =>{
    return(
        <div className="intro__container">
            <div className="intro-bg">
                <div className="into-body">
                    <div className="intro-body__image">
                        <img src={LogoImg} alt="logo"/>
                    </div>
                    <div className='intro-body__header'>
                        <h1>TechGenius</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, voluptatum odit officia eius harum ducimus nam animi in! Rerum, molestias.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro