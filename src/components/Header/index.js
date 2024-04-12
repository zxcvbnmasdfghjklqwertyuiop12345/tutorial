import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="bgHeader">
      <div className="headerSm">
        <Link className="headerLinks" to="/">
          <button type="button" className="headerLogoBtn">
            <img
              className="headerLogo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </button>
        </Link>
        <ul className="smTabsUl">
          <li className="smTabLi">
            <Link className="headerLinks" to="/">
              <AiFillHome className="smIcon" />
            </Link>
          </li>
          <li className="smTabLi">
            <Link className="headerLinks" to="/jobs">
              <PiBagSimpleFill className="smIcon" />
            </Link>
          </li>
          <li className="smTabLi">
            <button
              onClick={onClickLogout}
              type="button"
              className="smLogoutBtn"
            >
              <FiLogOut className="smIcon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="headerLg">
        <Link className="headerLinks" to="/">
          <button type="button" className="headerLogoBtn">
            <img
              className="headerLogo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            />
          </button>
        </Link>
        <ul className="lgTabsUl">
          <Link className="headerLinks" to="/">
            <li className="lgTabLi">Home</li>
          </Link>
          <Link className="headerLinks" to="/jobs">
            <li className="lgTabLi">Jobs</li>
          </Link>
        </ul>
        <button onClick={onClickLogout} type="button" className="lgLogoutBtn">
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
