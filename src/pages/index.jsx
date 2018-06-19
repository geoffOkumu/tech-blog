import React from 'react'
import Link from 'gatsby-link'
import FeaturedPosts from '../components/FeaturedPosts';

class IndexPage extends React.Component{
  render(){
    const {data} = this.props
    console.log(this.props)
    const featuredPosts = data.featuredPosts.edges
    return(
      <div>
        <div>
          <FeaturedPosts posts={featuredPosts}/>
        </div>
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    blogposts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      limit: 12
    ){
      edges {
        node {
          id
          frontmatter {
            title
            date
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
  }

`
