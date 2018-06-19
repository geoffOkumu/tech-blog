import React from 'react'
import {Row, Col} from '../layout-components/grid'
import Link from 'gatsby-link'

const TopPosts = ({data}) =>{
    return (
        <Row style={{paddingBottom: '4rem'}}>
            {
                data.map((post) =>
                <Col lg={12} xs={24} key={post.node.id}>
                    <div className="top-post__container">
                        <div className="top-post__category">
                            <span>{post.node.frontmatter.category}</span>
                        </div>
                        <Link to='/'>
                            <h1 className="top-post__title">{post.node.frontmatter.title}</h1>
                        </Link>
                        <span className="top-post__meta">By <Link to={`/authors`}>{post.node.frontmatter.author}</Link> on {post.node.frontmatter.date}</span>
                        <p className="top-post__excerpt">{post.node.excerpt}</p>
                    </div>
                </Col>
            )
            }
            <Col lg={12} xs={24} id='ad'></Col>
        </Row>
    )
}

export default TopPosts;