import React, { useEffect, useState } from 'react';
import CategoryService from '../services/CategoryService';
import { useNavigate } from 'react-router-dom';

const ListCategory = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [navbar, setNavbar] = useState(false);

  const saveCategoryId = (categoryId) => {
    localStorage.setItem('selectedCategoryId', categoryId);
  };

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

  const handleCategoryButtonClick = (categoryId) => {
    saveCategoryId(categoryId);
    navigate('/listBookByCategory');
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">
            {category.map((category) => (
              <button key={category.categoryId} onClick={() => handleCategoryButtonClick(category.categoryId)}>
                {category.categoryName}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListCategory;
