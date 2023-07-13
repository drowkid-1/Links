import React from 'react'
import SunIcon from './Icons/SunIcon'
import MoonIcon from './Icons/MoonIcon'
import avatar from '../assets/avatar.jpeg'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import { ThemeType } from '../ts/types';

function Header(): JSX.Element {
  const dataTheme = document.body.getAttribute('data-theme');
  const [theme, setTheme] = React.useState<ThemeType>((): ThemeType => dataTheme === "light" ? "light" : 'dark');

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const isDark = theme === 'dark'

  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src={avatar} alt="avatar" className="Header__avatar" />

        <div className="Header__inner2">
          <h2><b>YOUR Name</b></h2>
          <p>
            <a href="https://www.twitch.tv/vizzillionaire">
            <img src="https://img.icons8.com/fluency/48/null/twitch.png" alt="twitch" height={'20px'}/>
            </a>
            <a href="https://discord.gg/7m5PzFxzM5">
            <img src="https://img.icons8.com/color/48/null/discord--v2.png" alt="discord" height={'20px'}/>
            </a>
            <a href="https://kick.com/vizzillionaire">
            <img src="/kick.png" alt='' height={'20px'}/>
            </a>
          </p>
        </div>
      </div>

      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <SunIcon color="white" /> : <MoonIcon  />}
      </button>
    </div>
  )
}

export default Header
