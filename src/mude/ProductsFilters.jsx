import {Disclosure} from "@headlessui/react";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductByPageAction, getProductFiltersAction} from "../redux/Actions/productsActions.js";
import {getHeaderCategoriesAction} from "../redux/Actions/headerActions.js";
import {Link, useParams} from "react-router-dom";

const ProductsFilters = ()=>
{
    const dispatch = useDispatch()
    let {category} = useParams()

    const {catenames} = useSelector(state => state.getHeaderCatergoriesReducer)
    const {colors, sizes, tags, lengths, materials, brands, occasions} = useSelector(state => state.getProductsFiltersReducer)

    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [tag, setTag] = useState([]);
    const [brand, setBrand] = useState([]);
    const [occasion, setOccasion] = useState([]);
    const [material, setMaterial] = useState([]);
    const [length, setLength] = useState([]);

    useEffect(() =>
    {
        if(category)
        {
            dispatch(getProductByPageAction(category, 1, color, size, tag, brand, occasion, material, length))
        }

        dispatch(getHeaderCategoriesAction())
        dispatch(getProductFiltersAction())

    }, [dispatch, category, color, size, tag, brand, occasion, material, length]);

    // console.log(size)
    return(
         <form className="hidden lg:block ">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                {catenames?.map((category) =>
                    <li key={category.name}>
                        <Link to={`/mude/guowuchang/${category?.id}`} className="capitalize cursor-pointer hover:text-red-800">{category.name}</Link>
                    </li>
                )}
            </ul>
            {/*{filters.map((section, index) =>*/}
            {/*)}*/}
             <div className={`overflow-y-scroll h-96`}>
                 <Disclosure as="div" className="border-b border-gray-200 py-6 ">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root ">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Colors</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {colors?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.color_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 style={{ backgroundColor: option?.color_name}}
                                                 onChange={() => setColor( previous =>[...previous, option?.id])}
                                                 className={`h-5 w-5  rounded-full text-indigo-600 focus:ring-indigo-500`}
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600">
                                                 {option.color_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Sizes</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {sizes?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.size_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                 onChange={() => setSize(previous =>[...previous, option?.id])}
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.size_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Tags</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {tags?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.tag_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 onChange={() => setTag(previous =>[...previous, option?.id])}

                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.tag_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Brand</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {brands?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.brand_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 onChange={() => setBrand(previous =>[...previous, option?.id])}

                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.brand_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Occasion</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {occasions?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.occasion_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 onChange={() => setOccasion(previous =>[...previous, option?.id])}

                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.occasion_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Material</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {materials?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.material_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 onChange={() => setMaterial(previous =>[...previous, option?.id])}

                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.material_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
                 <Disclosure as="div" className="border-b border-gray-200 py-6">
                     {({ open }) =>
                         <>
                             <h3 className="-my-3 flow-root ">
                                 <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                     <span className="font-medium text-gray-900">Length</span>
                                     <span className="ml-6 flex items-center">
                                          {open ? (
                                              <AiOutlineMinus className="h-5 w-5" aria-hidden="true" />
                                          ) : (
                                              <AiOutlinePlus className="h-5 w-5" aria-hidden="true" />
                                          )}
                                    </span>
                                 </Disclosure.Button>
                             </h3>
                             <Disclosure.Panel className="pt-6 ml-3">
                                 <div className="space-y-4">
                                     {lengths?.map((option, optionIdx) =>
                                         <div key={optionIdx} className="flex items-center">
                                             <input
                                                 name={`${option.id}[]`}
                                                 defaultValue={option?.length_name}
                                                 type="checkbox"
                                                 defaultChecked={option?.checked}
                                                 onChange={() => setLength(previous =>[...previous, option?.id])}
                                                 className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                             />
                                             <label
                                                 htmlFor={`filter-${option.id}-${optionIdx}`}
                                                 className="ml-3 text-sm text-gray-600"
                                             >
                                                 {option.length_name}
                                             </label>
                                         </div>
                                     )}
                                 </div>
                             </Disclosure.Panel>
                         </>
                     }
                 </Disclosure>
             </div>
         </form>
    )
}
export default ProductsFilters
