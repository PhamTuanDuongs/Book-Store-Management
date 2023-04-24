import React, { useEffect, useState } from 'react'
import UserService from '../services/UserService';
function User() {
    const [loading, setLoading] = useState('');
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
        <div>
            {user && (
                <div>
                    <p>Name: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>DisplayName: {user.displayName}</p>
                    <img style={{ width: "144px", height: "200px" }} src={"images/avatar/" + user.avatarPath} alt="Girl in a jacket" />
                    <h2>Role</h2>
                    {user.roles.map((u) => (
                        <div>
                            <p>{u.roleName}</p>
                            {u.features.map((fea) => (
                                <div>
                                    <p>{fea.featureName}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default User;
