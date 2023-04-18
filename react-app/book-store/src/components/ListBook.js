import React, { useEffect, useState } from 'react'
import BookService from '../services/BookService';
import { useNavigate } from 'react-router-dom';
import IMAGES from './image';
const ListBook = () => {
  //  const navigate = useNavigate();

  const [loading, setLoading] = useState('');
  const [books, setBooks] = useState([]);

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

      <div className="container mx-8 my-8">
        <div className="h-12">
          <button className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
            Add book
          </button>
        </div>
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead>
            <tr>
              <th>bookId</th>
              <th>title</th>
              <th>pdfPath</th>
              <th>coverPath</th>
              <th>price</th>
              <th>noSale</th>
              <th>noView</th>
              <th>categories</th>
              <th>approved</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {books.map((book) => (
                <tr>
                  <td>{book.bookId}</td>
                  <td>{book.title}</td>
                  <td>{book.pdfPath}</td>
                  <td>{book.price}</td>
                  <td>{book.categoryName}</td>
                  <td>{book.approved}</td>
                  <td>{book.coverPath}</td>
                  {/* <td><img src=  "images/pdf/16.pdf" alt="Girl in a jacket" width="500" height="600"/></td> */}
                  <td><img src= {"images/"+book.coverPath} alt="Girl in a jacket" width="300" height="300"/></td>

                </tr>
              ))}
            </tbody>
          )}


        </table>

      </div>

    </>
  )
}

export default ListBook