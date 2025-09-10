import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='https://zerodha.com/static/images/ecosystem.png' alt='Largest'/>
                </div>
                
                <div className='col-6 p-5'>
    <h1 className='mt-3' >Largest stock broker in India</h1>
    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
    <div className='row'>
        <div className='col-6'>
            <ul>
                <li>
                    <p>Future and Options</p>
                </li>
                <li>
                    <p>Comodity derivatives</p>
                </li>
                <li>
                    <p>Currency derivatives</p>
                </li>
            </ul>
             
        </div>
        <div className='col-6'> <ul>
                <li>
                    <p>Stock & IPOs</p>
                </li>
                <li>
                    <p>Direct Mutualfunds</p>
                </li>
                <li>
                    <p>Bonds and Govt. securities </p>
                   

                </li>
            </ul>
            </div>
                 <img src='/media/Image/pressLogos.png' alt='PressLogo' style={{width:"90%"}}/>
    </div>
</div>

            </div>

        </div>
    );
}

export default Awards;