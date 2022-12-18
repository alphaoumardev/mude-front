import {Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {AiOutlineMenu} from "react-icons/ai";
import {BsBoxSeam, BsSearch} from "react-icons/bs";
import PopOversInfo from "./PopOversInfo.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getHeaderCategoriesAction} from "../redux/Actions/headerActions.js";
import MobileHeader from "./MobileHeader.jsx";
import {useNavigate} from "react-router-dom";
import {getWishlistItems} from "../redux/Actions/wishlistAction.js";
import {getCartItems} from "../redux/Actions/cartAction.js";
import {getCustomerProfile} from "../redux/Actions/authActions.js";
import Logo from "../assets/logo.png";
import {getMyOrderAction} from "../redux/Actions/orderAction.js";
import HeaderCart from "./HeaderCart.jsx";
import {Badge} from "antd";

const ca = {
    featured: [
        {
            name: 'New Arrivals',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
            name: 'Basic Tees',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
    ]
}

const Header = ()=>
{
    let date = new Date();
    // const dispatch = useDispatch()
    let month = (date.getMonth()+1);
    let day = date.getDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    //
    let token_ = localStorage.getItem('token')
    let storage_profile = JSON.parse(localStorage.getItem('profile'));
    let expiration_date = storage_profile?.expiry?.slice(0,17).replaceAll("-","").replaceAll(":",'').replace('T','')
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    hour = hour < 10 ? '0'+hour : hour;
    minutes = minutes < 10 ? '0'+minutes : minutes;

    let current_date = date.getFullYear()+""+month+""+ day+""+hour+""+minutes

    if((parseInt(current_date)>=parseInt(expiration_date)) || (token_===null))
    {
        localStorage.clear()
        // navigate('/login')
    }
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    function classNames(...classes) {return classes.filter(Boolean).join(' ')}

    const dispatch = useDispatch()
    const {catenames} = useSelector(state => state.getHeaderCatergoriesReducer)

    const {customer} = useSelector((state) =>state.authReducer)
    const {orderItem} = useSelector(state => state.getMyorderReducer)
    const {cart_item, order_total, cart_count} = useSelector((state) =>state.cartReducer)
    const {wishlist_count} = useSelector(state => state.wishlistReducer)

    const cartItem = Array.from(cart_item)
    let orderItemCount = orderItem.length


    useEffect(() =>
    {
        dispatch(getCustomerProfile())

        dispatch(getHeaderCategoriesAction())
        dispatch(getWishlistItems())
        dispatch(getCartItems())
        dispatch(getMyOrderAction())
    }, [dispatch]);

    // console.log(open)
    return(


        <div className="sticky top-0 z-50">

            <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl">

                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="h-20 flex items-center justify-between " >


                        <button type="button" className="bg-white p-1 rounded-md  lg:hidden" onClick={() => setOpen(true)} >
                            <span className="sr-only">Open menu on Mobile</span>
                            <AiOutlineMenu className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>

                        <MobileHeader open={open} setOpen={setOpen} catenames={catenames}/>

                        {/*Logo*/}
                        <div className="ml-20 flex justify-center items-center md:ml-0">
                            <a href={`/`}>
                                <span className="sr-only">Mudee</span>
                                <img
                                    className="h-10 w-auto"
                                    src={Logo}
                                    alt="Mude"
                                />
                            </a>
                        </div>
                        <div className="flex justify-center items-center lg:ml-64">
                            {/*Mude To shop*/}
                            <div className="hidden uppercase lg:ml-8 lg:block  ml-4 flex lg:ml-0">
                                <a href={`/mude/guowuchang`}>Mude</a>
                            </div>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="h-full flex space-x-8">
                                    {catenames?.map((category, index) => (
                                        <Popover key={index} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button  className={classNames(open ? 'border-indigo-600 text-indigo-600': 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px uppercase')}>
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute top-full inset-x-0 bg-white text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                                                            {/* Fake border when menu is open */}
                                                            <div className="absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8" aria-hidden="true">
                                                                <div className={classNames(open ? 'bg-gray-200' : 'bg-transparent', 'w-full h-px transition-colors ease-out duration-200')}/>
                                                            </div>

                                                            <div className="relative">
                                                                <div className="max-w-7xl mx-auto px-8">
                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                                                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                                            {ca?.featured?.map((item, index) => (
                                                                                <div key={index} className="group relative text-base sm:text-sm">
                                                                                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                                        <img
                                                                                            src={item.imageSrc}
                                                                                            alt={item.imageAlt}
                                                                                            className="object-center object-cover"
                                                                                        />
                                                                                    </div>
                                                                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                                                        {item.name}
                                                                                    </a>
                                                                                    <p aria-hidden="true" className="mt-1">
                                                                                        Mart now
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                                                            {category?.subcates?.map((section,index) => (
                                                                                <div key={index}>
                                                                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul aria-labelledby={`${section.name}-heading`}  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4" role="list">
                                                                                        {section?.subcates?.map((item, index) =>
                                                                                            <li key={index} className="flex">
                                                                                                <a href={item.href} className="hover:text-gray-800">
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        )}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    <a href={"/mude/contact"} className="flex uppercase items-center text-sm font-bold text-gray-700 hover:text-gray-800">Contact Us</a>

                                </div>
                            </Popover.Group>
                        </div>

                        <div className="flex items-center">
                            {/* Search */}
                            <div className="flex lg:ml-2 cursor-pointer">
                                <span onClick={()=>navigate("/mude/guowuchang")} className="p-2 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Search</span>
                                    <BsSearch className="w-4 h-4 text-black" aria-hidden="true" />
                                </span>
                            </div>

                             {/*Cart*/}
                            {cartItem?.length>0&&
                            <div className="ml-2 flow-root cursor-pointer">
                                <HeaderCart cart_count={cart_count} cartItem={cartItem}/>
                            </div>}
                            {orderItemCount>0&&
                            <div className="ml-2 flow-root cursor-pointer " onClick={()=>navigate("/mude/order/detail")}>
                                <Badge size="small" count={orderItemCount} showZero={false}>
                                    <div>
                                        <BsBoxSeam  size={20} />
                                    </div>
                                </Badge>
                            </div>}

                            <div className="ml-2 flow-root">
                                <PopOversInfo/>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>


        </div>

    )
}
export default Header
