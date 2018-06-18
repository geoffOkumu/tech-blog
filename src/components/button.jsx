import React from 'react'
import classNames from 'classnames'

/**
 * Button class
 * @param {string} type button color variation either primary or secondary
 * @param {string} variant button variation either outline or default
 * @param {string} size button size either large or small
 */
class Button extends React.Component{    
    render(){
        const {type, variant, size, children, className, style, ...rest} = this.props;

        const classes = classNames({
            [`btn-${type}`]: type,
            [`btn-${variant}__primary`]: variant,
            [`btn-${size}`]: size,
        }, className, 'btn')
        return(
            <button {...rest} style={style} className={classes}>{children}</button>
        )
    }
}

export default Button