import React from 'react'
import Whitespace from '../layout-components/whitespace'
import SocialIcons from '../components/social-icons'
import Title from '../components/Title';

const ContactPage = ({data}) =>{
    const aboutData = data.about.edges[0].node
    return(
        <div>
            <Whitespace/>
            <div style={{backgroundImage: `url(${aboutData.frontmatter.image})`}}>
                <div className="about-page__header">
                    <div className="container">
                        <Whitespace height={160}/>
                        <h1>Get in touch</h1>
                    </div>
                </div>
            </div>
            <div className="container contact-page__contacts-container">
                <Title title='Contacts'/>
                <Whitespace height={10}/>
                <p>Phone: {aboutData.frontmatter.phone}</p>
                <p>Email: {aboutData.frontmatter.email} <a href={`mailto:${aboutData.frontmatter.email}`}>Email me</a></p>
                <Whitespace height={20}/>
                <Title title='Social'/>
                <Whitespace height={10}/>
                <SocialIcons/>
            </div>
            <Whitespace/>
        </div>
    )
}

export default ContactPage

export const query = graphql`
    query ContactPage {
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
    }
`