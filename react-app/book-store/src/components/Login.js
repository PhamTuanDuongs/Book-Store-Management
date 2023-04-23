import React, {  useState } from 'react'
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // <-- use hook in component

    const onCustomButtonClick = (event) => {
        navigate('/')
      }

    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
            console.log('proceed')
            fetch("http://localhost:9999/users/login/"+username).then((res) =>{
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length === 0){
                    toast.error('Please Enter valid username');
                }else{

                    if(resp.password === password){
                        toast.success('success');
                        sessionStorage.setItem("pageView", username);
                        onCustomButtonClick();
                    }else{
                        toast.error('Please Enter valid password')
                    }
                }
            }).catch((err) => {
                toast.error('Login failed due to : ' + err.message)
            })
        }else{

        }

    }

    const validate=()=>{
        let result = true;
        if(username ==='' || username === null){
            result = false;
            toast.warning('Please enter username');
        }
        if(password ==='' || password === null){
            result = false;
            toast.warning('Please enter password');
        }
        return result
    }

    
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={ProceedLogin}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={e=>setUsername(e.target.value)}
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder="your username"
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={e=>setPassword(e.target.value)}
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login