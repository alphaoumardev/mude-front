import React, {useContext, useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import PageTitle from "../components/Typography/PageTitle.jsx";
import {
  Card,
  CardBody,
  Label,
  Button,
  Select,
} from "@windmill/react-ui";
import {HomeOutline} from "heroicons-react";
import {AiFillFileAdd, AiFillLayout, AiOutlineArrowDown, AiOutlineFile} from "react-icons/ai";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getProductCategoryAction} from "../redux/Actions/adminAction.js";
import {getHeaderCategoriesAction} from "../redux/Actions/headerActions.js";

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
  let location = useLocation()
  const dispatch = useDispatch()
  const {categories} = useSelector(state => state.getProductCategoriesReducer)
  const {catenames} = useSelector(state => state.getHeaderCatergoriesReducer)

  const [category, setCategory] = useState('');

  useEffect(() =>
  {
    dispatch(getProductCategoryAction())
    dispatch(getHeaderCategoriesAction())
    // closeSidebar()
  }, [dispatch])

  console.log(categories)

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

              <form className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
                <Card className="row-span-2 md:col-span-2">
                  <CardBody>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                      <div className="flex items-center space-x-3 sm:pl-4">
                        {/*<button type="button"*/}
                        {/*        title="Add A New Topic"*/}
                        {/*        data-bs-toggle="modal" data-bs-target="#addTopicModal"*/}
                        {/*        className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">*/}
                        {/*<AiOutlineArrowDown/>*/}
                        {/*</button>*/}
                        <select id="underline_select" onChange={(e)=>setCategory(e.target.value)} title="Choose a topic or add one" required={true}
                                className="cursor-pointer block px-2 pr-8 w-full text-sm text-gray-500 border-b-1 border-0 appearance-none bg-transparent dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                          <option> Select Product Category </option>
                          {categories?.map((item, index)=>
                              <>
                                <option key={index} value={item?.id}>{item?.name}</option>

                                {item?.subcates?.map((sub, i)=>
                                    <option key={i} value={sub?.id}>{sub?.name}</option>
                                )}
                              </>

                          )}

                        </select>

                      </div>
                      {/*<label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> </label>*/}
                      <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center flex items-center justify-center">
                            <AiOutlineFile className="flex justify-center items-center" size={35}/>
                            <div className="flex text-sm text-gray-600">
                              <label htmlFor="file-upload"  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload the product cover image </span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
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
                          Product Name
                        </label>
                        <input
                            // onChange={(e)=>setNickname(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            // defaultValue={1}
                            // min={1}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Product Sku
                        </label>
                        <input
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
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Product Name
                        </label>
                        <input
                            // onChange={(e)=>setNickname(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            // defaultValue={1}
                            // min={1}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Product Sku
                        </label>
                        <input
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
                          Product Name
                        </label>
                        <input
                            // onChange={(e)=>setNickname(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            // defaultValue={1}
                            // min={1}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Product Sku
                        </label>
                        <input
                            // defaultValue={customer?.user?.username}
                            type="number"
                            name="sku"
                            id="sku"
                            minLength={12}
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Product Sku
                        </label>
                        <input
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


                    <FormTitle>Product Price</FormTitle>
                    <Label>
                      <input
                          // onChange={(e)=>setNickname(e.target.value)}
                          type="text"
                          name="first-name"
                          id="first-name"
                          // defaultValue={customer?.nickname}
                          autoComplete="given-name"
                          className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {/*<Input className="mb-4" placeholder="Enter product price here" />*/}
                    </Label>

                    <FormTitle>Short description</FormTitle>
                    <Label>
                      <textarea
                          // onChange={(e)=>setNickname(e.target.value)}
                          rows="4"
                          name="first-name"
                          id="first-name"
                          // defaultValue={customer?.nickname}
                          autoComplete="given-name"
                          className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />

                    </Label>
                    <div className="mb-4">
                      <FormTitle>Stock Qunatity</FormTitle>
                      <Label>
                        <input
                            type="number"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter product stock quantity"
                        />
                      </Label>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Stock
                        </label>
                        <input
                            // onChange={(e)=>setNickname(e.target.value)}
                            type="number"
                            name="first-name"
                            id="first-name"
                            defaultValue={1}
                            min={1}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                            // defaultValue={customer?.user?.username}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                            // onChange={(e)=>setNickname(e.target.value)}
                            type="text"
                            name="first-name"
                            id="first-name"
                            // defaultValue={customer?.nickname}
                            autoComplete="given-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Username
                        </label>
                        <input
                            // defaultValue={customer?.user?.username}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 block w-full capitalize border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
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
