import React from 'react'
import { Link } from '@reach/router'
import Logo from '../assets/images/brand_assets/brand-book-logo.png'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : ''
      }
    }}
  />
)

const Navigation = () => {
  return (
    <header className='flex-wrap-sm'>
      <div className='brand'>
        <Link to={`/${process.env.REACT_APP_BASE_URL}`}>
          <img className='logo' src={Logo} alt='' />
        </Link>
      </div>
      <nav>
        <NavLink to={`/${process.env.REACT_APP_BASE_URL}`}>Vision</NavLink>
        <NavLink to={`/${process.env.REACT_APP_BASE_URL}BrandBook`}>
          Brand assets
        </NavLink>
        <NavLink to={`/${process.env.REACT_APP_BASE_URL}ContributingGuide`}>
          How to contribute
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation
