import React from 'react'
import Link from 'gatsby-link'
import {Row, Col} from '../layout-components/grid'

const FeaturedPosts = ({posts}) =>{
    return(
        <Row className='featured-posts'>
            {
                posts.map((post)=>
                <Col lg={8} md={24} key={post.node.id}>
                    <Link to={post.node.fields.slug}>
                        <div className="featured-post__container">
                            <div className='featured-post__img'>
                                <img src={post.node.frontmatter.thumbnail} alt="featured image"/>
                            </div>
                            <div className='featured-post__text'>
                                <span>{post.node.frontmatter.category}</span>
                                <h4>{post.node.frontmatter.title}</h4>
                            </div>
                        </div>
                    </Link>
                </Col>
            )
            }
        </Row>
    )
}

export default FeaturedPosts