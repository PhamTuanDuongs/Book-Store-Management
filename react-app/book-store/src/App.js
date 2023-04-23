import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import ListBook from './components/ListBook';
import ListBookByUser from './components/ListBookByUser';
import Login from './components/Login';
import ListBookByCategory from './components/ListBookByCategory';
import ListCategory from './components/ListCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListBook />}></Route>
        <Route path="/" element={<ListBook />}></Route>
        <Route path="/listBook" element={<ListBook />}></Route>
        <Route path="/listBookByCategory" element={<ListBookByCategory />}></Route>
        <Route path="/category" element={<ListCategory />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
