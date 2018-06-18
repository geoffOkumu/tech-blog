import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/rick.svg'
import {Row, Col} from '../layout-components/grid'
import Divider from '../layout-components/divider'

const Header = ({ siteTitle }) => (
  <div>
    <header className='header'>
      <Row className='container' type='flex' justify='space-between' style={{alignItems: 'center'}}>
        <Col>
          <Link to='/'>
            <div className='header-logo'>
              <img className='header-logo__img' src={logo} alt='logo'/>
              <span>{siteTitle}</span>
            </div>
          </Link>
        </Col>
        <Col>
          <nav className='header-nav'>
            <ul className='header-nav__container'>
              <li>
                <Link to='/categories'>Categories</Link>
              </li>
              <li>
                <Link to='/categories'>Categories</Link>
              </li>
              <li>
                <Link to='/categories'>About</Link>
              </li>
              <li>
                <Link to='/categories'>Contact</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </header>
    <Divider style={{margin: 0}} />
  </div>
)

export default Header
