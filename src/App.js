import logo from './logo.svg';
import './App.css';
import All from './All';
import Home from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Instant from './Instant';
import Learn from './Learn';
import Log from './Log';
import Start from './Start';
import Buy from './Buy'
import Sell from './Sell'
import Indivudual from './Individual';
import Business from './Business';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route index element={<Home/>}/>/
       <Route path='Instant' element={<Instant/>}/>
       <Route path='Buy' element={<Buy/>}/>
       <Route path='Sell' element={<Sell/>}/>
       <Route path='Learn' element={<Learn/>}/>
       <Route path='Log' element={<Log/>}/>
       <Route path='Start' element={<Start/>}/>
       <Route path='Individual' element={<Indivudual/>}/>
       <Route path='Business' element={<Business/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
