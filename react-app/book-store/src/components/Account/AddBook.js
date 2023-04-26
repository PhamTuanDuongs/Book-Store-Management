import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryService from '../../services/CategoryService';
const App = () => {
  const [bookName, setBookName] = useState('');
  const [bookCover, setBookCover] = useState('');
  const [bookPdf, setBookPdf] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await CategoryService.getCategory();
          setCategory(response.data);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('title', bookName);
      formData.append('price', bookPrice);
      formData.append('description', bookDescription);
      formData.append('noSale', 0); // set a default value for noSale
      formData.append('noView', 0); // set a default value for noView
      formData.append('categories', JSON.stringify(selectedCategories));
      if (bookCover) {
        formData.append('cover', bookCover);
      }
      if (bookPdf) {
        formData.append('pdf', bookPdf);
      }

      try {
        await axios.post('http://localhost:9999/book/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        alert('Book added successfully');
        setBookName('');
        setBookCover('');
        setBookPdf('');
        setBookPrice('');
        setBookDescription('');
        setSelectedCategories([]);
      } catch (error) {
        console.error(error);
        alert('Error adding book');
      }
    };

  const handleCategoryChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedCategories(selectedValues);
    // const selectedValues = Array.from(event.target.selectedOptions, (option) => parseInt(option.value));
    // setSelectedCategories(selectedValues);
  };
  const handleCoverChange = (event) => {
    setBookCover(event.target.files[0]);
  };

  const handlePdfChange = (event) => {
    setBookPdf(event.target.files[0]);
  };
  return (
    <div>
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={bookName} onChange={(event) => setBookName(event.target.value)} />
        </label>
        <br />
        <label>
          Cover:
          <input type="file" accept="image/*" onChange={handleCoverChange} />
        </label>
        <br />
        <label>
          PDF:
          <input type="file" accept="application/pdf" onChange={handlePdfChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={bookPrice} onChange={(event) => setBookPrice(event.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={bookDescription} onChange={(event) => setBookDescription(event.target.value)} />
        </label>
        <br />
        <label>
          Categories:
          {!loading && (
          <select multiple={true} value={selectedCategories} onChange={handleCategoryChange}>
            {category.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.categoryName}
              </option>
            ))}
          </select>
          )}
        </label>
        <br />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default App;
