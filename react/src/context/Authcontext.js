import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const nav = useNavigate();
  const [onChange, setOnChange] = useState(false);
  const [current_user, setCurrentUser] = useState();

  // Login
  const login = (username, password) => {
    fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((response) => {

        console.log(response)

        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          nav('/');
          Swal.fire('Success', response.success, 'success');
          setOnChange(!onChange);
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
        
        
      });
  };

  // Register
  const register = (username, email, password) => {
    fetch('/users/adduser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          Swal.fire('Success', response.success, 'success');
          nav('/login');
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
        
      });
  };

  // Logout
  const logout = () => {
    fetch('/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((response) => {
        Swal.fire('Success', 'Logout success', 'success');
        nav('/login');
        setCurrentUser(null);
        setOnChange(!onChange);
      });
  };

  // Fetch current user
  
  useEffect(() => {
    fetch('/current_user', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.user) {
          setCurrentUser(response.user);
        }
      });
  }, [onChange]);

  const contextData = {
    login,
    register,
    logout,
    current_user
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
}