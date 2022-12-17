import {BsGithub, } from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {login} from "../redux/Actions/authActions.js";

export default function Login()
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const {my_profile, error} = useSelector(state => state.authReducer)
    const [credentialError, setCredentialError] = useState('');
    const [formData, setFormData] = useState({username:"", password:""});
    const {username, password} = formData
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmits = (e) =>
    {
        e.preventDefault()
        dispatch(login(username, password))
        if(error !== null)
        {
            setCredentialError("Your credentials are incrrect")
        }
        if(token)
        {
            navigate("/")
        }
    }
    useEffect(() =>
    {
        if(error !== null)
        {
            setCredentialError("Your credentials are incrrect")
        }
        if(token)
        {
            navigate("/")
        }
    }, [dispatch, my_profile]);
    return (
        <>
        <div className="w-screen h-screen flex justify-center">
            <div className="flex justify-center items-center flex-wrap h-full  text-gray-800">
                <div className="md:w-8/12 lg:w-5/12 ">
                    <a href="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </a>
                </div>
                <div className="md:w-8/12 lg:w-3/12 ">
                    <b className="mb-2 flex justify-center text-center" >SIGN IN</b>
                    <form onSubmit={onSubmits} >
                        {/*-- Email input --*/}
                        <div className="mb-6">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Username"
                                value={username}
                                required={true}
                                onChange={e=>onChange(e)}
                                id="username" name="username"
                            />
                        </div>

                        {/*Password input */}
                        <div className="mb-6">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password"
                                value={password}
                                minLength={6}
                                name="password"
                                required={true}
                                onChange={e =>onChange(e)}
                            />
                        </div>
                        {error && <b className="flex text-red-500 text-center mb-2 mt-0">{credentialError}</b>}

                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    id="exampleCheck3"
                                    // checked
                                />
                                <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                            </div>
                            <a href="src/authentication/Login.jsx#" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</a>

                        </div>
                        {/*signup button*/}
                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">Sign In</button>

                        <div  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>
                        <a
                            className="px-7 py-3  mb-3 shadow bg-gray-100 font-normal text-sm leading-snug uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                            href="/register"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <AiOutlineMail className="mr-3" size={20}/>
                            Continue with Email
                        </a>
                        <a
                            className="px-7 py-3 font-normal text-sm bg-black text-white leading-snug uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                            href="src/authentication/Login.jsx#"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <BsGithub size={20} className="text-white mr-3"/>
                            Continue with Github
                        </a>

                    </form>
                </div>
            </div>
        </div>

        </>
    )
}
