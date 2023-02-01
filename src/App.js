import './App.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './LandingPage';
import ProductPage from './ProductPage';
import RedirectPage from './RedirectPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cleanmessage" element={<ProductPage />} />
          <Route path="/cleanmessage/download" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
