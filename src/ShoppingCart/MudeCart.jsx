import {RiDeleteBin6Line,} from "react-icons/ri";
import {BsFillPatchQuestionFill, } from "react-icons/bs";
import {useNavigate,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,} from "react";
import {getCartItems, removeItemFromCart, updateCartItem} from "../redux/Actions/cartAction.js";
import {getAddressAction} from "../redux/Actions/orderAction.js";
import {Popconfirm} from 'antd';
import {AiOutlineQuestionCircle} from "react-icons/ai";
import Empty from "../assets/emptycart.png"
import EditAddress from "../orders/EditAddress.jsx";
const MudeCart = ()=>
{
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {cart_item, order_total, } = useSelector((state) =>state.cartReducer)//cart_count
    const {address} = useSelector(state => state.getShippingAddressReducer)


    let cartItems = Array.from(cart_item)

    useEffect(() =>
    {
        //if there is a customer in actions store
        dispatch(getCartItems())
        dispatch(getAddressAction())

    }, [dispatch]);

    return(
        <div>
            {/*<MudeeCA/>*/}

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>
            {cartItems?.length > 0?
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                <section aria-labelledby="cart-heading" className="lg:col-span-7">
                    <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                    </h2>
                    <ul role="list" className="border-b border-gray-200 divide-y divide-gray-200">
                        {cartItems?.map((product, productIdx) => (
                            <li key={productIdx} className="flex py-2 sm:py-2">

                                <div className="flex-shrink-0">
                                    <img
                                        src={`http://127.0.0.1:8000/${product?.product?.images[0]?.image}`}
                                        alt={''}
                                        className="w-20 h-20 rounded-md object-center object-cover sm:w-20 sm:h-20"
                                    />
                                </div>

                                <div className="ml-4 flex-1 flex  justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between ">
                                                <h3 className="text-sm">
                                                    <p onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)} className="font-medium text-gray-700 hover:text-gray-800">
                                                        {product?.product?.name}
                                                    </p>
                                                </h3>
                                            </div>
                                            <div className="mt-1 flex text-sm ">
                                                {product?.color ? (<p style={{ backgroundColor: product?.color }} className="w-5 h-5 rounded-full border border-black border-opacity-10"></p>):null}
                                                {product?.color ? (<p className="ml-4 pl-4 border-l border-gray-200 text-black uppercase hidden">{product?.color}</p>):null}
                                                {product?.size ? (<p className="ml-4 pl-4 border-l border-gray-200 text-black uppercase">{product?.size}</p>) : null}
                                            </div>
                                            <p className="mt-1 text-sm font-bold text-red-700"><span className="font-thin">¥</span>{product?.total}</p>
                                        </div>

                                    </div>
                                    <div className=" top-0 flex items-center justify-center right-0">
                                        <div className="mr-3  sm:mt-0 sm:pr-9">
                                            <div className="pr-8 flex">
                                                <span className="font-semibold text-xl" onClick={()=>product?.quantity-1}>-</span>
                                                <input type="number"
                                                       onChange={(e)=>dispatch(updateCartItem(product?.id, e.target.value, product?.product?.id ))}
                                                       defaultValue={product?.quantity}
                                                       min={1}
                                                       className="focus:outline-1 bg-gray-50 border h-7 w-8 sm:w-14  rounded text-sm px-2 mx-2"
                                                       />
                                                <span className="font-semibold text-xl" onClick={()=>product?.quantity+1}>+</span>
                                            </div>
                                        </div>

                                        <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Remove</span>
                                            <Popconfirm
                                                title="Are you sure to delete this article?"
                                                onConfirm={() => dispatch(removeItemFromCart(product?.id))}
                                                okText="Yes"
                                                cancelText="No"
                                                icon={ <span><AiOutlineQuestionCircle color={"red"} size={20}/></span>}
                                            >
                                                <span><RiDeleteBin6Line className="h-5 w-5 rotate-45 " color="red" aria-hidden="true" /></span>
                                            </Popconfirm>
                                        </button>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Order summary */}
                <section aria-labelledby="summary-heading"   className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                >
                    <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                        Order summary
                    </h2>

                    <dl className="mt-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <EditAddress address={address}/>
                            </div>
                            <dt className="text-sm text-gray-600 flex-col justify-center items-center">
                                <div className="">
                                    <span className="text-xl text-black font-bold">{address?.nickname}</span> {address?.customer?.contact}
                                </div>
                                <div>
                                {address?.country +" "+address?.state+" "+address?.city}
                                </div>
                                <div>
                                    {address?.street +" "+address?.details+" "+address?.zip}
                                </div>
                            </dt>

                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm font-bold text-gray-900"><span className={"font-thin text-sm"}>¥</span>{order_total}</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex items-center text-sm text-gray-600">
                                <span>Shipping estimate</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how shipping is calculated</span>
                                    <BsFillPatchQuestionFill className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900"><span className={"font-thin text-sm"}>¥</span>15.00</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600">
                                <span>Tax estimate</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how tax is calculated</span>
                                    <BsFillPatchQuestionFill className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900"><span className={"font-thin text-sm"}>¥</span>10.32</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900">Order total</dt>
                            <dd className="text-base font-bold text-xl text-red-600"><span className={"font-thin text-sm"}>¥</span>{order_total + 25.32}</dd>
                        </div>
                    </dl>

                    <div className="mt-6">
                        <button onClick={()=>navigate("/mude/checkout")} type="button" className="w-full text-center text-2xl bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                            Checkout
                        </button>
                    </div>
                </section>
            </div>:
            <div onClick={()=>navigate("/mude/guowuchang")} className="flex cursor-pointer items-center justify-center ">
                <img src={Empty} alt={""}/>
            </div>}
        </div>
        </div>
    )
}
export default MudeCart
