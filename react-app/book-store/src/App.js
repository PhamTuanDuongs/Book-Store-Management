import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListBook from './components/BookDetail/ListBook';
import ListBookByUser from './components/BookDetail/ListBookByUser';
import Login from './components/Login/Login';
import ListBookByCategory from './components/BookDetail/ListBookByCategory';
import Home from './components/Home/Home';
import ListCategory from './components/BookDetail/ListCategory';
import Profile from './components/User/Profile';
import BookByBookId from './components/BookDetail/BookByBookId';
import ListUsers from './components/SuperAdmin/ListUsers'
import AccountSetting from './components/Account/AccountSetting'
import AccountRegister from './components/Account/AccountRegister'
import AddBook from './components/AddBook/AddBook';
function App() {
  const userRole = JSON.parse(sessionStorage.getItem('role'));
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/register" element={<AccountRegister />} />
        <Route path="/add" element={<AccountRegister />} />
        <Route path="/listBookByCategory" element={<ListBookByCategory />} />
        <Route path="/bookdetail" element={<BookByBookId />} />
        {userRole === 'Super Admin' && (
          <>
            <Route path="/admin/book" element={<ListBook />} />
            <Route path="/book/view" element={<ListBookByUser />} />
            <Route path="/listBookByCategory" element={<ListBookByCategory />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/admin/user" element={<ListUsers />} />
            <Route path="/user/setting" element={<AccountSetting />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/bookdetail" element={<BookByBookId />} />
            <Route path="/book/add" element={<AddBook />} />


          </>
        )}
        {userRole === 'Admin' && (
          <>
            <Route path="/bookdetail" element={<BookByBookId />} />
            <Route path="/admin/book" element={<ListBook />} />
            <Route path="/book/view" element={<ListBookByUser />} />
            <Route path="/category" element={<ListCategory />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/admin/user" element={<ListUsers />} />
            <Route path="/user/setting" element={<AccountSetting />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/listBookByCategory" element={<ListBookByCategory />} />
            <Route path="/book/add" element={<AddBook />} />

          </>
        )}
        {userRole === 'User' && (
          <>
            <Route path="/listBook" element={<ListBook />} />
            <Route path="/listBookByCategory" element={<ListBookByCategory />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/book/view" element={<ListBookByUser />} />
            <Route path="/bookdetail" element={<BookByBookId />} />
            <Route path="/user/setting" element={<AccountSetting />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/book/add" element={<AddBook />} />

          </>
        )}
        <Route path="*" element={<AccessDenied />} />
      </Routes>
    </BrowserRouter>
  );
}

function AccessDenied() {
  return <div>Access denied. You are not authorized to access this page.</div>;
}

export default App;
