import React, { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [current_user, setcurrentUser] = useState();

  const login = (username, password) => {
    fetch('https://libify-l.onrender.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire('Error', response.error, 'error');
        } else if (response.success) {
          const user = { username }; // Create a user object with the logged-in email (or other relevant user information)
          setcurrentUser(user); // Set the current user state
  
          // Post the user details to the server
          fetch('https://libify.onrender.com/current_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user })
          })
            .then((res) => res.json())
            .then((data) => {
              // Handle the response if needed
            })
            .catch((error) => {
              // Handle the error if needed
            });
  
          navigate('/');
          Swal.fire('Success', response.success, 'success');
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        Swal.fire('Error', 'Something went wrong', 'error');
      });
  };

  const register = (username, email, password) => {
    fetch('https://libify-l.onrender.com/users/adduser', {
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
          navigate('/login');
        } else {
          Swal.fire('Error', 'Something went wrong', 'error');
        }
        
      });
  };
  
  const logout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('https://libify-l.onrender.com/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
          .then((res) => res.json())
          .then((response) => {
            if (response.success) {
              setcurrentUser(null); // Clear the current user state
              Swal.fire('Success', 'Logout success', 'success').then(() => {
                navigate('/login'); // Redirect to the home page after successful logout
              });
            } else {
              Swal.fire('Error', response.error, 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error', 'Something went wrong', 'error');
          });
      }
    });
  };

  useEffect(() => {
    fetch('https://libify.onrender.com/current_user')
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setcurrentUser(data.user);
          navigate('/');
        }
      });
  }, [navigate]);

  const contextData = {
    login,
    register,
    logout,
    current_user
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}