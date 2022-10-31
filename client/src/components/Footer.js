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
            className="btn align-self-center btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      <div className="justify-content-center d-flex flex-row align-items-center">
        <div>
            <img style={styles.imageWidth} src={Logo} alt='app logo' />
        </div>
        <h4>&copy; {new Date().getFullYear()} - Lists</h4>
      </div>
    </footer>
  );
};
const styles= {
  imageWidth: {
    width: 150
  },
}

export default Footer;



