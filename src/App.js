import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import LandingPage from '../src/Shared/LandingPage/Pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
