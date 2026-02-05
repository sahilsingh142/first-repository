import { Routes, Route} from 'react-router';
import Home from './Routes/Home';
import FirstTemp from './Template/FirstTemp';
import Login from './Authentication/Login';
import Register from './Authentication/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FirstTemp' element={<FirstTemp/>} />
        <Route path='RegisterPage' element={<Register/>}/>
        <Route path='/LoginPage' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
