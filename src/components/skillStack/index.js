import React from 'react'

import { SKILL_DISPLAY_TYPE } from './../../libs/constants'
import { TECH_SKILL_LEVEL } from './../../libs/content'

import './style.scss'

const SkillStack = ({title, skills, type=SKILL_DISPLAY_TYPE.NORMAL, content, lang='EN'}) => (
        <section className='skill-stack_container'>
            <h1 className='skill-stack_title'>{title}</h1>
            {type === SKILL_DISPLAY_TYPE.NORMAL && <ul className='skill-stack_content'>
                { skills && skills.length > 0 && skills.map((skill, i) => <li className='skill-stack_content-group' key={'normal'+i}> <Skill skill={skill} type={type}/> </li> ) }
            </ul>}
            {type === SKILL_DISPLAY_TYPE.BULLET && skills.map((skill, i) => (
                <div className='skill-stack_bullet'>
                    <h2 key={'subTitle'+i} className='skill-stack_subTitle'>{skill[lang]}</h2>
                    <ul className='skill-stack_content-bullet' key={'skillset'+i}>
                        {skill.SKILLS.map((skill, j) => <li className='skill-stack_content-bullet_group' key={'skill'+j+i}> <Skill skill={skill} type={type}/> </li> )}
                    </ul>
                </div>
            ))}
           {content && content.length > 0 && <p className='skill-stack_brief'>{content}</p>}
        </section>
    )

const Skill = ({ skill, type }) => (
    <React.Fragment>
        {type === SKILL_DISPLAY_TYPE.NORMAL && <div className='skill-stack_content-title'>{skill.charAt(0)}</div>}
        {type === SKILL_DISPLAY_TYPE.BULLET && <div className='skill-stack_content-bullet_item'><span className={TECH_SKILL_LEVEL[skill]}><ion-icon name="star"></ion-icon></span> {skill}</div>}
        {/* <div className='skill-stack_content-description'>{skill}</div> */}
    </React.Fragment>
)

export default SkillStack
