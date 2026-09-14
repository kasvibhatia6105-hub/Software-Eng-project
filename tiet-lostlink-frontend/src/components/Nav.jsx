import { NavLink } from 'react-router-dom'

export default function Nav({ user }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/feed" className="nav__brand" style={{ color: 'inherit' }}>
          <span className="nav__punch" />
          LostLink
        </NavLink>
        <nav className="nav__links">
          <NavLink to="/feed" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
            Feed
          </NavLink>
          <NavLink to="/report/lost" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
            Report lost
          </NavLink>
          <NavLink to="/report/found" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
            Report found
          </NavLink>
        </nav>
        <div className="nav__user">
          <span>{user.name}</span>
          <span className="nav__avatar">{user.initials}</span>
        </div>
      </div>
    </header>
  )
}
