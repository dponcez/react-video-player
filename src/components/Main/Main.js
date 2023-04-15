import React, { useState, createContext } from 'react'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import { Navigation } from '../Navigation/Navigation'
import { DarkMode } from '../DarkMode/DarkMode'
import darkMode from "../../assets/icons/dark-switch.png";
import lightMode from "../../assets/icons/light-switch.png";
import '../../styles/Main.scss'

const Main = () => {
  const [theme, setTheme] = useState('light')
  const ThemeContext = createContext(null)

  const toggleDarkMode = () => {
    setTheme((currentTheme) =>  currentTheme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeContext.Provider 
      value={{theme: toggleDarkMode}}
    >
      <div className='container' id={theme}>
        <div className='sub--container'>          
          <Navigation/>
          <DarkMode
            mode={
              theme === 'light' ?
              (<img src={darkMode} alt='dark mode button'/>) : 
              (<img src={lightMode} alt='light mode button'/>)
            }
            theme={theme}
            onClick={toggleDarkMode}
          />
        </div>
        <header className='header'>
          <h1 className='heading'>gema player</h1>
        </header>
        <VideoPlayer/>
      </div>
    </ThemeContext.Provider>
  )
}

export { Main }