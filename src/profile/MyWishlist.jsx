
import MySideBar from "./MySideBar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getWishlistItems, removeItemFromWishlist} from "../redux/Actions/wishlistAction.js";
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import {useNavigate} from "react-router-dom";

export default function MyWishlist()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {wishlistItem} = useSelector(state=>state.wishlistReducer)
    useEffect(() =>
    {
        dispatch(getWishlistItems())
    }, [dispatch]);

    // console.log(wishlistItem)
    return (

        <div className="sm:flex sm:justify-center sm:items-center">
            <MySideBar/>
            <div className="px-5 sm:w-8/12">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900">My Favorites</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all my favorites products
                        </p>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            onClick={()=>navigate("/mude/guowuchang")}
                            type="button"
                            className="inline-flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                        >
                            Add Favorite
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Product
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Action
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Remove</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                    {wishlistItem?.map((item, index) =>
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <img className="h-20 w-20 object-contain" src={`http://127.0.0.1:8000/${item?.product?.images[0]?.image}`} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="font-medium text-gray-900">{item?.product?.name}</div>
                                                        {/*<div className="text-gray-500">{item?.product?.price}</div>*/}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="text-gray-900">{item?.product?.price}</div>
                                                {/*<div className="text-gray-500">{item.department}</div>*/}
                                            </td>

                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                              In stock
                                            </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm ">
                                                <button type="button" className="text-black bg-blue-400 px-5 py-2 rounded-full" onClick={()=>navigate(`/mude/single/product/${item?.product?.id}`)}>Add To Cart</button>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.role}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <div onClick={()=>dispatch(removeItemFromWishlist(item?.id))} className="text-indigo-600 hover:text-indigo-900">
                                                    <MdOutlineRemoveShoppingCart size={20} color={"red"}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

