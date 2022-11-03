import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../img/loo.png';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 justify-content-center d-flex flex-column text-dark">
      {location.pathname !== '/' && (
          <button
            className="btn align-self-center m-2 btn-dark "
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      <div className="justify-content-center  text-bg-secondary d-flex flex-row align-items-center">
            <img style={styles.imageWidth} src={Logo} alt='app logo' />
        <h4>&copy; {new Date().getFullYear()} - TO DO LIST APP</h4>
      </div>
    </footer>
  );
};
const styles= {
  imageWidth: {
    width: 60,
    margin: 7
  },
}

export default Footer;



