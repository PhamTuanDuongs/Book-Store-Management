import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";
import { useNavigate } from "react-router-dom";

const ListBookByUser = () => {
  const navigate = useNavigate(); // Uncomment this line

  const [loading, setLoading] = useState(false); // Change initial state to false
  const [books, setBooks] = useState([]);
  const [navbar, setNavbar] = useState(false);

  const saveBookId = (bookId) => {
    localStorage.setItem('selectedBookId', bookId);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await BookService.getBookByUserName();
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleCategoryButtonClick = (bookId) => {
    saveBookId(bookId); // Fixed function call
    navigate('/bookDetail');
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {books.map((book) => (
              <div className="max-width: 144px" key={book.bookId}> {/* Added key prop */}
                <div className="content-center">
                  <a href={"http://localhost:3000/bookDetail"}>
                    <div onClick={() => handleCategoryButtonClick(book.bookId)}>
                      <img
                        style={{ width: "144px", height: "200px" }}
                        src={"http://localhost:3000/images/" + book.coverPath}
                        alt="Girl in a jacket"
                      />
                      <p>{book.title}</p>
                    </div>
                  </a>
                  <a href={"http://localhost:3000/images/" + book.pdfPath}>
                    PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ListBookByUser;
