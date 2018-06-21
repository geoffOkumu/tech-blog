import React from 'react'
import Whitespace from '../layout-components/whitespace'
import { Row, Col } from '../layout-components/grid'
import SocialIcons from '../components/social-icons'

const AboutPage = ({data}) =>{
    console.log(data)
    const aboutData = data.about.edges[0].node
    const profileData = data.authors.edges[0].node.frontmatter.authors[1]
    return(
        <div>
            <Whitespace/>
            <div style={{backgroundImage: `url(${aboutData.frontmatter.image})`}}>
                <div className="about-page__header">
                    <div className="container">
                        <Whitespace height={160}/>
                        <h1>About me</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <Whitespace height={20}/>
                <Row>
                    <Col lg={12} md={24} xs={24}></Col>
                    <Col lg={12} md={24} xs={24}>
                        <SocialIcons />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24} xs={24}>
                        <p className="about-page__copy" dangerouslySetInnerHTML={{__html: aboutData.html}}/>
                    </Col>
                    <Col lg={12} md={24} xs={24}></Col>
                </Row>
                <Whitespace height={80}/>
                <div className='about-profile__container'>
                    <div>
                        <div className="about-page__image">
                            <img src={profileData.image} alt="profile image"/>
                        </div>
                    </div>
                    <div>
                        <div className="about-page__profile">
                            <p>{profileData.names}</p>
                            <p>Follow me on <a href={profileData.twitter} target='_blank'>twitter</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Whitespace/>
        </div>
    )
}

export default AboutPage

export const query = graphql`
    query AboutPage {
        about: allMarkdownRemark(
            filter: {frontmatter: {title: {eq: "About"}}}
        ){
            edges {
                node {
                    frontmatter {
                        title
                        tagline
                        image
                        email
                        phone
                    }
                    html
                }
            }
        }
        authors: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Authors"}}}){
            edges {
              node {
                frontmatter {
                  title
                  tagline
                  authors{
                    names
                    image
                    bio
                    twitter
                  }
                }
              }
            }
        }
    }
`