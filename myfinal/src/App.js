import './App.css';
import MyProfile from './component/MyProfile';
import {Link,Routes,Route} from 'react-router-dom'
import Dragons from './component/Dragons';
import Missions from './component/Missions';

function App() {
  return (
    <>
      <div className='navbar'>
        <h1>Space Traveller's Hub</h1>
        <ul>
          <Link className='item' to='/dragons' >Dragons</Link>
          <Link className='item' to='/missions' >Missions</Link>
          <Link className='item' to='/' >My Profile</Link>
        </ul>

      </div>

      <Routes>
        <Route path='/dragons' element={<Dragons/>} />
        <Route path='/missions' element={<Missions/>} />
        <Route path='/' element={<MyProfile/>} />
      </Routes>
    </>
  );
}

export default App;
