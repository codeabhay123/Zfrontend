import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const nevigate =useNavigate();
  const handleSignupClick = () => {
   nevigate('/signup')
  };

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="fs-2 fw-normal mb-3" style={{ color: "#424242" }}>
            The Zerodha Universe
          </h1>
          <p className="fs-5 text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Partner Platforms Grid */}
      <div className="row text-center">
        {/* Zerodha Fund House */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/zerodhafund.png" 
              alt="Zerodha Fund House" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
            </p>
          </div>
        </div>

        {/* Sensibull */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/semsibull.png" 
              alt="Sensibull" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
            </p>
          </div>
        </div>

        {/* Tijori */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/tijori.png" 
              alt="Tijori" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/streak.png" 
              alt="Streak" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Systematic trading platform that allows you to create and backtest strategies without coding.
            </p>
          </div>
        </div>

        {/* Smallcase */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/smallcaseLogo.png" 
              alt="Smallcase" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
            </p>
          </div>
        </div>

        {/* Ditto */}
        <div className="col-md-4 p-4 mb-4">
          <div className="h-100 d-flex flex-column align-items-center">
            <img 
              src="media/image/ditto (2).png" 
              alt="Ditto" 
              style={{ height: "60px", marginBottom: "20px" }}
            />
            <p className="text-muted small" style={{ lineHeight: "1.6", fontSize: "14px" }}>
              Personalized advice on life and health insurance. No spam and no mis-selling.
            </p>
          </div>
        </div>
      </div>

      {/* Signup Button */}
      <div className="row mt-4 mb-5">
        <div className="col-12 text-center">
          <button
            className="btn btn-primary px-4 py-2 fs-6 fw-normal"
            style={{ 
              backgroundColor: "#387ed1",
              border: "none",
              borderRadius: "3px",
              minWidth: "150px"
            }}
            onClick={handleSignupClick}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;