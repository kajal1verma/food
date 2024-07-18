// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import './App.css'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Success from './pages/Success.jsx'
import Menu from './components/Menu.jsx'
const App = () =>
  {
  // const [count, setCount] = useState(0)

  return   <Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/success' element={<Success/>}/>
{/* <Route path='/Menu' element={<Menu/>}/> */}

</Routes>
<Toaster/>
  </Router>
  
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    
}

export default App
 