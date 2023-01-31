import './App.css';
import { useEffect } from 'react';
import Product from './Product';
import { Link } from "react-router-dom";
import logo from './cleanmessage3x.png';

function ProductPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
    <div className="Privacy-header">
      <img src={logo} alt="privacy" className='App-store-button' />
      <Product/>
    </div>

    <header className="App-footer">
      <Link  to={{pathname: '/'}}>Home</Link>
      <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
    </header>
  </div>
  );
}

export default ProductPage;