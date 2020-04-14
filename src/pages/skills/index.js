import React from 'react'
import SkillStack from '../../components/skillStack'

import {SKILL_TYPE, SKILL_SET, MERN_STACK, MERN_STACK_BRIEF} from './../../libs/content'
import {SKILL_TYPES} from './../../libs/constants'

import './style.scss'

const Skills = ({lang='EN'}) => (
    <React.Fragment>
        <section className='skills-container'>
            <SkillStack title={SKILL_TYPE[SKILL_TYPES.AREA_OF_EXPERTISE][lang]} type={1} skills={MERN_STACK} content={MERN_STACK_BRIEF[lang]} lang={lang}/>
            <SkillStack title={SKILL_TYPE[SKILL_TYPES.TECH_PROFICIENCY][lang]} type={2} skills={SKILL_SET} lang={lang}/>
        </section>
    </React.Fragment>
)

export default Skills