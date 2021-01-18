import React from 'react'

import './form-field.styles.scss'

export const FormField = ({label, handleChange, ...otherProps}) => (
    <div className='form-field'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label 
            ? (<label 
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                htmlFor={otherProps.name}>{label.toUpperCase()}
                </label>
                )
            : null
        }
    </div>
)