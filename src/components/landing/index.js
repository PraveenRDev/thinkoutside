import React from 'react'
import './style.scss';
const Landing = ({title, subTitle}) => (
    <header className='landing'>
        {/* <img src={logo_iso}></img> */}
        {/* <img src={logo_default}></img> */}
        <div className='landing__image-wrapper'><div className='landing__image'></div></div>
        <div className='landing__content-container'>
              <h1 className='landing__content-title'>{title}</h1>
              <h2 className='landing__content-subTitle'>{subTitle}</h2>
        </div>
    </header>
) 

export default Landing