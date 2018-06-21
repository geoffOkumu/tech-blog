import React from 'react'
import Whitespace from '../layout-components/whitespace'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import Divider from '../layout-components/divider'
import { Row, Col } from '../layout-components/grid'
import Helmet from 'react-helmet'
import FeaturedPosts from '../components/FeaturedPosts';
import Title from '../components/Title';
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookShareCount,

    TwitterIcon,
    TwitterShareButton,

    LinkedinIcon,
    LinkedinShareButton,
    LinkedinShareCount,

    WhatsappIcon,
    WhatsappShareButton
} from 'react-share'

class BlogPost extends React.Component{
    render(){
        const {data} = this.props
        const post = data.blogPost
        const postId = this.props.pathContext.id
        const postMeta = post.frontmatter
        const shareUrl = typeof window !== 'undefined' ? window.location.href : `http://wwww.techgenius.me/${post.fields.slug}`
        const title = postMeta.title
        //posts from the same category
        let relatedPosts = []
        data.relatedPosts.edges.map((post) => {
            if(post.node.id !== postId){
                relatedPosts = relatedPosts.concat(post)
            }
        })
        //recent posts
        let recentPosts = []
        data.recentPosts.edges.map((post) => {
            if(post.node.id !== postId){
                recentPosts = recentPosts.concat(post)
            }
        })

        return(
            <div className='blog-post__container'>
                <Helmet
                    title={postMeta.title}
                />
                <Whitespace height={160}/>
                <div className="blog-post__meta">
                    <h1>{postMeta.title}</h1>
                    <Whitespace height={60}/>
                    <Divider/>
                    <div className='blog-post__category container'>
                        <p>By {postMeta.author} . On {postMeta.date} in <Link to={`/categories/${kebabCase(postMeta.category)}`}>{postMeta.category}</Link> . {post.timeToRead} minutes read
                        </p>
                    </div>
                </div>
                <img src={postMeta.thumbnail} alt='featured image' className='blog-post__header-img'/>
                <Whitespace height={60}/>
                <Row>
                    <Col lg={4} md={24} xs={24}>
                        <div className="blog-post__share-buttons">
                            <div className='blog-post__share-title'>
                                <Title title='share'/>
                            </div>
                            <div>
                                <FacebookShareButton
                                    url={shareUrl}
                                    quote={postMeta.title}
                                    className="blog-post__share-btn"
                                >
                                    <FacebookIcon
                                    size={48}
                                    round />
                                </FacebookShareButton>
                                <FacebookShareCount
                                    url={shareUrl}
                                    className="blog-post__share-count">
                                    {count => count}
                                </FacebookShareCount>
                            </div>
                            <div>
                            <TwitterShareButton
                                url={shareUrl}
                                title={title}
                                className="blog-post__share-btn">
                                <TwitterIcon
                                size={48}
                                round />
                            </TwitterShareButton>
                            </div>
                            <div>
                            <WhatsappShareButton
                                url={shareUrl}
                                title={title}
                                separator=":: "
                                className="blog-post__share-btn">
                                <WhatsappIcon size={48} round />
                            </WhatsappShareButton>
                            </div>
                            <div>
                            <LinkedinShareButton
                                url={shareUrl}
                                title={title}
                                windowWidth={750}
                                windowHeight={600}
                                className="blog-post__share-btn">
                                <LinkedinIcon
                                size={48}
                                round />
                            </LinkedinShareButton>
                            <LinkedinShareCount
                                url={shareUrl}
                                className="blog-post__share-count">
                                {count => count}
                            </LinkedinShareCount>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24} xs={24}>
                        <div
                            className='blog-post__body container'
                            dangerouslySetInnerHTML={{__html: post.html}}
                        />
                    </Col>
                    <Col lg={8} md={24} xs={24}>
                    <div className="blog-post__right-panel">
                        <Title title='Join our mail list'/>
                    </div>
                    </Col>
                </Row>
                <Whitespace height={60}/>
                <Divider />
                <div>
                    {
                        relatedPosts.length >= 1 ? 
                        <div>
                            <div className="container"><Title title='Related posts'/></div>
                            <FeaturedPosts posts={relatedPosts}/>
                        </div>
                        :
                        <div>
                            <div className="container"><Title title='Recent posts'/></div>
                            <FeaturedPosts posts={recentPosts.slice(0, 3)}/>
                        </div>
                    }
                </div>
                <Divider />
                <Whitespace/>
            </div>
        )
    }
}

export default BlogPost

export const blogPostQuery = graphql`
  query BlogPostByID($id: String!, $category: String) {
    blogPost:markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        description
        category
        author
      }
    }
    relatedPosts:allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail
            author
          }
          excerpt
          timeToRead
        }
      }
    }
    recentPosts:allMarkdownRemark(
      limit: 1000
      filter: {frontmatter: {templateKey: {eq: "blog"}}}
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
            thumbnail
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`