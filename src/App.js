import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appoinments/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appoinments' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
