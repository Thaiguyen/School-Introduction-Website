import { Routes, Route,  } from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Dangkykhoahoc from './component/Dangkykhoahoc';
import AnNinhMang from './component/AnNinhMang';
import PhatTrienPhanMem from './component/PhatTrienPhanMem';
import ThietKeDoHoa from './component/ThietKeDoHoa';
import CEH from './component/CEH';
import AWS from './component/AWS';
import NotFound from './component/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Dangkykhoahoc' element={<Dangkykhoahoc/>} />
        <Route path='/AnNinhMang' element={<AnNinhMang/>} />
        <Route path='/PhatTrienPhanMem' element= {<PhatTrienPhanMem/>} />
        <Route path='/ThietKeDoHoa' element= {<ThietKeDoHoa/>} />
        <Route path='/CEH' element= {<CEH/>} />
        <Route path='/AWS' element= {<AWS/>} />
        <Route path='/NotFound' element= {<NotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
