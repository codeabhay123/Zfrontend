import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate(); // ✅ Hook inside component

  const handleSignupClick = () => {
    navigate('/signup'); // ✅ Trigger navigation on click
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/Image/homeHero.png" alt="Hero" className="mb-5" />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds.  
          Make your future better with us.
        </p>
        <button
          className="p-3 btn btn-primary"
          style={{ width: '20%', margin: '0 auto' }}
          onClick={handleSignupClick} // ✅ Proper handler
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
