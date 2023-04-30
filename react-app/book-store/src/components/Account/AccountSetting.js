import React, { useEffect, useState } from "react";
import UserService from '../../services/UserService';
import { useNavigate } from 'react-router-dom';

function AccountSetting() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [avatarPath, setAvatar] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await UserService.getUser();
                setUser(response.data);
                setPassword(response.data.password)
                setDisplayName(response.data.displayName);
                setEmail(response.data.email);
                setDob(response.data.dob); // Thêm thông tin của dob
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
        setPassword(user.password);
        setDisplayName(user.displayName);
        setEmail(user.email);
        setDob(user.dob); // Đặt lại giá trị của dob
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const updatedUser = {
                username: user.username,
                password,
                displayName,
                email,
                dob
            };
            const response = await UserService.updateUser(updatedUser);
            let temp = avatarPath;
            if (temp !== null) {
                const formData = new FormData();
                formData.append("avatarPath", temp);
                formData.append("username", user.username);
            const responseAvatar  = await UserService.updateUserAvatar(formData);
            }
            setUser(response.data);
            setIsEditing(false);
            navigate('/user')
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    const handleAvatarFile = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    };
    return (
        <div className="bg-gradient-to-br from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                {user ? (
                    <div className="p-8 bg-gray-100">
                        <h1 className="text-5xl font-bold mb-8 mt-2 text-center">Profile</h1>
                        <div className="flex items-center mb-6">
                            <img className="w-40 h-50 object-cover rounded-full mr-6" src={"http://localhost:9999/users/avatar/" + user.avatarPath} alt="User Avatar" />
                            <form>
                                <div>
                                    {isEditing ? (
                                        <>
                                            <label className="block text-gray-700 font-bold mb-2">Display Name:</label>
                                            <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">Password:</label>
                                            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">Email:</label>
                                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">DOB:</label>
                                            <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} className="border-solid border-1 border-gray-950 px-4 py-2 rounded-lg w-full mb-2" />
                                            <label className="block text-gray-700 font-bold mb-2">Avatar:</label>
                                            <input type="file" accept="image/*" onChange={handleAvatarFile} />
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
                                            <p className="text-3xl font-bold mb-2 text-gray-800">{user.displayName}</p>
                                            <p className="text-xl mb-6 text-gray-700">{user.email}</p>
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


