import React from 'react';

import './../../styles/components/header/style.scss'

const Header = () => (
    <header className='header'>
        <div className='header__container'>
            <section className='header__container-intro'>
                <h1 className='header__container-intro-name'>Praveen. R</h1>
                <p className='header__container-intro-title'>Web Developer & Software Engineer</p>
            </section>
            <section className='header__container-breif'>
                {/* <h2 className='header__container-breif-quote'>
                    Elavate your business or build your ideas with enterprise standard full stack web applications
                </h2> */}
            </section>
        </div>
    </header>
)

export default Header;