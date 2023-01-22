import React, {useContext, useEffect} from "react";
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
import {AiFillFileAdd, AiFillLayout} from "react-icons/ai";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";

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

  useEffect(() =>
  {
    closeSidebar()
  }, [location])

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
                    <FormTitle>Product Image</FormTitle>
                    <input
                        type="file"
                        className="mb-4 text-gray-800 dark:text-gray-300"
                    />

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
