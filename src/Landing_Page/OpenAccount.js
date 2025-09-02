import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const nevigate =useNavigate();
  const handleSignupClick = () => {
    nevigate('/signup')
   
  };

  return (
    <div className='container p-5 mb-5'>
           <div className='row text-center'>
             
               <h1 className=''>Invest in every thing</h1>
               <p>Online platform to invest in stocks , derivatives ,mutual funds , Make your future better with us </p>
               <button 
                 className='p-3 btn btn-primary' 
                 style={{width:"20%" , margin: "0 auto"}}
                 onClick={handleSignupClick}
               >
                 Signup Now
               </button>
           </div>
           
        </div>
  );
}

export default OpenAccount;