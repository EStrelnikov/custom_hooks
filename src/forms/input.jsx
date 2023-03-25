import React from 'react';

export const Input = ({type='text', value='',onChange, name="", label="",placeholder, at, defaultChecked}) => {
    return (
        <div className='custom_input'>
            <div className='custom_input_label'>{label}</div>
            <div className='custom_input_block'>
                {at ? <div className='custom_input_icon'>@</div> : ''}
                <input className={`custom_input_input${ at === 'true' && type === 'text' ? '_icon' : '' }`} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} defaultChecked={defaultChecked}/>
            </div>
        </div>
    )
}