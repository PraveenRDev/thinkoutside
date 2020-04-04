import React from 'react';

import './../../styles/components/header/style.scss'

const Header = () => (
    <header className='header'>
        <div className='header__container'>
            <div className='header__container-curve'> 
                <div className='header__container-intro-wrapper'>
                    <section className='header__container-intro'>
                            <h1 className='header__container-intro-name'>Praveen. R</h1>
                            <p className='header__container-intro-title'>Web Developer & Software Engineer</p>
                    </section>
                </div>
            </div>
            <div className=''>
                <section className='header__container-brief'>
                    <div className='header__container-brief__about'>
                        <h2 className='header__container-brief__about-title page-title'>About me</h2>
                        {/* <div className='header__container-brief__about-image'></div> */}
                    </div>
                    <p className='header__container-brief__about-description'>
                        I am a fullstack web developer with strong technical skills, logical thinking, complex problem solving abilities and just over 2 years of professional experience. I've been passionate about technologies since childhood and built my first website at the age of 13, from then my interest for developing user friendly web applications with powerful features by intergrating latest technologies kept on expanding. My skills along with the dedication and hardwork resulted in continous success to the company.
                    </p>
                </section>
                <section className='header__container-quote'>
                    <h3 className='header__container-quote-line'><span className='highlight'>Think Outside</span> Creativity has no Limitations</h3>
                </section>
            </div>
        </div>
    </header>
)

export default Header;