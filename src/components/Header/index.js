// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="ul">
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
