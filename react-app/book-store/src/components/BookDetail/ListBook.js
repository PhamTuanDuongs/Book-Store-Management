import React, { useEffect, useState } from "react";
import BookService from "../../services/BookService";
import { useNavigate } from "react-router-dom";
const ListBook = () => {
  const [loading, setLoading] = useState("");
  const [books, setBooks] = useState([]);
  const [isApproved, setIsApproved] = useState(null); // State to store the current status of the button
  const navigate = useNavigate();
  const [sorted, setSorted] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const saveBookId = (bookId) => {
    localStorage.setItem("selectedBookId", bookId);
  };

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

  const handleBookButtonClick = (bookId) => {
    saveBookId(bookId);
  };
 

  const approveBook = async (bookId) => {
    try {
        setLoading(true);
        const updatedBook = {
            bookId: bookId,
        };
        const response = await BookService.updateBook(updatedBook);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};


  const denyBook = async (bookId) => {
    try {
      await BookService.denyBook(bookId); // Call an API to delete the book from the database
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = () => {
    let sortedBooks;
    if (!sorted) {
      // Sort ascending order
      sortedBooks = [...books].sort((a, b) => a.isApproved - b.isApproved);
    } else {
      // Toggle sorting order
      sortedBooks = [...books].reverse();
      setReverse(!reverse);
    }
    setSorted(true);
    setBooks(sortedBooks);
  };

  const renderBooks = (books) => {
    return (
      <div className="grid grid-cols-6 gap-6 justify-evenly">
        {books.map((book) => (
          <div className="max-width: 144px" key={book.id}>
            <div className="content-center">
              <a href="/bookdetail">
                <div onClick={() => handleBookButtonClick(book.bookId)}>
                  <img
                    style={{ width: "144px", height: "200px" }}
                    src={"http://localhost:9999/cover/" + book.coverPath}
                    alt="Girl in a jacket"
                  />
                </div>
              </a>
              {book.isApproved ? (
                <span className="inline-flex items-center bg-green-500 text-white rounded-full py-1 px-3 mt-4">
                  Public
                </span>
              ) : (
                <div onClick={() => handleBookButtonClick(book.bookId)}>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mt-4"
                    onClick={() => approveBook(book.bookId)}
                  >
                    Accept
                  </button>

                  <button
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={() => denyBook(book.bookId)}
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {alertMessage && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{alertMessage}!</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 00-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 101.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z" />
              </svg>
            </span>
          </div>
        )}
        <button
          onClick={handleSort}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Sort
        </button>
        {!loading &&
          renderBooks(
            sorted
              ? reverse
                ? books.reverse()
                : [...books].sort((a, b) => a.isApproved - b.isApproved)
              : books
          )}
      </div>
    </>
  );
};

export default ListBook;