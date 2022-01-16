import logo from './logo.svg';
import './styles/styles.css';
import Index from './pages';
import Contactame from './pages/contactame';
import Academic from './pages/academic';
import Work from './pages/work';
import Hobbies from './pages/hobbies';
import Certificate from './pages/certificate';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/contactame' element={<Contactame/>}/>
          <Route path='/academic' element={<Academic/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/hobbies' element={<Hobbies/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
