import React from 'react'

const BlogPostTemplate = ({
    content,
    description,
    tags,
    title
}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{content}</p>
        </div>
    )
}

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default BlogPostPreview
