import React, { useEffect, useState } from 'react'
import BookService from '../services/BookService';
import { useNavigate } from 'react-router-dom';
import CategoryService from '../services/CategoryService';

const ListBookByCategory  = () => {
  //  const navigate = useNavigate();

  const [loading, setLoading] = useState('');
  const [books, setBooks] = useState([]);
  const [navbar, setNavbar] = useState(false);
  const [category, setCategory] = useState([]);

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



  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {books.map((book) => (
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
