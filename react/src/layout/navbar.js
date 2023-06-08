import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { AuthContext } from '../context/Authcontext';
import '../css/navbar.css';

export default function Navbar() {
  const { current_user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    // Additional logic if needed
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/reviews">Reviews</Link>
        <Dropdown show={showDropdown} onToggle={handleDropdownToggle}>
          <Dropdown.Toggle as={Link} to="/profile" id="profile-dropdown">
            Profile
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {current_user ? (
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            ) : (
              <>
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/register">
                  Register
                </Dropdown.Item>
              </>
            )}
            {/* Additional dropdown items if needed */}
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}