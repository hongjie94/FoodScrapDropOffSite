import './App.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Locations from './components/Locations/Locations.jsx';
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/location' element={<Locations />}/>
    </Routes>
  )
}

export default App
