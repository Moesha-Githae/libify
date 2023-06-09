
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';

function NavBar() {
  const { current_user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          <img width="50" height="50" src="https://img.icons8.com/bubbles/50/books.png" alt="books" />
          Libify
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {current_user ?
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/books" className="nav-link" >Books</Link>
                </li>
                <li className="nav-item">
                  <Link to="/reviews" className="nav-link" >Review</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/profile" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/profile" className="dropdown-item"><img src="https://img.icons8.com/color-glass/48/test-account.png" alt="profile-icon" />{current_user.username}</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                    <li><a className="dropdown-item" onClick={() => logout()}>Logout</a></li>
                  </ul>
                </li>
              </> :
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link" >Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link btn btn-lg btn-success" >Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link btn btn-lg btn-success" >Register</Link>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;