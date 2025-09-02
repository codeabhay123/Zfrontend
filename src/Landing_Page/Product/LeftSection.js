import React from 'react';

function LeftSection({
  imageURL,
  productName,
  productDescription,  
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-bottom mb-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <img src={imageURL} alt="product" className="img-fluid" />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a href={tryDemo} style={{textDecoration:"none"}}> Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore}  style={{marginLeft:"50px" ,textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <br /><br />

          <div className='mt-2'> 
            <a href={googlePlay}>
            <img src="media/image/googlePlayBadge.svg" alt="Google Play" />
          </a>
          <a href={appStore} className="ms-2">
            <img src="media/image/appstoreBadge.svg" alt="App Store" style={{marginLeft:"50px"}} />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
