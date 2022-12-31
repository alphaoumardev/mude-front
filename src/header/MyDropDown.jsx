import {BsPerson} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {IoMdLogOut} from "react-icons/io";
import {BiCommand} from "react-icons/bi";
import {RiTeamLine} from "react-icons/ri";
import {MdPersonAddAlt} from "react-icons/md";
import {FiHelpCircle} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/Actions/authActions.js";

const MyDropDown = ()=>
{
    const dispatch = useDispatch()
    const {customer} = useSelector(state => state.authReducer)
    // console.log(customer)
    return(
        <div>
            <div className="block w-60 p-5 bg-white rounded-md shadow-xl dark:bg-gray-800">

                <a href="/mude/myprofile"  className="flex items-center  text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <img className="relative rounded-full  h-10 w-10 object-cover" src={`http://127.0.0.1:8000/${customer?.avatar}`} alt=""/>
                    <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200 uppercase">{customer?.user?.username}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{customer?.user?.email}</p>
                    </div>
                </a>
                <hr className="border-gray-200 dark:border-gray-700 "/>
                <a href="/mude/myprofile"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <BsPerson size={17}/>
                    <span className="mx-1"> view profile</span>
                </a>
                <a href="/settings"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <AiOutlineSetting size={17}/>
                    <span className="mx-1">Settings</span>
                </a>
                <a href=""
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <IoMdLogOut size={17}/>
                    <span className="mx-1">Details</span>
                </a>
                <hr className="border-gray-200 dark:border-gray-700 "/>
                <a href="#"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <BiCommand size={17}/>
                    <span className="mx-1"> Company profile</span>
                </a>
                <a href="#"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <RiTeamLine size={17}/>
                    <span className="mx-1">Team</span>
                </a>
                <a href="#"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <MdPersonAddAlt size={20}/>
                    <span className="mx-1">Invite colleagues</span>
                </a>
                <hr className="border-gray-200 dark:border-gray-700 "/>
                <a href="#"
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <FiHelpCircle size={17}/>
                    <span className="mx-1">Help</span>
                </a>
                <a href="/login" onClick={()=>dispatch(logout())}
                   className="flex items-center p-3 text-sm text-gray-600 capitalize cursor-pointer transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    <IoMdLogOut size={17}/>
                    <span className="mx-1"> Sign Out </span>
                </a>
            </div>
        </div>
    )
}
export default MyDropDown
