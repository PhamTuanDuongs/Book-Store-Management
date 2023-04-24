import React, { useEffect, useState } from 'react'
import BookService from '../services/BookService';

const ListBook = () => {
  const [loading, setLoading] = useState('');
  const [books, setBooks] = useState([]);
  var pageView = sessionStorage.getItem("pageView");
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

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {pageView}
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {books.map((book) => (
              <div className="max-width: 144px" key={book.id}>
                <a href="https://www.w3schools.com?">
<<<<<<< HEAD
                  <div className="content-center">
                    <img style={{ width: "144px", height: "200px" }} src={"images/" + book.coverPath} alt="Girl in a jacket" />
                    <p>{book.title}</p>
                    <p>{book.approved}</p>
                    <a href={"http://localhost:3000/images/" + book.pdfPath}>PDF</a>
                  </div>
=======
                <div className="content-center">
                <img style={{width: "144px",height: "200px"}} src={"images/" + book.coverPath} alt="Girl in a jacket" />
                <p>{book.title}</p>
                <a href={"http://localhost:3000>/images/"+book.pdfPath}>PDF</a> 
                </div>
>>>>>>> main
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
export default ListBook;
