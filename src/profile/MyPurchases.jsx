import MySideBar from "./MySideBar.jsx";
import OrderDetail from "../orders/OrderDetail.jsx";


const MyPurchases = () =>
{
    return (
        <div className=" flex justify-center">
            <div className="hidden sm:flex sm:justify-center mt-20 sm:sticky sm:top-0">
            <MySideBar/>
            </div>
            <div className="sm:w-8/12  lg:grid lg:grid-cols-1">
                <OrderDetail/>
            </div>
        </div>
    )
}
export default MyPurchases
