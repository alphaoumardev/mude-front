import {Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {AiOutlineMenu,} from "react-icons/ai";
import {BsBoxSeam, BsSearch} from "react-icons/bs";
import PopOversInfo from "./PopOversInfo.jsx";
import NotificationsPoper from "./NotificationsPoper.jsx";
import HeaderCart from "./HeaderCart.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getHeaderCategoriesAction} from "../redux/Actions/headerActions.js";
import MobileHeader from "./MobileHeader.jsx";
import {useNavigate} from "react-router-dom";

const Header = ()=>
{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    function classNames(...classes) {return classes.filter(Boolean).join(' ')}

    const dispatch = useDispatch()
    const {catenames} = useSelector(state => state.getHeaderCatergoriesReducer)

    useEffect(() =>
    {
        return () =>
        {
            dispatch(getHeaderCategoriesAction())
        };
    }, [dispatch]);

    // console.log(catenames)
    return(
        <div className="sticky top-0 z-10">
           <MobileHeader open={open} setOpen={setOpen} catenames={catenames}/>

            <nav aria-label="Top" className="relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl">
                    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="h-20 flex items-center justify-between ">
                            <button type="button" className="bg-white p-2 rounded-md text-gray-400 lg:hidden" onClick={() => setOpen(true)}>
                                <span className="sr-only">Open menu on Mobile</span>
                                <AiOutlineMenu className="h-6 w-6" aria-hidden="true" />
                            </button>
                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <a href={`/`}>
                                    <span className="sr-only">Workflow</span>
                                    <img
                                        className="h-10 w-auto"
                                        src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png"
                                        alt="Mude"
                                    />
                                </a>
                            </div>
                            <div className="flex justify-center items-center lg:ml-64">
                                {/*Mude To shop*/}
                                <div className="hidden lg:ml-8 lg:block  ml-4 flex lg:ml-0">
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
                                                            <Popover.Button  className={classNames(open ? 'border-indigo-600 text-indigo-600': 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px')}>
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
                                                                                {category?.featured?.map((item, index) => (
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

                                        <a href={"/mude/contact"} className="flex items-center text-sm font-bold text-gray-700 hover:text-gray-800">Contact Us</a>

                                    </div>
                                </Popover.Group>
                            </div>


                            <div className="ml-auto flex items-center">
                                {/*<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">*/}
                                {/*    <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">*/}
                                {/*        Sign in*/}
                                {/*    </a>*/}
                                {/*    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />*/}
                                {/*    <a href="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">*/}
                                {/*        Sign up*/}
                                {/*    </a>*/}
                                {/*</div>*/}

                                {/*<div className="hidden lg:ml-8 lg:flex">*/}
                                {/*    <a href="/" className="text-gray-700 hover:text-gray-800 flex items-center">*/}
                                {/*        <img*/}
                                {/*            src="https://tailwindui.com/img/flags/flag-canada.svg"*/}
                                {/*            alt=""*/}
                                {/*            className="w-5 h-auto block flex-shrink-0"*/}
                                {/*        />*/}
                                {/*        <span className="ml-3 block text-sm font-medium">CAD</span>*/}
                                {/*        <span className="sr-only">, change currency</span>*/}
                                {/*    </a>*/}
                                {/*</div>*/}

                                {/* Search */}
                                <div className="flex lg:ml-2 ">
                                    <span onClick={()=>navigate("/mude/guowuchang")} className="p-2 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">Search</span>
                                        <BsSearch className="w-4 h-4 text-black" aria-hidden="true" />
                                    </span>
                                </div>

                                {/* Cart */}
                                <div className="ml-2 flow-root">
                                    <HeaderCart/>
                                </div>
                                <div className="ml-2 flow-root ">
                                    <BsBoxSeam/>
                                </div>
                                <div className="ml-2 flow-root ">
                                    <NotificationsPoper/>
                                </div>
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
