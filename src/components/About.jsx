import React from 'react'
import Button from './button'
import {Row, Col} from '../layout-components/grid'

const About = ({data}) =>{
    const aboutDetails = data.edges[0].node.frontmatter
    
    return(
        <div>
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
                            
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About