import logo from './logo.svg';
import './App.css';
import Kla from "./pages/kla"
import { useSearchParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/kla' element={<Kla/>}></Route>
      </Routes>   
    </BrowserRouter>

  //   <div className="App">
  //   <h1>KLA資料打包</h1>
  //   <Kla />
  // </div>
   
  );
}

export default App;
