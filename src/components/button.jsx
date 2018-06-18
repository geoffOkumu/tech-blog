import React from 'react'
import classNames from 'classnames'

class Button extends React.Component{    
    render(){
        const {type, children, className, style, ...rest} = this.props;

        const classes = classNames({
            [`btn`]: !type,
            [`btn-${type}`]: type
        }, className)
        return(
            <button {...rest} style={style} className={classes}>{children}</button>
        )
    }
}

export default Button