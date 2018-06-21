import React from 'react'
import Link from 'gatsby-link'
import FeaturedPosts from '../components/FeaturedPosts';
import About from '../components/About';
import TopPosts from '../components/TopPosts';
import { Row, Col } from '../layout-components/grid';
import AllPosts from '../components/AllPosts';
import Title from '../components/Title';
import Whitespace from '../layout-components/whitespace'
import SocialIcons from '../components/social-icons'

const IndexPage = ({data}) =>{
  const allPosts = data.blogposts.edges
  const featuredPosts = data.featuredPosts.edges
  const aboutData = data.about

  //remove displayed posts
  let displayedPosts = featuredPosts.map((post) => post.node.id)
  let topPosts = []
  allPosts.map((post) => {
    if(displayedPosts.indexOf(post.node.id) === -1){
      topPosts = topPosts.concat(post)
    }
  })

  return(
    <div>
      <div>
        <FeaturedPosts posts={featuredPosts}/>
      </div>
      <div style={{backgroundColor: '#fafafa',paddingTop: '2rem'}}>
        <div className="container">
          <Title title='Top Posts'/>
          <TopPosts data={topPosts.slice(0, 3)} />
        </div>
      </div>
      <About data={aboutData} />
      <div className="container">
        <Row>
          <Col lg={16} xs={24}>
            <Whitespace height ={16}/>
            <Title title='All Posts'/>
            <AllPosts data={allPosts}/>
          </Col>
          <Col lg={8} xs={24}>
            <Whitespace height ={16}/>
            <div className="side-panel">
              <Title title='Join our Maillist'/>
              <Whitespace height={20}/>
              <Title title='Social'/>
              <Whitespace height={10}/>
              <SocialIcons/>
            </div>
          </Col>
        </Row>
      </div>
      <Whitespace/>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    blogposts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            thumbnail
            category
            author
            featured
            tagline
            description
          }
        }
      } 
    }
    featuredPosts: allMarkdownRemark(
      filter: {frontmatter: {featured: {eq: true}}}
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          id
          frontmatter {
            title
            date
            thumbnail
            category
          }
        }
      } 
    }
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
