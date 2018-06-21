import React from 'react'
import {Row, Col} from '../layout-components/grid'
import Link from 'gatsby-link'

const AllPosts = ({data}) =>{
    return (
        <div className="all-posts__container">
            <Row className='border-right'>
                {
                    data.map((post) =>
                    <Col lg={12} xs={24} key={post.node.id}>
                        <div className="post-item__container">
                            <img src={post.node.frontmatter.thumbnail} alt="featured image" className="post-item__image"/>
                            <Link to={post.node.fields.slug}>
                                <h2 className="post-item__title">{post.node.frontmatter.title}</h2>
                            </Link>
                            <div className="post-item__meta">
                                <span>{post.node.frontmatter.date} in <Link to='/'>#{post.node.frontmatter.category}</Link></span>
                            </div>
                            <p className="post-item__excerpt">{post.node.excerpt}</p>
                        </div>
                    </Col>
                )
                }
            </Row>
            <Link to='/categories'>
                <div className="load-more">
                    Load More
                </div>
            </Link>
        </div>
    )
}

export default AllPosts;