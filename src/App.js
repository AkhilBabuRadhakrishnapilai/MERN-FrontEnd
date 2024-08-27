import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import LandingPage from '../src/Shared/LandingPage/Pages/LandingPage';
import LoginPage from './Shared/User/login/LoginPage';
import DashPage from '../src/Admin/Dashboard/Pages/DashPage';
import Signup from '../src/Shared/User/Signup/Signup';
import signupContext from './Shared/Context/signupContext';
import Sample from '../src/Admin/Dashboard/Pages/sample';
import FlightList from './Admin/Flights/Components/ListOfFlights/FlightList';
import EditFlights from './Admin/Flights/Components/EditFlights/EditFlights';
import EditRoutes from './Admin/Routes/Components/EditRoutes/EditRoutes';
import Flight from './Admin/Flights/Pages/Flight';
import RoutesList from './Admin/Routes/Components/ListRoutes/RoutesList';
import AddRoutes from './Admin/Routes/Components/AddRoutes/AddRoutes';
import FlightRoutes from './Admin/Routes/Pages/FlightRoutes';
import TripPage from './Admin/TripDetails/Pages/TripPage';
import TicketPage from './Admin/Tickets/Pages/TicketPage';


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/users/login' element={<LoginPage/>}></Route>
        <Route path='/users/signup' element={<Signup/>}></Route>
        <Route path='/users/dashboard' element={<DashPage/>}></Route>

        <Route path='/flights/add' element={<Flight/>}></Route>
        <Route path='/flights/list' element={<FlightList/>}></Route>
        <Route path='/flights/update/:id' element={<EditFlights/>}></Route>

        <Route path='/routes/add' element={<FlightRoutes/>}></Route>
        <Route path='/routes/update/:id' element={<EditRoutes/>}></Route>
        <Route path='/routes/list' element={<RoutesList/>}></Route>

        <Route path='/trips' element={<TripPage/>}></Route>

        <Route path='/tickets' element={<TicketPage/>}></Route>
        
        
        <Route path='/sample' element={<Sample/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
