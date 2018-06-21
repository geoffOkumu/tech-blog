import React from 'react'

const Categories = ({data}) =>{
    return(
        <div className="container" style={{paddingTop:100}}>
            Categories
        </div>
    )
}

export default Categories

export const query = graphql`
    query Categories {
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
    }
`