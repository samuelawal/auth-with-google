import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Signin from './pages/Signin'
import {AuthContextProvider} from './context/AuthContext'
import Account from './pages/Account';
import Middleware from './components/Middleware';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/account' element={<Middleware><Account/></Middleware>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
