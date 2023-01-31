import appstorebutton from './download-on-appstore-borderless.png';
import logo from './leaveylabs-icebear.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h4></h4>        <h4></h4>
        <h4></h4>

        <img src={logo} alt="people n dots" className='App-logo'/>
       
        <h6>
          Technology for Social Good
        </h6>

        <h4></h4>
      </header>

      <header className="App-footer">
        <Link  to={{pathname: '/faq'}}>Clean Message</Link>
        <a href="https://github.com/LeaveyLabs" target="_blank" rel="noopener noreferrer" >Github</a>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
      </header>
    </div>
  );
}

export default LandingPage;
