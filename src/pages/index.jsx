import React from 'react'
import Link from 'gatsby-link'
import FeaturedPosts from '../components/FeaturedPosts';
import About from '../components/About';
import TopPosts from '../components/TopPosts';
import Divider from '../layout-components/divider'

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
        <About data={aboutData} />
      </div>
      <div className="container">
        <TopPosts data={topPosts.slice(0, 3)} />
      </div>
      <Divider />
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
    categories: allMarkdownRemark(
      filter: {frontmatter: {title: {eq: "Categories"}}}
    ){
      edges {
        node {
          frontmatter {
            title
            tagline
            categories {
              title
              description
              image
            }
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
