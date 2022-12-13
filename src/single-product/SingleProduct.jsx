import {useEffect, useState} from "react";
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'

import {BsHeart} from "react-icons/bs";
import {AiOutlineMinus,AiFillStar, AiOutlinePlus} from "react-icons/ai";
import ByCategory from "../components/ByCategory.jsx";
import RelatedPurchases from "./RelatedPurchases.jsx";
import Policies from "./Policies.jsx";
import Reviews from "./Reviews.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {getSingleProductAction} from "../redux/Actions/productsActions.js";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/Actions/cartAction.js";
import {getCustomerProfile} from "../redux/Actions/authActions.js";

const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
        {
            id: 1,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 2,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 3,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        {
            id: 4,
            name: 'Angled view',
            src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
            alt: 'Angled front view with bag zipped and handles upright.',
        },
        // More images...
    ],
    colors: [
        { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-red-700' },
        { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-red-400' },
        { name: 'Washed Gray', bgColor: 'bg-red-500', selectedColor: 'ring-red-500' },
        { name: 'Gray', bgColor: 'bg-blue-500', selectedColor: 'ring-red-500' },

    ], sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: 'Features',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        {
            name: 'Usage',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
        {
            name: 'Returns',
            items: [
                'Multiple strap configurations',
                'Spacious interior with top zip',
                'Leather handle and tabs',
                'Interior dividers',
                'Stainless strap loops',
                'Double stitched construction',
                'Water-resistant',
            ],
        },
    ],
}

function classNames(...classes) {return classes.filter(Boolean).join(' ')}

const SingleProduct =()=>
{
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[1])

    const {customer} = useSelector((state) =>state.authReducer)
    const {singleProduct} = useSelector(state => state.getSingleProductReducer)

    const [rating, setRating] = useState(3);
    const [hoverRating, setHoverRating] = useState(-1);

    const addItemToCart = (e)=>
    {
        e.preventDefault()
        dispatch(addToCart(id, selectedColor, selectedSize, customer?.id, 1))
        navigate('/mude/cart')
    }

    useEffect(() =>
    {
        dispatch(getSingleProductAction(id))
        dispatch(getCustomerProfile())
    }, [dispatch]);

    // console.log(id, customer?.id)
    return(
        <main className="max-w-7xl mx-auto sm:pt-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-none">
                {/* Product */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <Tab.Group as="div" className="flex flex-col-reverse">
                        {/* Image selector */}
                        <div className=" mt-6 w-full max-w-2xl  sm:block lg:max-w-none">
                            <Tab.List className="grid grid-cols-4 gap-x-8">
                                {singleProduct?.images?.map((itemImage, index) => (
                                    <Tab key={index} className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50">
                                        {({ selected }) =>
                                            <>
                                                <span className="sr-only">None</span>
                                                    <span className="absolute inset-0 rounded-md overflow-hidden">
                                                    <img src={`http://127.0.0.1:8000/${itemImage?.image}`} alt={""} className="w-full h-full object-center object-cover" />
                                                </span>
                                                <span className={classNames(selected ? 'ring-indigo-500' : 'ring-transparent','absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none')} aria-hidden="true"/>
                                            </>
                                        }
                                    </Tab>
                                ))}
                            </Tab.List>
                        </div>

                        <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                            {singleProduct?.images?.map((itemImage, index) => (
                                <Tab.Panel key={index}>
                                    <img
                                        src={`http://127.0.0.1:8000/${itemImage?.image}`}
                                        alt={''}
                                        className="w-full h-full object-center object-cover sm:rounded-lg"
                                    />
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{singleProduct?.name}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900"><b className="text-red-500 text-xl">¥</b>{singleProduct?.price}</p>
                        </div>

                        {/* Reviews */}
                        <div className="mt-3">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) =>
                                        <AiFillStar key={rating} className={classNames(product.rating > rating ? 'text-yellow-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0')} aria-hidden={"true"}/>
                                    )}
                                    <span>(23)</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <div className="text-base text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: singleProduct?.description }}/>
                        </div>

                        <form className="mt-6" onSubmit={addItemToCart}>
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm text-gray-600">Color</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {singleProduct?.color?.map((colorItem, index) => (
                                            <RadioGroup.Option
                                                key={index}
                                                value={colorItem?.color_name}
                                                className={({ active, checked }) =>
                                                    classNames("ring-black", active && checked ? 'ring ring-offset-1' : '',!active && checked ? 'ring-2' : '','-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none')}>
                                                <RadioGroup.Label as="p" className="sr-only">
                                                    {colorItem?.color_name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    style={{ backgroundColor: colorItem?.color_name,  }}
                                                    className={classNames(`bg-${colorItem?.color_name}-500`,'h-8 w-8 border border-black border-opacity-10 rounded-full')}/>
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                            {/*sizes*/}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                </div>
                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-2">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
                                        {singleProduct?.size?.map((size, index) => (
                                            <RadioGroup.Option
                                                key={index}
                                                value={size?.size_name}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        'cursor-pointer focus:outline-none',
                                                        active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
                                                        checked
                                                            ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                                                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="p">{size?.size_name}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            {/*add to bag*/}
                            <div className="mt-10 flex sm:flex-col1">
                                <button type="submit" className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                                    Add to bag
                                </button>
                                <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                    <BsHeart className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                    <span className="sr-only">Add to favorites</span>
                                </button>
                            </div>
                        </form>
                        <section aria-labelledby="details-heading" className="mt-12">
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>

                            <div className="border-t divide-y divide-gray-200">
                                {product.details.map((detail, index) =>
                                    <Disclosure as="div" key={index}>
                                        {({ open }) =>
                                        <>
                                        <h3>
                                            <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                            <span className={classNames(open ? 'text-indigo-600' : 'text-gray-900','text-sm font-medium')}>
                                                {detail.name}
                                            </span>
                                            <span className="ml-6 flex items-center">
                                            {open ? <AiOutlineMinus className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500" aria-hidden="true"/>:
                                                <AiOutlinePlus className="block h-6 w-6 text-gray-400 group-hover:text-gray-500" aria-hidden="true"/>
                                            }
                                          </span>
                                        </Disclosure.Button>
                                        </h3>
                                            <Disclosure.Panel as="div" className="pb-2 prose prose-sm">
                                                <ul role="list">
                                                    {detail.items.map((item, index) =><li key={index}>{item}</li>)}
                                                </ul>
                                            </Disclosure.Panel>
                                        </>}
                                    </Disclosure>
                                )}
                            </div>
                        </section>
                    </div>
                </div>

                <section aria-labelledby="related-heading" className="mt-0 border-t border-gray-200 py-16 px-4 sm:px-0">
                    <RelatedPurchases/>
                    <Reviews/>
                    <ByCategory/>
                    <Policies/>
                </section>
            </div>
        </main>
    )
}
export default SingleProduct
