import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListBook from './components/ListBook';
import ListBookByUser from './components/ListBookByUser';
import Login from './components/Login';
import ListBookByCategory from './components/ListBookByCategory';
import Home from './components/Home';
import ListCategory from './components/ListCategory';
import Profile from './components/Profile';
import BookByBookId from './components/BookByBookId';
import ListUsers from './components/SuperAdmin/ListUsers'
import AccountSetting from './components/Account/AccountSetting'
import AccountRegister from './components/Account/AccountRegister'

function App() {
  const userRole = JSON.parse(sessionStorage.getItem('role'));
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/register" element={<AccountRegister/>} />

        {/* {userRole === 'Super Admin' && ( */}
          <>
            <Route path="/admin/book" element={<ListBook />} />
            <Route path="/book/view" element={<ListBookByUser />} />
            <Route path="/listBookByCategory" element={<ListBookByCategory />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/admin/user" element={<ListUsers />} />
            <Route path="/user/setting" element={<AccountSetting />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/bookdetail" element={<BookByBookId />} />

          </>
        {/* )} */}
        {/* {userRole === 'Admin' && ( */}
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
          </>
        {/* )} */}
        {/* {userRole === 'User' && ( */}
          <>
            <Route path="/listBook" element={<ListBook />} />
            <Route path="/listBookByCategory" element={<ListBookByCategory />} />
            <Route path="/user" element={<Profile />} />
            <Route path="/book/view" element={<ListBookByUser />} />
            <Route path="/bookdetail" element={<BookByBookId />} />
            <Route path="/user/setting" element={<AccountSetting />} />
            <Route path="/homepage" element={<Home />} />
          </>
        {/* )} */}
        {/* <Route path="*" element={<AccessDenied />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function AccessDenied() {
  return <div>Access denied. You are not authorized to access this page.</div>;
}

export default App;
