import logo from './logo.svg';
import './styles/styles.css';
import Index from './pages';
import Contactame from './pages/contactame';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/contactame' element={<Contactame/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
