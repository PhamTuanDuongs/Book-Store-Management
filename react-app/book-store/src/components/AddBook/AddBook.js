import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [coverFile, setCoverFile] = useState(null);
    const [category, setCategory] = useState('');
    const username = sessionStorage.getItem("pageView");


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9999/category')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleAddBook = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('pdfFile', pdfFile);
        formData.append('coverFile', coverFile);
        formData.append('username', username);
        formData.append('category', category);

        axios.post('http://localhost:9999/add', formData)
            .then(response => {
                console.log(response.data);
                // do something after successful book addition
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handlePdfFile = (e) => {
        const file = e.target.files[0];
        setPdfFile(file);
    };

    const handleCoverFile = (e) => {
        const file = e.target.files[0];
        setCoverFile(file);
    };

    return (
        <form onSubmit={handleAddBook}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label><br />
            <label>
                Author:
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            </label><br />
            
            <label>
            Description:
                <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </label><br />
            <label>
                Price:
                <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            </label><br />
            <label>
                PDF File:
                <input type="file" accept=".pdf" onChange={handlePdfFile} />
            </label><br />
            <label>
                Cover File:
                <input type="file" accept="image/*" onChange={handleCoverFile} />
            </label><br />

            <label>
                Category:
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                    ))}
                </select>
            </label><br />

            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook;
