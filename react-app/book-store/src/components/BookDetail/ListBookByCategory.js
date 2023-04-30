import React, { useEffect, useState } from "react";
import BookService from "../../services/BookService";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../services/CategoryService";

const ListBookByCategory = () => {
  const [loading, setLoading] = useState("");
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    localStorage.setItem("selectedCategoryId", categoryId);
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
    if (window.location.pathname !== "/listBookByCategory") {
      window.location.href = "/listBookByCategory";
    } else {
      window.location.reload();
    }
  };
  const handleLogout = () => {
    // Invalidate sessionStorage
    sessionStorage.clear();

    // Update the state to reflect the change
    setIsLoggedIn(false);
  };

  const approvedBooks = books.filter((book) => book.isApproved === 1);

  const saveBookId = (bookId) => {
    localStorage.setItem("selectedBookId", bookId);
  };
  const handleBookButtonClick = (bookId) => {
    saveBookId(bookId);
  };

  return (
    <>
      <ul class="nav nav-bar">
        <li>
          <a
            href="/homepage"
            class="btn bg-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 border hover:border-transparent"
          >
            Home
          </a>
        </li>
        {/* Category choose Bar */}
        <li>
          <li class="dropdown">
            <button class="btn dropbtn bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent ">
              Category
            </button>
            {/* <details class="dropbtn" >
                <summary>
                    Category
                </summary> */}
            <div class="dropdown-content">
              {!loading1 && (
                <div className="grid grid-cols-6 gap-6 justify-evenly">
                  {category.map((category) => (
                    <a
                      class="btn-dropdown"
                      key={category.categoryId}
                      onClick={() =>
                        handleCategoryButtonClick(category.categoryId)
                      }
                    >
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
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              id="simple-search"
              class="btn bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-500 focus:border-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-500 dark:focus:border-500"
              placeholder="Search"
              required
            />
          </liv>
        </li>
        {isLoggedIn ? (
          // Hiển thị nội dung khi session tồn tại
          <div>
            <li1 onClick={handleLogout}>
              <button class="btn bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent ">
                Logout
              </button>
            </li1>
            <li1>
              <a
                href="/user"
                class="btn bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent "
              >
                Profile
              </a>
            </li1>
            <li1>
              <a
                href="/book/view"
                class="btn bg-transparent hover:bg-orange-500 text-white font-semibold hover:text-white py-2 px-4 border hover:border-transparent "
              >
                My Book
              </a>
            </li1>
          </div>
        ) : (
          // Hiển thị nội dung khi session không tồn tại

          <li1>
            <a class="btn" href="/login">
              Login
            </a>
          </li1>
        )}
      </ul>
      {/* View book */}
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {approvedBooks.map((book) => (
              <div className="max-width: 144px">
                <a href="/bookdetail">
                  <div onClick={() => handleBookButtonClick(book.bookId)}>
                    <div className="content-center mx-auto">
                      <img
                        style={{ width: "144px", height: "200px" }}
                        src={"http://localhost:9999/cover/" + book.coverPath}
                        alt="Girl in a jacket"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href={"http://localhost:9999/pdf/" + book.pdfPath}
                  className="cta-btn transition duration-500 ease-in-out focus:outline-none active:bg-green-700 hover:bg-yellow-500"
                  style={{ width: "63%" }}
                >
                  READ
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ListBookByCategory;
