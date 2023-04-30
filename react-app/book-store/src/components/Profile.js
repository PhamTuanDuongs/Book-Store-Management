import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

function User() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await UserService.getUser();
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
        {user ? (
          <div className="p-8 bg-gray-100">
            <h1 className="text-5xl font-bold mb-8 mt-2 text-center">Profile</h1>
            <div className="flex items-center mb-6">
              <img className="w-40 h-50 object-cover rounded-full mr-6" src={"images/avatar/" + user.avatarPath} alt="User Avatar" />
              <div>
                <p className="text-3xl font-bold mb-2 text-gray-800">{user.displayName}</p>
                <p className="text-xl mb-6 text-gray-700">{user.email}</p>
              </div>
            </div>
            {user.roles.length > 0 && (
              <div>
                <p className="text-2xl font-bold mb-2 text-gray-800">Role: {user.roles[0].roleName}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.roles.map(role => role.features.map(feature => (
                    <a href={feature.url} key={feature.featureId} className="bg-white border p-4 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      <p className="font-bold text-gray-800">{feature.featureName}</p>
                      <p className="text-gray-500 text-sm mt-2">{feature.featureDescription}</p>
                    </a>
                  )))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center py-8">{loading ? "Loading..." : "No user found."}</p>
        )}
      </div>
    </div>
  );
}

export default User;
