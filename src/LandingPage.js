import logo from './leaveylabs-icebear-clear.png';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h4></h4>        <h4></h4>
        <h4></h4>

        <img src={logo} alt="leavey labs logo" className='App-logo'/>
        <p>
        Apps for Social Good
        </p>

        <h4></h4>
      </header>

      <header className="App-footer">
        {/* <Link  to={{pathname: '/cleanmessage'}}>Clean Message</Link> */}
        <a href="https://github.com/LeaveyLabs" target="_blank" rel="noopener noreferrer" >Github</a>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >Contact</a>
      </header>
    </div>
  );
}

export default LandingPage;
