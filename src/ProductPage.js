import './App.css';
import { useEffect, useState } from 'react';
import Product from './Product';
import { Link } from "react-router-dom";
import logo from './cleanmessage3x.png';
import appstoreicon from './download-on-appstore.svg';
import ss1 from './5.5ss-1.jpg';
import ss2 from './5.5ss-2.jpg';
import ss3 from './5.5ss-3.jpg';

import { useLocation } from 'react-router-dom'

function ProductPage() {
  const [isPrivacyPolicyVisible, setIsPrivacyPolicyVisible] = useState(true);
  let pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
    <div className="Privacy-header">
    <div style={{}}>
      <img src={ss1} alt="app screenshot 1" className='App-store-button' />
      <img src={ss2} alt="app screenshot 2" className='App-store-button' />
      <img src={ss3} alt="app screenshot 3" className='App-store-button' />
    </div>
      <img src={logo} alt="app logo" className='App-store-button' />
      <Link  to={{pathname: `${pathname}/download`}}>
        <img src={appstoreicon} alt="appstorebutton" className='App-store-button' />
      </Link>
      {/* <button onClick={setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible)}>
        {/* <div>
          asdf
        </div>
        Privacy Policy */}
      {/* </button> */}

      <button onClick={() => setIsPrivacyPolicyVisible(!isPrivacyPolicyVisible)}> 
        Privacy Policy
      </button>

      { isPrivacyPolicyVisible ? <Product/> : <div/> }
      
    </div>

    <header className="App-footer">
      <Link  to={{pathname: '/'}}>Home</Link>
      <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
    </header>
  </div>
  );
}

export default ProductPage;