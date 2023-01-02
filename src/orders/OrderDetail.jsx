import Billing from "./Billing.jsx";
import {useEffect, useState} from "react";
import {getAddressAction, getMyOrderAction} from "../redux/Actions/orderAction.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import EditAddress from "./EditAddress.jsx";


function classNames(...classes) {return classes.filter(Boolean).join(' ')}

const OrderDetail = ()=>
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const {address} = useSelector(state => state.getShippingAddressReducer)
    const {orderItem} = useSelector(state => state.getMyorderReducer)
    useEffect(() =>
    {
        dispatch(getMyOrderAction())
        dispatch(getAddressAction())
    }, [dispatch]);

    // console.log(orderItem)
    return(
        <div>
            <main className="max-w-7xl mx-auto pt-8 pb-24 sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                {orderItem?.map((item, index) =>
                <div key={index} className="">
                    <div className="px-4 mt-5 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                        <div className="flex sm:items-baseline sm:space-x-4">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order: #{item?.order_reference}</h1>
                            <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:block">
                                View invoice<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                        <p className="text-sm text-gray-600">
                            Order Placed{' '}
                            <time dateTime="2021-03-22" className="font-medium text-gray-900">
                                {item?.paid_at?.slice(0,10)}
                            </time>
                        </p>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:hidden">
                            View invoice<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    {/* Products */}
                    <section aria-labelledby="products-heading" className="mt-6">
                    <h2 id="products-heading" className="sr-only">
                        Products purchased
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-white border-t border-b border-gray-200 shadow-sm sm:border sm:rounded-lg">
                            {item?.cart?.map((product, index) =>
                                <div key={index} className="border-t border-b border-gray-200 shadow-sm py-3 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-6">
                                    <div className="sm:flex lg:col-span-7">
                                        <div onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)} className="flex-shrink-0 cursor-pointer w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-none sm:w-40 sm:h-40">
                                            <img
                                                src={`http://127.0.0.1:8000/${product?.product?.images[0]?.image}`}
                                                alt={""}
                                                className="object-center object-cover w-fit h-fit sm:w-40 sm:h-40"
                                            />
                                        </div>
                                        <div className="mt-6 sm:flex sm:justify-between sm:items-center sm:space-x-10 sm:mt-0 sm:ml-6">
                                            <div className="sm:block">
                                                <p onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)} className={"cursor-pointer"}>{product?.product?.name}</p>
                                                <p className="mt-1 text-sm font-bold text-red-700"><span className="font-thin">¥</span>{product?.total}</p>
                                                <div className="flex-none flex space-x-2">
                                                    {product?.color ? (<p style={{ backgroundColor: product?.color }} className="w-5 h-5 rounded-full border border-black border-opacity-10"></p>):null}
                                                    {product?.color ? (<p className="ml-4 pl-4 border-l border-gray-200 text-black uppercase sm:hidden">{product?.color}</p>):null}
                                                    {product?.size ? (<p className="ml-4 pl-2 border-l border-gray-200 text-black uppercase">{product?.size}</p>) : null}
                                                </div>
                                            </div>

                                            <div className="mt-3 sm: text-sm text-gray-500">{product?.product?.description}</div>
                                        </div>
                                    </div>

                                    <div className="mt-6 lg:mt-0 lg:col-span-5">
                                        <dl className="grid grid-cols-2 gap-x-6 text-sm">
                                            {/*<div>*/}
                                            {/*    <dt className="font-bold text-gray-900">Delivery address</dt>*/}
                                            {/*    <dd className="mt-3 text-gray-500">*/}
                                            {/*        <span className="block"><span className="text-xs text-black font-bold">{address?.nickname}</span>{address?.customer?.contact}</span>*/}
                                            {/*        <span className="block">{address?.country +" "+address?.state+" "+address?.city}</span>*/}
                                            {/*        <span className="block">{address?.street +" "+address?.details+" "+address?.zip}</span>*/}
                                            {/*    </dd>*/}
                                            {/*</div>*/}
                                            <div>
                                                <dt className="font-bold text-gray-900">Shipping updates</dt>
                                                <dd className="mt-3 text-gray-500 space-y-3">
                                                    {/*<p>{product.email}</p>*/}
                                                    {/*<p>{product.phone}</p>*/}
                                                    <button type="button" onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)}  className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        View Details/Review
                                                    </button>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                                <h4 className="sr-only">Status</h4>
                                <p className="text-sm font-medium text-gray-900">
                                    {item?.status} on <time dateTime={item?.paid_at?.slice(0,10)}>{item?.paid_at?.slice(0,10)}</time>
                                </p>
                                <div className="mt-6" aria-hidden="true">
                                    <div className="bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-2 bg-indigo-400 rounded-full"
                                            style={{ width: `calc((${1.3} * 2 + 1) / 12 * 100%)` }}
                                        />
                                    </div>
                                    <div className="hidden sm:grid grid-cols-5 text-sm font-medium text-gray-600 mt-6">
                                        <div className="text-indigo-600">Order placed</div>
                                        <div className={classNames(1 > 0 ? 'text-indigo-800' : '', 'text-center')}>
                                            Processing
                                        </div>
                                        <div className={classNames(1 > 1 ? 'text-indigo-600' : '', 'text-center')}>
                                            Shipped
                                        </div>
                                        <div className={classNames(2 > 1 ? 'text-indigo-600' : '', 'text-center')}>
                                            On The way
                                        </div>
                                        <div className={classNames(1 > 2 ? 'text-indigo-600' : '', 'text-right')}>
                                            Delivered
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>

                    {/* Billing */}
                    <Billing amount={item?.amount} address={address}/>
                </div>
                )}

            </main>
        </div>
    )
}
export default OrderDetail
