import React from 'react'
import '../../styles/NavMenu.scss'

const Navigation = () => {
  const navMenu = ['home', 'about', 'history', 'contact']
  return (
    <div className="Nav">
      <ul className="Nav--menu">
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[0]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[1]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[2]}
          </a>
        </li>
        <li className="Nav--menu__list">
          <a className="Nav--menu__link" href="#">
            {navMenu[3]}
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Navigation }