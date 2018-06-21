import React from 'react'
import { Row, Col } from '../layout-components/grid';
import arrowRight from '../assets/arrow-right.svg'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

class Categories extends React.Component{
    render(){
        const {data} = this.props
        return(
            <Row gutter={32} className="category__container">
                {
                    data.map((category)=>
                    <Col lg={12} xs={24} key={category.fieldValue}>
                        <Row className='category-item__container'>
                            <Col span={24}>
                                <Row className="category-item__heading">
                                    <Col span={18} className='category-item__title'>
                                        <h3>{category.fieldValue}</h3>
                                    </Col>
                                    <Col span={6}>
                                        <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
                                            <div className="category-item__link">
                                                <img src={arrowRight} alt="arrow-right"/>
                                                <span>All</span>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}></Col>
                        </Row>
                    </Col>
                )
                }
            </Row>
        )
    }
}

export default Categories