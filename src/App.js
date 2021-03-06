import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'

import About from './pages/about'
import Navigation from './components/navigation'
import Skills from './pages/skills'

import { CV_URL } from './libs/constants'
import { BANNER_TEXT } from './libs/content'

const App = () => {

    const [lang, setLang] = useState('EN')

    useEffect(() => {
        const language = localStorage.getItem('language')
        if(language) setLang(language)
        else {
            setLang('EN')
            localStorage.setItem('language', 'EN')
        }
    }, [])

    useEffect(() => localStorage.setItem('language', lang),[lang])
    
    return(
        <div>
            <div className='portfolio-download' onClick={() => window.open(CV_URL, 'prav.pdf', "download=yes")}>
                <h3 className='portfolio-text'>{BANNER_TEXT[lang]}</h3>
                <ion-icon className='portfolio-icon' name="cloud-download-outline"></ion-icon>
            </div>
            <React.Fragment>
                <Route exact path='/' render={() => <About lang={lang}/>}></Route>
                <Route exact path='/skills' render={() => <Skills lang={lang}/>}></Route>
            </React.Fragment>
            <Navigation lang={lang} handleLanguage={() => setLang(lang==='EN' ? 'FR' : 'EN')}/>
       </div>
    )

}

export default App