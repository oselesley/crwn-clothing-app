import React from 'react'

import './button.styles.scss'

export const Button = ({text, color, ...otherProps}) => (
    <button className={`${color ? 'blue' : color} button`} {...otherProps} >
        {text}
    </button>
) 