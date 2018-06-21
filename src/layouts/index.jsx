import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/styles.scss'
import Whitespace from '../layout-components/whitespace';
import Divider from '../layout-components/divider';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'TechGenius we geek about technology, software, cars' },
        { name: 'keywords', content: 'Technology, smartphones, cars, tech reviews' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} location={location} />
    <div>
      {children()}
    </div>
    <div className="container">
      <Whitespace height={60}/>
      <Divider />
      <p>&copy; Copyright 2018</p>
      <Whitespace height={20}/>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
