import React, { useState } from 'react'
import LoginImg from '../assets/Login.png'
import DefaultFormInput from '../components/Forms/DefaultFormInput'
import FormBtn from '../components/Buttons/FormBtn'
import axios from 'axios'
import { FaUserAlt, FaKey  } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const [LoginData, SetLoginData] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        SetLoginData((prevData) => ({
          ...prevData,
          [name]: value
        }));
    };

    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const headleLogin = (e) => {
        e.preventDefault();

        try{
            const res = axios.post(import.meta.env.VITE_APP_API + '/Auth/Login', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Success")
                    navigate('/Dashboard/home')
                    localStorage.setItem('Login', res.data.Token)
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.role) 
                    window.location.reload()   
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='min-h-screen bg-gray-100'>
        <div className="md:py-[8%] py-[30%] md:mx-32 mx-4">
            <div className="bg-white">
                <div className="p-8 rounded-lg shadow-md">
                    <div className="md:flex">
                        <div className="w-full">
                            <img src={LoginImg} alt="" />
                        </div>
                        <div className="w-full">
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold text-[#7466f1]">Login Portal</h1>
                                <p className="text-sm text-gray-500">Enter your details to Signin Your Accout</p>
                                <center><hr className='my-2 w-2/3'/></center>
                            </div>

                            <form onSubmit={headleLogin} method="post">
                                <div className="my-8">
                                    <div className="flex my-2">
                                        <p className="p-3 border rounded-l-lg">
                                        <FaUserAlt className='h-8 w-auto fill-gray-400'/>
                                        </p>

                                        <DefaultFormInput 
                                            Type={"email"}
                                            onChange={handleInputChange}
                                            placeholder={"Email Address"}
                                            value={LoginData.email}
                                            name={'email'}
                                            required={true}
                                        />
                                    </div>  

                                    <div className="flex my-4">
                                        <p className="p-3 border rounded-l-lg">
                                        <FaKey className='h-8 w-auto fill-gray-400'/>                                        
                                        </p>
                                        <DefaultFormInput 
                                            Type={"password"}
                                            onChange={handleInputChange}
                                            placeholder={"Password"}
                                            value={LoginData.password}
                                            name={'password'}
                                            required={true}
                                        />                                        
                                    </div>  

                                    <div className="">
                                        <FormBtn btnType={'submit'} btnText={"Login"} />
                                    </div>                                    
                                </div>
                            </form>


                            <center><hr className='my-2 w-2/3'/></center>

                            <div className="text-[#7466f1]">
                                <a href="">Forget Password</a>
                            </div>
                            <div className="text-[#7466f1]">
                                <span className='text-gray-500 font-semibold'>Don't have Account ? </span><a href="/SignUp">Create New</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-2 font-semibold text-gray-500">
                &copy; mern-auth-mvc Templates | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='_blank'>JehanKandy</a>
            </div>
        </div>
    </div>
  )
}

export default Login