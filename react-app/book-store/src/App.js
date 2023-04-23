import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListBook from './components/ListBook';
import ListBookByUser from './components/ListBookByUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListBook />}></Route>
        <Route path="/" element={<ListBook />}></Route>
        <Route path="/listBook" element={<ListBook />}></Route>
        <Route path="/listBookByUser" element={<ListBookByUser />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
