import React, { useEffect, useState } from 'react'
import CategoryService from '../services/CategoryService';
import { useNavigate } from 'react-router-dom';
const ListCategory = () => {
  //  const navigate = useNavigate();

  const [loading, setLoading] = useState('');
  const [category, setCategory] = useState([]);
  const [navbar, setNavbar] = useState(false);
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
  return (
    <>
      <div className="container mx-auto px-4 mt-10">
        {!loading && (
          <div className="grid grid-cols-6 gap-6 justify-evenly">        
      {category.map((category) =>(
        <a href={"http://localhost:3000/category/"+category.categoryId}>
        <button>{category.categoryName}</button>
        </a>
       ))} 
       </div>
       
  )
}
        </div>
    </>
  )
}
export default ListCategory