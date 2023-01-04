import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './modules/Home'
import List from './modules/List';
function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path ='/' element={<Home/>}/>
            <Route exact path='/hotels' element={<List/>}/>
          </Routes>
        </Router>
      
  );
}

export default App;
