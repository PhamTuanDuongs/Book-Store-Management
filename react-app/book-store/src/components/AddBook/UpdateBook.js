import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import BookService from '../../services/BookService'
import CategoryService from "../../services/CategoryService";
function AccountSetting() {
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const [title, setTitle] = useState('');
    const [authorName, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [pdfPath, setPdfFile] = useState(null);
    const [coverPath, setCoverFile] = useState(null);
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(null);
    const [categoryByBookId, setCategoryByBookId] = useState(null);
    const [categories, setCategories] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await BookService.getBookByBookId();
                const responseCategory = await CategoryService.getCategory();
                setCategories(responseCategory.data);
                setBook(response.data);
                setTitle(response.data.title);
                setAuthor(response.data.authorName);
                setDescription(response.data.description);
                setPrice(response.data.price);
                const responseCategoryById = await CategoryService.getCategoryByBookId();
                setCategoryByBookId(responseCategoryById.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Đặt lại giá trị của dob
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const updatedBook = {
                bookId: book.bookId,
                title,
                authorName,
                description,
                price,
            };
            if (category === null) {
                const response = await BookService.updateBookInformation(updatedBook, categoryByBookId.categoryId);
            }else{
                const response = await BookService.updateBookInformation(updatedBook, category);
            }
            let tempPdf = pdfPath;
            let tempJpg = coverPath;
            if (tempPdf !== null){
                const formData = new FormData();
                formData.append("pdfPath", tempPdf);
                formData.append("bookId", book.bookId);
                const responseAvatar = await BookService.updateFilePdf(formData);
            }
            
            if (tempJpg !== null) {
                const formData = new FormData();
                formData.append("coverPath", tempJpg);
                formData.append("bookId", book.bookId);
                const responseAvatar = await BookService.updateFileCover(formData);
            }
            setIsEditing(false);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
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
        <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
            <div className="max-w-8xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                {book ? (
                    <div className="p-8 bg-gray-100">
                        <div className="flex items-center mb-6">
                            <form>
                                <div>
                                    {isEditing ? (
                                        <>
                                            <label className="block text-gray-700 font-bold mb-2">Title:</label>
                                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">AuthorName:</label>
                                            <input type="text" value={authorName} onChange={(e) => setAuthor(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">Description:</label>
                                            <textarea type="text" style={{height: "150px", width: "20rem"}} value={description} onChange={(e) => setDescription(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">Price:</label>
                                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label class="block font-medium text-gray-700">
                                                Category:
                                                <select class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" value={category} onChange={e => setCategory(e.target.value)}>
                                                    <option value="">Select a category</option>
                                                    {categories.map(category => (
                                                         <option key={category.categoryId} value={category.categoryId } selected={categoryByBookId.categoryId === category.categoryId}>
                                                         {category.categoryName}
                                                     </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <div class="mb-4">
                                                <label class="block text-gray-700 font-bold mb-2" for="pdf-file">
                                                    PDF File:
                                                </label>
                                                <div class="relative">
                                                    <input id="pdf-file" type="file" accept=".pdf" onChange={handlePdfFile} />
                                                </div>
                                            </div>

                                            <div class="mb-4">
                                                <label class="block text-gray-700 font-bold mb-2" for="cover-file">
                                                    Cover File:
                                                </label>
                                                <div class="relative">
                                                    <input id="cover-file" type="file" accept="image/*"  onChange={handleCoverFile} />
                                                   
                                                </div>
                                            </div>


                                            <button
                                                onClick={handleUpdate}
                                                type="button"
                                                class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                                            <button
                                                onClick={handleCancel}
                                                type="button"
                                                class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancle</button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                <div className="flex flex-col md:flex-row justify-between items-center mt-16 mb-24">
                                                    <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
                                                        <img
                                                            src={"http://localhost:9999/cover/" + book.coverPath}
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
                                                            <p className="text-lg font-bold text-gray-900 price bg-pink-500 hover:bg-pink-700 text-white rounded-md px-4 py-2">
                                                                $ {book.price}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleEdit}
                                                class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                            >
                                                Edit
                                            </button>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (

                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default AccountSetting;


