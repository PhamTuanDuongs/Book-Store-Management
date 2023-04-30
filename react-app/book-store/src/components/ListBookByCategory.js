import React, { useEffect, useState } from 'react'
import BookService from '../services/BookService';
import { useNavigate } from 'react-router-dom';
import CategoryService from '../services/CategoryService';

const ListBookByCategory  = () => {
  const [loading, setLoading] = useState('');
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await BookService.getBookByCategory();
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
        if (window.location.pathname !== '/listBookByCategory') {
          window.location.href = '/listBookByCategory';
        } else {
          window.location.reload();
        }
        
    };
    const approvedBooks = books.filter((book) => book.isApproved === 1);


  return (
    <>
    <ul>
                <li><a class="active" href="/home">Home</a></li>
                {/* Category choose Bar */}
                <li>
                    <li class="dropdown">
                        <button class="dropbtn">Category
                        </button>
                        {/* <details class="dropbtn" >
                <summary>
                    Category
                </summary> */}
                        <div class="dropdown-content">

                            {!loading1 && (
                                <div className="grid grid-cols-6 gap-6 justify-evenly">
                                    {category.map((category) => (
                                        <a key={category.categoryId} onClick={() => handleCategoryButtonClick(category.categoryId)}>
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
                <li1><a href="../login" >Login</a></li1>
            </ul>
      {/* View book */}
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {approvedBooks.map((book) => (
              <div className="max-width: 144px">
                <a href="https://www.w3schools.com?">
                <div className="content-center">
                <img style={{width: "144px",height: "200px"}} src={"images/" + book.coverPath} alt="Girl in a jacket" />
                <p>{book.title}</p>
                <a href={"http://localhost:3000/images/"+book.pdfPath}>PDF</a> 
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
export default ListBookByCategory
