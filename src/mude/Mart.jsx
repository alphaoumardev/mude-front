import {Fragment, useEffect, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {BsBookmarkHeartFill, BsFillGridFill, BsSearch} from "react-icons/bs";
import {HiOutlineChevronDown,} from "react-icons/hi";
import {FcClearFilters} from "react-icons/fc";
import MudeMobileFilter from "./MudeMobileFilter.jsx";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllProductsByPage,
    getProductByPageAction,
    getProductBySearchAction,
} from "../redux/Actions/productsActions.js";
import ProductsFilters from "./ProductsFilters.jsx";
import {Pagination} from 'antd';
import {useNavigate, useParams} from "react-router-dom";
import {HeartOutline} from "heroicons-react";
import {AiFillHeart} from "react-icons/ai";
import {addToWishlist, getWishlistItems} from "../redux/Actions/wishlistAction.js";

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const breadcrumbs = [{ id: 1, name: 'Men', href: '#' }]

function classNames(...classes) {return classes.filter(Boolean).join(' ')}

export default function Mart()
{
    const navigate = useNavigate()
    let {category} = useParams()
    const {customer} = useSelector(state=> state.authReducer)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch()
    const {articles,  totalItems,  }=useSelector(state => state.getProductsByPagegReducer) //isLoading, error,totalPages, articles_per_page, next, prevPage,
    const {wishlistItem} = useSelector(state => state.wishlistReducer)

    const [search, setSearch] = useState(null);
    const [color, size, tag, brand, occasion, material, length] = useState([])


    useEffect(() =>
    {
        if(category)
        {
            dispatch(getProductByPageAction(category, currentPage, color, size, tag, brand, occasion, material, length))
        }
        else
        {
            dispatch(getAllProductsByPage(currentPage))
        }
        if(search)
        {
            dispatch(getProductBySearchAction(search))
        }
        if(customer)
        {
            dispatch(getWishlistItems())
        }
    }, [dispatch, currentPage, search, category]);
    const searchedData = (value)=>
    {
        setSearch(value)
    }

    const onChangePage = (page) => {setCurrentPage(page)}
    return (
        <div className="bg-white sm:flex sm:justify-center sm:items-center">
            <div className="sm:w-11/12">
                <MudeMobileFilter mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen}/>
                <div className="border-b border-gray-200 ">
                    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol role="list" className="flex items-center space-x-4 py-4">
                            {breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="mr-4 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </a>
                                        /
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    New Arrivals
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className=" bg-gray-800 rounded-full px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="lg:w-7/12 block lg:ml-96 rounded-full">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative  ">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <BsSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                id="search"
                                name="search"
                                onChange={(e)=>searchedData(e.target.value)}
                                className="block w-full  border border-gray-300 rounded-full py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div>

                <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative  flex items-baseline justify-between pt-2 pb-6 border-b border-gray-200">
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
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-8 ">
                            {/* Filters */}
                            <div >
                                <ProductsFilters/>
                            </div>

                            {/* Product grid */}
                            <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:col-span-4 lg:gap-x-5 lg:gap-y-5">
                                {articles?.map((product, index) =>
                                    <div key={index}  className="group text-sm ">
                                        <div onClick={()=>navigate(`/mude/single/product/${product?.id}`)}  className="w-full aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75">
                                            <img
                                                // src={`http://127.0.0.1:8000/${product?.images[0]?.image}`}
                                                //TODO: REVIEW THE THE REASON
                                                src={product?.images[0]?.image}
                                                alt={product?.name}
                                                className="w-full h-full object-center object-cover cursor-pointer"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between px-3 py-3">
                                            <h2 onClick={()=>navigate(`/mude/single/product/${product?.id}`)} className=" text-gray-900 cursor-pointer">{product?.name}</h2>

                                            <div className="font-medium text-gray-900"><span className="text-red-500 text-sm">¥</span>{product?.price}</div>
                                            <div className=" " >
                                                {/*{wishlistItem?.product?.id?.find(index => index?.id===product?.id)?*/}
                                                {/*<AiFillHeart size={17} color={"red"}/>:*/}
                                                <HeartOutline size={17} onClick={()=>dispatch(addToWishlist(product?.id, customer?.id))}/>
                                                {/*}*/}
                                            </div>
                                        </div>
                                        <ul role="list" className="flex items-center justify-center space-x-3">
                                            {product?.color?.slice(0,3)?.map((color, index) =>
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
