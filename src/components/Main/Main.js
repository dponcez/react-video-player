import React, { useContext } from 'react'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import { Navigation } from '../Navigation/Navigation'
import { DarkMode } from '../DarkMode/DarkMode'
import { ThemeContext } from '../Context/Context'
import darkMode from "../../assets/icons/dark-switch.png";
import lightMode from "../../assets/icons/light-switch.png";
import { video_data } from '../../assets/data/video_data'
import '../../styles/Main.scss'

const Main = () => {
  const [{theme}, toggleDarkMode] = useContext(ThemeContext)
  
  return (
    <div className='container'>
      <DarkMode
        mode={
          theme === 'dark' ?
          (<img src={lightMode} alt='light mode button'/>) : 
          (<img src={darkMode} alt='dark mode button'/>)
        }
        theme={theme}
        onClick={toggleDarkMode}
      />
      <div className='sub--container'>          
        <Navigation/>
      </div>
      <header className='header'>
        <h1 className='heading'>gema player</h1>
      </header>
      <VideoPlayer/>
    </div>
  )
}

export { Main }