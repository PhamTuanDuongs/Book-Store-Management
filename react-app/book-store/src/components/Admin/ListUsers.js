import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';

const ListUser = () => {
  const [loading, setLoading] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserService.getAllUser();
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10">
      {!loading && (
        <table className="w-full border-collapse bg-white shadow-lg rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Display Name</th>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Username</th>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Date of Birth</th>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Avatar</th>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Create Date</th>
              <th className="text-left py-3 px-4 bg-gray-100 font-semibold uppercase text-sm tracking-wider">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-4 px-6 border-b border-gray-200">{user.displayName}</td>
                <td className="py-4 px-6 border-b border-gray-200">{user.username}</td>
                <td className="py-4 px-6 border-b border-gray-200">{user.dob}</td>
                <td className="py-4 px-6 border-b border-gray-200"><img className="w-12 h-12 object-cover rounded-full mr-3" src={`http://localhost:9999/users/avatar/${user.avatarPath}`} alt="Avatar"/></td>
                <td className="py-4 px-6 border-b border-gray-200">{user.createDate}</td>
                <td className="py-4 px-6 border-b border-gray-200">{user.roles.length > 0 ? user.roles[0].roleName : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListUser;
