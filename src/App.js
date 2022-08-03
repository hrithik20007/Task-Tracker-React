import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import App2 from './App2'

const App = () => {

  return(
    <Router>
        <Routes>
            <Route path='/' element={<App2 />}/>
            <Route path='/About' element={<About />}/>
        </Routes>
    </Router>
  )
}


export default App;