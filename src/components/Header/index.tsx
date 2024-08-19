import { Timer, Scroll } from 'phosphor-react'
import logoIcon from '../../assets/logoIcon.svg'
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIcon} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} alt="icon of a stopwatch" />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll
            size={24}
            alt="icon of a page with some lines representing the history"
          />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
