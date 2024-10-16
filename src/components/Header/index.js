import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.linkedin.com/in/akshaya-kumar-m" target="_blank">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
