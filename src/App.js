
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import ReviewItems from './components/ReviewItem/ReviewItem';
import Inventory from './components/Inventory/Inventory';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<ReviewItems></ReviewItems>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/singin' element={<SingIn></SingIn>}></Route>
        <Route path='/singup' element={<SingUp></SingUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
