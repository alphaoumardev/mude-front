import MySideBar from "./MySideBar.jsx";
import MyAddress from "./MyAddress.jsx";

const MyShippingAddress = () =>
{
    return (
        <div className="flex justify-center lg:gap-x-7">
            <div className="hidden sm:flex sm:justify-center mt-20 sm:sticky sm:top-0">
            <MySideBar/>
            </div>
            <div className="sm:w-8/12  lg:grid  sm:mt-20">
                <MyAddress/>
            </div>
        </div>
    )
}
export default MyShippingAddress
