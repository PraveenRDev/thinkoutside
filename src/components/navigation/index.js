import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { NAVIGATION } from './../../libs/constants'
import { NAVIGATION_CONTENT } from './../../libs/content'

import './style.scss'

const Navigation = ({location, lang='EN', handleLanguage}) => {

    const [page, setPage] = useState(NAVIGATION.ABOUT_ME)

    useEffect(() => {
        const { pathname } = location
        if(pathname === '/'){
            setPage(NAVIGATION.ABOUT_ME)
        } else if(pathname === '/skills'){
            setPage(NAVIGATION.SKILLS)
        } else if(pathname === '/showcase'){
            setPage(NAVIGATION.SHOWCASE)
        } else if(pathname === '/contact'){
            setPage(NAVIGATION.CONTACT)
        }
    }, [location])
    
    return(
        <nav className='navigation-wrapper'>
            <div className='navigation-logo'></div>
            <div className='navigation-content'> 
                <div className='navigation-group'>
                    <div onClick={handleLanguage} className='navigation-icon lang'>{lang === 'EN' ? 'FR' : 'EN'}</div>
                    {/* <div className='navigation-text'>{NAVIGATION_CONTENT[lang].LANGUAGE}</div> */}
                </div>
                <div className='navigation-group'>
                    <Link to='/' className={`navigation-icon ${page === NAVIGATION.ABOUT_ME ? 'highlight' : ''}`}><ion-icon name="person-circle"></ion-icon></Link>
                    <Link to='/' className={`navigation-text ${page === NAVIGATION.ABOUT_ME ? 'highlight' : ''}`}>{NAVIGATION_CONTENT[lang].ME}</Link>
                </div>
                <div className='navigation-group'>
                    <Link to='/skills' className={`navigation-icon ${page === NAVIGATION.SKILLS ? 'highlight' : ''}`}><ion-icon name="trophy"></ion-icon></Link>
                    <Link to='/skills' className={`navigation-text ${page === NAVIGATION.SKILLS ? 'highlight' : ''}`}>{NAVIGATION_CONTENT[lang].SKILLS}</Link>
                </div>
                <div  className='navigation-group'>
                    <Link to='/showcase' className={`navigation-icon ${page === NAVIGATION.SHOWCASE ? 'highlight' : ''}`}><ion-icon name="library"></ion-icon></Link>
                    <Link to='/showcase' className={`navigation-text ${page === NAVIGATION.SHOWCASE ? 'highlight' : ''}`}>{NAVIGATION_CONTENT[lang].SHOWCASE}</Link>
                </div>
                <div  className='navigation-group'>
                    <Link to='/contact' className={`navigation-icon ${page === NAVIGATION.CONTACT ? 'highlight' : ''}`}><ion-icon name="chatbubbles"></ion-icon></Link>
                    <Link to='/contact' className={`navigation-text ${page === NAVIGATION.CONTACT ? 'highlight' : ''}`}>{NAVIGATION_CONTENT[lang].CONTACT}</Link>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);