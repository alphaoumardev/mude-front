import {BsGithub} from "react-icons/bs";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {signup} from "../redux/Actions/authActions.js";

const Signup = () =>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {error} = useSelector(state => state.authReducer)
    const [created, setCreated] = useState('');
    const [formData, setFormData] = useState({email:"",username:"", password:"", con:""});
    const {username, email, password, con} = formData
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const onSubmit = (e) =>
    {
        e.preventDefault()
        if(password === con)
        {
            dispatch(signup(username, email, password))
            setCreated('created')
            if([created==="created" && error==='']){navigate('/login')}
        }
        else
            return formData
    }
    return(
        <div className="w-screen h-screen flex justify-center">
            <div className="flex justify-center items-center flex-wrap h-full  text-gray-800">
                <div className="md:w-8/12 lg:w-5/12 flex justify-center items-center">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"
                    />
                </div>
                <div className="md:w-8/12 lg:w-3/12 ">
                    <b className="mb-2 flex justify-center text-center" >SIGN UP</b>

                    {error && <b className="flex text-red-500 text-center mb-2 mt-0">{error}</b>}
                    <form onSubmit={onSubmit}>
                        {/*-- Email input --*/}
                        <div className="mb-6">
                            <input
                                type="email"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-blue-50 bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email address"
                                value={email}
                                id="email"
                                name="email"
                                required={true}
                                onChange={e=>onChange(e)}
                            />
                        </div>

                        {/*Password input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-blue-50 bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Username"
                                value={username}
                                id="username"
                                name="username"
                                required={true}
                                minLength={3}
                                onChange={e=>onChange(e)}
                            />
                        </div>

                        <div className="mb-6">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-blue-50 bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password"
                                value={password}
                                id="password"
                                name="password"
                                required={true}
                                minLength={6}
                                onChange={e=>onChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-blue-50 bg-clip-padding border border-solid border-gray-300 rounded-3xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Comfirm"
                                value={con}
                                id="con"
                                name="con"
                                required={true}
                                minLength={6}
                                onChange={e=>onChange(e)}
                            />
                        </div>
                        <div className="flex justify-end mb-3">
                            <a  href="/login" className="float-right text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800">Or alredy a member?</a>
                        </div>
                        {/*signup button*/}
                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light">Sign Up</button>

                        <div  className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <a
                            className="px-7 py-3 font-normal text-sm bg-black text-white leading-snug uppercase rounded-xl shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                            href="#"
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
    )

}
export default Signup
