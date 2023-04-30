import React, { useEffect, useState } from "react";
import BookService from "../../services/BookService";
const BookByBookId = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await BookService.getBookByBookId();
        setBook(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="100 min-h-screen">
      {loading ? (
        <p className="text-2xl font-bold text-center my-8">Loading...</p>
      ) : book ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mt-16 mb-24">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
              <img
                src={"images/" + book.coverPath}
                alt="Book cover"
                className="rounded-lg shadow-lg h-[400px] w-[300px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl mb-6 border-b-2 border-gray-300 pb-4">
                {book.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Author: {book.authorName}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {book.description}
              </p>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <a
                  href={"http://localhost:9999/pdf/" + book.pdfPath}
                  className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 text-lg font-medium"
                >
                  Read PDF
                </a>
                <p className="text-lg font-bold text-gray-900 price bg-pink-500 hover:bg-pink-700 text-white rounded-md px-4 py-2">
                  $ {book.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No book found.</p>
      )}
    </div>
  );
};

export default BookByBookId;
