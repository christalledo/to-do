import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';
import Logo from '../img/loo.png';
import { isNetworkRequestInFlight } from '@apollo/client/core/networkStatus';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (

      <div className="bg-info text-dark h-100px mb-4 py-3 display-flex align-center">
       
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">

          <img style={styles.imageWidth} src={Logo} alt='app logo' />
        
          <h1 className="m-0" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            TO Do
          </h1>

        <p className="m-0" style={{ fontSize: '1rem', fontWeight: '700' }}>
          Getting things Done
        </p>
        <div>
          {Auth.loggedIn() ? (
            <>
              <button className="btn btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn  btn-primary m-2" to="/">
                Login
              </Link>
              <Link className="btn btn-light m-2" to="/">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>

    </div>

  );
};

const styles= {
  imageWidth: {
    width: 60,
    display: "flex",
    align: "right"
  },
}


export default Header;
