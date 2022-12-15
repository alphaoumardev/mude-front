import {Fragment, useEffect, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {BsEye, BsFillGridFill} from "react-icons/bs";
import {HiOutlineChevronDown,} from "react-icons/hi";
import {FcClearFilters} from "react-icons/fc";
import MudeMobileFilter from "./MudeMobileFilter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductByPageAction, getSingleProductAction} from "../redux/Actions/productsActions.js";
import ProductsFilters from "./ProductsFilters.jsx";
import { Pagination } from 'antd';
import {useNavigate} from "react-router-dom";
import QuickView from "./QuickView.jsx";
import {getCustomerProfile} from "../redux/Actions/authActions.js";

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

function classNames(...classes) {return classes.filter(Boolean).join(' ')}

export default function Mart()
{
    const navigate = useNavigate()
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [single, setSingle] = useState(null);

    const dispatch = useDispatch()
    const {articles, isLoading, error, totalItems, totalPages, articles_per_page, next, prevPage, }=
        useSelector(state => state.getProductsByPagegReducer)
    const {singleProduct, reviews, count} = useSelector(state => state.getSingleProductReducer)
    const {customer} = useSelector((state) =>state.authReducer)



    useEffect(() =>
    {
        dispatch(getProductByPageAction(currentPage))
        if(single!==null)
        {
            dispatch(getSingleProductAction(single))
            dispatch(getCustomerProfile())
        }
    }, [dispatch, currentPage]);

    console.log(singleProduct, single)
    const onChangePage = (page) => {setCurrentPage(page)}
    return (
        <div className="bg-white">
            <div>
                <MudeMobileFilter mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}/>
                <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-baseline justify-between pt-2 pb-6 border-b border-gray-200">
                        <h1 className="text-2xl font-extrabold  text-gray-900">New Arrivals</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <HiOutlineChevronDown
                                            className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) =>
                                                <Menu.Item key={option.name}>
                                                    {({ active }) =>
                                                        <a  href={option.href}
                                                            className={classNames(option.current ? 'font-medium text-gray-900' : 'text-gray-500',active ? 'bg-gray-100' : '','block px-4 py-2 text-sm')}>
                                                            {option.name}
                                                        </a>
                                                    }
                                                </Menu.Item>
                                            )}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View grid</span>
                                <BsFillGridFill className="w-5 h-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FcClearFilters className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 ">
                            {/* Filters */}
                            <ProductsFilters/>

                            {/* Product grid */}
                            <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:col-span-4 lg:gap-x-8 lg:gap-y-10">
                                {articles?.map((product, index) =>
                                    <div key={index}  className="group text-sm ">
                                        <div onClick={()=>navigate(`/mude/single/product/${product?.id}`)}  className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75">
                                            <img

                                                src={product?.images[0]?.image}
                                                alt={product?.name}
                                                className="w-full h-full object-center object-cover cursor-pointer"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-3">
                                            <h2 onClick={()=>navigate(`/mude/single/product/${product?.id}`)} className=" text-gray-900 cursor-pointer">{product?.name}</h2>

                                            <div className="font-medium text-gray-900"><span className="text-red-500 text-sm">¥</span>{product?.price}</div>
                                            <div className="hidden  sm:block " onClick={()=>{setSingle(product?.id)}}>
                                                <BsEye className="" size={20} onClick={()=>setOpen()}/>
                                            </div>
                                            <QuickView open={open} setOpen={setOpen} singleProduct={singleProduct} count={count} customer={customer}/>
                                        </div>
                                        <ul role="list" className="flex items-center justify-center space-x-3">
                                            {product?.color?.slice(0,4)?.map((color, index) =>
                                                <li key={index} style={{ backgroundColor: color.color_name }} className="w-5 h-5 rounded-full border border-black border-opacity-10">
                                                    <span className="sr-only">{color.color_name}</span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/*<Example/>*/}
                        <div className="flex flex-col items-center justify-center mt-5">
                            <Pagination current={currentPage} hideOnSinglePage={true} onChange={onChangePage} total={totalItems}  />
                        </div>
                            {/*<Paginations />*/}
                    </section>

                </main>

            </div>
        </div>
    )
}
