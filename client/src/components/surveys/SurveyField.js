// Survey Field contains login to render single label and text input

import React from 'react';
//can also be written as (thanks for redux-form)
//export default (props) => {}
export default ({ input, label, meta }) => {
    
    return (
        <div>
            <label>{label}</label>
            <input  {...input} style={{marginBottom: '5px'}}/> 
            <div className='red-text' style={{marginBottom: '20px'}}>
                {meta.touched && meta.error}
            </div>
        </div>
    );
};