import MySideBar from "./MySideBar.jsx";
import MyAccount from "./MyAccount.jsx";


const MyProfile = () =>
{
    return (
        <div className=" flex justify-center lg:gap-x-7">
            <div className="hidden sm:flex sm:justify-center mt-20 sm:sticky sm:top-0">
                <MySideBar/>
            </div>
            <div className="sm:w-5/12  lg:grid lg:grid-cols-1">
                <MyAccount/>
            </div>
        </div>
    )
}
export default MyProfile
