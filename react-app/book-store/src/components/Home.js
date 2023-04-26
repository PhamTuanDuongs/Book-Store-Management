import React, { useEffect, useState } from 'react'
import BookService from '../services/BookService';
import { Link, useNavigate } from 'react-router-dom';
import CategoryService from '../services/CategoryService';

import '../css/Home.css'
const Home = () => {
    //List book
    const [loading, setLoading] = useState('');
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await BookService.getBook();
                setBooks(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    //List Category
    const navigate = useNavigate();
    const [loading1, setLoading1] = useState(false);
    const [category, setCategory] = useState([]);
    const saveCategoryId = (categoryId) => {
        localStorage.setItem('selectedCategoryId', categoryId);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading1(true);
            try {
                const response = await CategoryService.getCategory();
                setCategory(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading1(false);
        };
        fetchData();
    }, []);
    const handleCategoryButtonClick = (categoryId) => {
        saveCategoryId(categoryId);
        navigate('/listBookByCategory');
    };
    const handleLogout = () => {
        // Invalidate sessionStorage
        sessionStorage.clear();

        // Update the state to reflect the change
        setIsLoggedIn(false);
    };

    const approvedBooks = books.filter((book) => book.isApproved === 1);
    return (
        //Menu Bar
        
        
        <>
            <ul class="nav nav-bar">
                <li><a href='/homepage' class="btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
  Home</a></li>
                {/* Category choose Bar */}
                <li>
                    <li class="dropdown">
                    <button class="btn dropbtn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
  Category</button>
                        {/* <details class="dropbtn" >
                <summary>
                    Category
                </summary> */}
                        <div class="dropdown-content">
                            {!loading1 && (
                                <div className="grid grid-cols-6 gap-6 justify-evenly">
                                    {category.map((category) => (
                                        <a class="btn-dropdown" key={category.categoryId} onClick={() => handleCategoryButtonClick(category.categoryId)}>
                                            {category.categoryName}
                                        </a>
                                    ))}
                                </div>
                            )}

                        </div>
                        {/* </details> */}
                    </li>
                </li>
                {/* Login button */}
                <li>
                    <liv class="mt-12">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" class="btn bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </liv>
                </li>
                {isLoggedIn ? (
                    // Hiển thị nội dung khi session tồn tại
                    <div >
                        <li1 onClick={handleLogout} ><button class="btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
  Logout</button></li1>
                        <li1><a href='/user' class="btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
  Profile</a></li1>
                        <li1><a href='/book/view' class="btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent ">
  My Book</a></li1>
                    </div>
                ) : (
                    // Hiển thị nội dung khi session không tồn tại
                    
                    <li1><a class="btn" href="/login" >Login</a></li1>
                    
                )}
                
            </ul>
            {/* View book */}
            <div id="test-body-mobile" className="contentBody" class="content">
                {!loading && (

                    <div className="grid grid-cols-4 gap-6 justify-evenly" id="contentBody">

                        {approvedBooks.filter((book) => {
                            return search.trim() === '' ? book : book.title.toLowerCase().includes(search.toLowerCase());
                        }).map((book) => (

                            <div className="max-width: 144px" key={book.id}>
                                <a href="https://www.w3schools.com?">
                                    <div className="content-center">
                                        <img style={{ width: "144px", height: "200px" }} src={"http://localhost:3000/images/" + book.coverPath} alt="Girl in a jacket" />
                                        <p>{book.title}</p>
                                        <p>{book.approved}</p>
                                        <a href={"http://localhost:3000/images/" + book.pdfPath}>PDF</a>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}



export default Home
