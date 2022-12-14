import { Fragment,  } from 'react'
import { Popover,  Transition} from '@headlessui/react'
import {AiOutlineShopping} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {Badge} from "antd";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]
const HeaderCart = ({cart_count, cartItem})=>
{
    const navigate = useNavigate()
    return (
        <div>
            <Popover className="ml-1 flow-root text-sm lg:relative">
                <Popover.Button className="group -m-2 p-2 sm:m-2 flex items-center">
                    {/*<Space size="middle">*/}
                    <div>
                        <Badge size="small" count={cart_count}>
                            <div>
                                <AiOutlineShopping  size={22} />
                            </div>
                        </Badge>
                    </div>

                    {/*</Space>*/}
                    {/*<div className="relative">*/}
                    {/*    <AiOutlineShopping*/}
                    {/*        className="flex-shrink-0 h-7 w-7 text-gray-400 group-hover:text-gray-500"*/}
                    {/*        aria-hidden="true"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*<span className="absolute ml-2.5 mt-1.5 p-0  text-red-600  rounded-full text-xs font-bold text-gray-700 ">{cart_count}</span>*/}
                    {/*<span className="sr-only">items in cart, view bag</span>*/}
                </Popover.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Panel className="absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
                        <h2 className="sr-only">Shopping Cart</h2>

                        <form className="max-w-2xl mx-auto px-4">
                            <ul role="list" className="divide-y divide-gray-200">
                                {cartItem.map((product) => (
                                    <li key={product.id} className="py-6 flex items-center" onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)}>
                                        <img
                                            src={`http://127.0.0.1:8000/${product?.product?.images[0]?.image}`}
                                            alt={""}
                                            className="flex-none w-16 h-16 rounded-md border border-gray-200"
                                        />
                                        <div className="ml-4 flex-auto cursor-pointer">
                                            <h3 onClick={()=>navigate(`/mude/single/product/${product?.product?.id}`)} className="font-medium text-gray-700 hover:text-gray-800">
                                                {product?.product?.name}
                                            </h3>
                                            <div className="mt-1 flex text-sm ">
                                                {product?.color ? (<p style={{ backgroundColor: product?.color }} className="w-5 h-5 rounded-full border border-black border-opacity-10"></p>):null}
                                                {product?.size ? (<p className="ml-4 pl-4 border-l border-gray-200 text-black uppercase">{product?.size}</p>) : null}
                                            </div>
                                            <p className="mt-1 text-sm font-bold text-red-700"><span className="font-thin">¥</span>{product?.total}</p>

                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <button onClick={()=>navigate("/mude/checkout")}
                                type="button"
                                className="w-full flex justify-center bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Checkout
                            </button>

                            <p className="mt-6 text-center">
                                <button onClick={()=>navigate("/mude/cart")} type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    View Shopping Bag
                                </button>
                            </p>
                        </form>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}
export default HeaderCart
