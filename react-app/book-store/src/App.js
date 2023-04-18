import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListBook from './components/ListBook';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<ListBook />}></Route>
        <Route path="/" element={<ListBook />}></Route>
        <Route path="/listBook" element={<ListBook />}></Route>
      </Routes>


    </BrowserRouter>
   


  );
}

export default App;
