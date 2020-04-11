import React from 'react'
import Landing from '../../components/landing'
import Content from '../../components/content'
import { ABOUT_CONTENT, LANDING_CONTENT, PROFILE_CONTENT } from '../../libs/content'
import Profile from '../../components/profile'

import './style.scss'

const About = ({lang='EN'}) => (
    <React.Fragment>
        <main className='about-container'>
            <Landing title={LANDING_CONTENT[lang].TITLE} subTitle={LANDING_CONTENT[lang].SUB_TITLE}/>
            <div className='about-container_content'>
                <Profile name={PROFILE_CONTENT[lang].NAME} location={PROFILE_CONTENT[lang].LOCATION} workexp={PROFILE_CONTENT[lang].WORK_EXP} education={PROFILE_CONTENT[lang].EDUCATION} email={PROFILE_CONTENT[lang].EMAIL}/>
                <Content title={ABOUT_CONTENT[lang].TITLE} content={ABOUT_CONTENT[lang].CONTENT} />
            </div>
        </main>
    </React.Fragment>
)

export default About