import React, {useContext, useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle.jsx";
import {
  Card,
  CardBody,
  Label,
  Button,
  Select,
} from "@windmill/react-ui";
import {HomeOutline} from "heroicons-react";
import {
  AiFillFileAdd,
  AiFillLayout,
  AiOutlineFile,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addProductAction, getProductCategoryAction} from "../redux/Actions/adminAction.js";
import {Disclosure} from "@headlessui/react";
import {getProductFiltersAction} from "../redux/Actions/productsActions.js";
const FormTitle = ({ children }) =>
{
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};


const AddProduct = () =>
{
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.getProductCategoriesReducer)
  const {colors, sizes, tags, lengths, materials, brands, occasions} = useSelector(state => state.getProductsFiltersReducer)

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(20);
  const [status, setStatus] = useState('');
  const [stock, setStock] = useState('');
  const [onsale, setOnsale] = useState('');
  const [discount, setDiscount] = useState('');

  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [tag, setTag] = useState([]);
  const [brand, setBrand] = useState([]);
  const [occasion, setOccasion] = useState([]);
  const [material, setMaterial] = useState([]);
  const [length, setLength] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() =>
  {
    dispatch(getProductCategoryAction())
    dispatch(getProductFiltersAction())
    // closeSidebar()
  }, [dispatch])
  const submitProduct = (product)=>
  {
    product.preventDefault()
    dispatch(addProductAction(category, brand, name, sku, description,
        price, status, stock, onsale, discount,
        color, size, tag, length, material, occasion, images))
  }

  console.log(category, brand, name, sku, description,
      price, status, stock, onsale, discount,
      color, size, tag, length, material, occasion)
  // const options = ['Option 1', 'Option 2', 'Option 3'];
  // const [selectedOptions, setSelectedOptions] = useState([]);
  //
  // const handleChange = (event) =>
  // {
  //   setSelectedOptions(Array.from(event.target.selectedOptions, (option) => option.value));
  // }
  return (
      <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Main>
            <div>
              <PageTitle>Add New Product</PageTitle>

              {/* Breadcum */}
              <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                  <HomeOutline className="w-5 h-5" aria-hidden="true" />
                  <NavLink to="/app/dashboard" className="mx-2">
                    Dashboard
                  </NavLink>
                </div>
                {">"}
                <p className="mx-2">Add new Product</p>
              </div>

              <form onSubmit={submitProduct} className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
                <Card className="row-span-2 md:col-span-2">
                  <CardBody>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <div className="flex items-center space-x-3 sm:pl-4">

                        <select id="underline_select" onChange={(e)=>setCategory(e.target.value)} title="Choose a topic or add one" required={true}
                                className=" border border-b border-gray-900 bg-gray-100 p-6 rounded-lg
                                flex items-center text-center capitalize font-bold cursor-pointer block
                                px-2 pr-8 w-full text-sm text-gray-900 border-b-1 border-0 appearance-none bg-transparent dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option> Select Product Category </option>
                          {categories?.map((item, index)=>
                              <optgroup 　key={index} label={item.name}>
                                {item?.subcates?.map((subcategory, i) =>
                                    <option key={i} value={subcategory?.id}>{subcategory.name}</option>
                                )}
                              </optgroup>
                          )}

                        </select>
                        {/*<AiOutlineArrowDown className={"w-5"}/>*/}

                      </div>
                      {/*<label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> </label>*/}
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center flex items-center justify-center">
                            <AiOutlineFile className="flex justify-center items-center" size={35}/>
                            <div className="flex text-sm text-gray-600">
                              <label htmlFor="file-upload"  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload the product images </span>
                                <input id="file-upload" name="file-upload"
                                       onChange={(e)=>setImages(e.target.files)}
                                       type="file" className="sr-only"/>
                              </label>
                            </div>
                            <p className="text-xs text-gray-500"> PNG, JPG, GIF up to 10MB</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Product Name(Title)
                        </label>
                        <input
                            required={true}
                            onChange={(e)=>setName(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            role={"textbox"}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Product Sku
                        </label>
                        <input
                            required={true}
                            onChange={(e)=>setSku(e.target.value)}
                            // defaultValue={customer?.user?.username}
                            type="number"
                            name="sku"
                            id="sku"
                            minLength={12}
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Price
                        </label>
                        <input
                            onChange={(e)=>setPrice(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            defaultValue={20}
                            required={true}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Discount
                        </label>
                        <input
                            required={true}
                            onChange={(e)=>setDiscount(e.target.value)}
                            defaultValue={1}
                            type="number"
                            name="sku"
                            id="sku"
                            min={0.1}
                            max={1}
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Stock
                        </label>
                        <input
                            required={true}
                            onChange={(e)=>setStock(e.target.value)}
                            defaultValue={10}
                            type="number"
                            name="stock"
                            id="stock"
                            max={1}
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Brand Name
                        </label>
                        <select
                            required={true}
                            id="location"
                            name="location"
                            className="border-2  mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                            onChange={(e)=>setBrand(e.target.value)}
                        >
                          {brands?.map((option, optionIdx) =>
                              <option key={optionIdx} value={option?.id}>{option.brand_name}</option>
                          )}
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select
                            required={true}
                            id="location"
                            name="location"
                            className="border-2 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                            onChange={(e)=>setStatus(e.target.value)}
                        >
                          <option value={"Unknown"}>Unknown</option>
                          <option value={"Yes"}>Yes</option>
                          <option value={"No"}>No</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-2 ">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          On Sale
                        </label>
                        <select
                            required={true}
                            id="location"
                            name="location"
                            className=" border-2 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                            onChange={(e)=>setOnsale(e.target.value)}
                        >
                          <option value={"Regular"}>Regular</option>
                          <option value={"New"}>New</option>
                          <option value={"Onsale"}>Onsale</option>
                        </select>
                      </div>
                    </div>

                    <FormTitle>Short description</FormTitle>
                    <Label>
                      <textarea
                          required={true}
                          onChange={(e)=>setDescription(e.target.value)}
                          rows="4"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </Label>

                    {/*<ProductsFilters/>*/}

                    <div className="hidden lg:block ">
                      <h3 className="sr-only">Variants</h3>

                      <div className={`overflow-y-scroll h-96 flex  gap-10`}>
                        <div className="w-6/12">
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
                        </div>
                        <div className="w-6/12">
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
                      </div>
                    </div>
                    <div className="w-full">
                      <Button size="large" iconLeft={AiFillFileAdd} className="mt-5">
                        Add Product
                      </Button>
                    </div>
                  </CardBody>
                </Card>
                <Card className="h-48">
                  <CardBody>
                    <div className="flex mb-8">
                      <Button layout="primary" className="mr-3" iconLeft={AiFillFileAdd}>
                        Publish
                      </Button>
                      <Button layout="link" iconLeft={AiFillLayout}>
                        Save as Draft
                      </Button>
                    </div>
                    <Label className="mt-4">
                      <FormTitle>Select Product Category</FormTitle>
                      <Select className="mt-1">
                        <option>Electronic</option>
                        <option>Fashion</option>
                        <option>Cosmatics</option>
                        <option>Food and Meal</option>
                      </Select>
                    </Label>
                  </CardBody>
                </Card>
              </form>
            </div>
          </Main>
         </div>
       </div>
  );
};

export default AddProduct;
