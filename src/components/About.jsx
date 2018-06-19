import React from 'react'
import Button from './button'
import {Row, Col} from '../layout-components/grid'

const About = ({data}) =>{
    const aboutDetails = data.edges[0].node.frontmatter
    
    return(
        <div style={{backgroundImage: `url(${aboutDetails.image})`}}>
            <div className="home-about__container">
                <div className="container">
                    <Row>
                        <Col lg={12} xs={24}>
                            <div className="home-about__text">
                                <h1>About us</h1>
                                <p>{aboutDetails.tagline}</p>
                            </div>
                        </Col>
                        <Col lg={12} xs={24}>
                            <div className="home-about__image">
                                <img src={aboutDetails.image} alt="logo"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About