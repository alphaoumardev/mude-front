import { Fragment, useState } from 'react'
import {Dialog, Disclosure, Popover, RadioGroup, Tab, Transition} from '@headlessui/react'
import {AiFillStar, AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import { StarIcon } from '@heroicons/react/24/solid'
import {BsEye, BsHeart} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {Alert} from "antd";
import {addToCart} from "../redux/Actions/cartAction.js";
import {useDispatch} from "react-redux";

const product = {
    name: "Women's Basic Tee",
    price: '$32',
    rating: 3.9,
    reviewCount: 512,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
    imageAlt: "Back of women's Basic Tee in black.",
    colors: [
        { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
        { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: false },
    ],
}

function classNames(...classes) {return classes.filter(Boolean).join(' ')}


const QuickView = ({open, setOpen, singleProduct, count, customer})=>
{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [open, setOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const addItemToCart = (e)=>
    {
        if(singleProduct?.color?.length>0&&selectedColor===null)
        {
            return(<Fragment> <Alert message="Select a Color" type="warning" showIcon  /></Fragment>)
        }
        else if(singleProduct?.size?.length>0&&selectedSize===null)
        {
            return(<Fragment> <Alert message="Select the size" type="warning" showIcon  /></Fragment>)
        }
        else
        {
            e.preventDefault()
            dispatch(addToCart(id, selectedColor, selectedSize, customer?.id, 1))
            navigate('/mude/cart')
        }

    }
    return (
        <>
            <Popover className="relative">
                <Popover.Button>
                    <BsEye className="" size={20} onClick={()=>setSingle(product?.id)}/>
                </Popover.Button>

                <Popover.Panel className="absolute z-10">
                    {/*<div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>*/}

                    <div className="block text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                        <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button
                                type="button"
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                onClick={() => setOpen(false)}
                            >
                                <span className="sr-only">Close</span>
                                <AiOutlinePlus className="h-6 w-6 rotate-45 hover:text-red-600" title="close" aria-hidden="true" />
                            </button>
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
                                                    <AiFillStar key={rating} className={classNames(4 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0')} aria-hidden={"true"}/>
                                                )}
                                                <span>({count})</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="sr-only">Description</h3>
                                        <div className="text-base text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: singleProduct?.description }}/>
                                    </div>

                                    <form className="mt-6" onSubmit={addItemToCart}>
                                        {/* Colors */}
                                        {singleProduct?.color?.length>0 &&
                                            <div>
                                                <h3 className="text-sm text-gray-600">Color</h3>

                                                <RadioGroup value={selectedColor} required onChange={setSelectedColor} className="mt-2">
                                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                                    <div className="flex items-center space-x-3">
                                                        {singleProduct?.color?.map((colorItem, index) => (

                                                            <RadioGroup.Option
                                                                required
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
                                            </div>}
                                        {/*sizes*/}
                                        {singleProduct?.size?.length>0 &&
                                            <div className="mt-10">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                                                </div>
                                                <RadioGroup value={selectedSize} required onChange={setSelectedSize} className="mt-2">
                                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                                    <div className="grid grid-cols-5 gap-3 sm:grid-cols-8">
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
                                            </div>}

                                        {/*add to bag*/}
                                        <div className="mt-10 flex sm:flex-col1">
                                            {customer?
                                                <button type="submit"  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"

                                                        disabled={''}>
                                                    Add to bag
                                                </button>:
                                                <button type="button" onClick={()=>navigate("/login")}  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                                                    Login
                                                </button>
                                            }
                                            <button type="button" className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                                <BsHeart className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                                                <span className="sr-only">Add to favorites</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*</div>*/}
                    {/*<QuickView open={open} setOpen={setOpen} singleProduct={singleProduct} count={count} customer={customer}/>*/}
                </Popover.Panel>
            </Popover>
        </>

    )
}
export default QuickView

