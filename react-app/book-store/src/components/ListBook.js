import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";
import { useNavigate } from "react-router-dom";
const ListBook = () => {
  const [loading, setLoading] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
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
  console.log(search.toLowerCase())
  return (
    <>
      <div className="container mx-auto px-4 mt-10">

<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    
</form>

        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {books.filter((book) => {
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
