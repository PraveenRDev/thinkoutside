import React from 'react'

import './style.scss';
const Content = ({content, title=null}) => (
    <section className='content-container'>
        {title && <h1 className='content-title'>{title}</h1>}
        <p className='content-content'>{content}</p>
    </section>
) 

export default Content