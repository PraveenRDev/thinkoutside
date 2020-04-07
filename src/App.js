import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import About from './pages/about'
import Navigation from './components/navigation'
const App = () => {

    const [lang, setLang] = useState('EN')

    return(
        <div>
            <React.Fragment>
                <Route exact path='/' render={() => <About lang={lang}/>}></Route>
            </React.Fragment>
            <Navigation lang={lang} handleLanguage={() => setLang(lang==='EN' ? 'FR' : 'EN')}/>
       </div>
    )

}

export default App