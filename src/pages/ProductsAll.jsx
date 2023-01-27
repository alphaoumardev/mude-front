import React, {useState, useEffect, useContext} from "react";
import PageTitle from "../components/Typography/PageTitle.jsx";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {
  Card,
  CardBody,
  Label,
  Select,
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@windmill/react-ui";
import { genRating } from "../utils/genarateRating.jsx";
import {EyeOutline, HomeOutline, TrashOutline, ViewGrid, ViewList} from "heroicons-react";
import {AiFillEdit} from "react-icons/ai";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {getAllProductsByPage} from "../redux/Actions/productsActions.js";
import {useDispatch, useSelector} from "react-redux";

const ProductsAll = () =>
{
  const dispatch  = useDispatch()
  const navigate = useNavigate()

  const [view, setView] = useState("list");
  const {articles,  totalItems,  } = useSelector(state => state.getProductsByPagegReducer) //isLoading, error,totalPages, articles_per_page, next, prevPage,

  // Table and grid data handlling
  const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);

  // pagination setup
  const [resultsPerPage, setResultsPerPage] = useState(10);
  // const totalResults = response.length;

  // pagination change control
  function onPageChange(p)
  {
    setPage(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  // useEffect(() =>
  // {
  //   setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  // }, [page, resultsPerPage]);

  // Delete action model
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeleteProduct, setSelectedDeleteProduct] = useState(null);
  async function openModal(productId)
  {
    let product = await articles.filter((product) => product.id === productId)[0];
    setSelectedDeleteProduct(product);
    setIsModalOpen(true);
  }

  function closeModal()
  {
    setIsModalOpen(false);
  }

  const handleChangeView = () =>
  {
    if (view === "list") { setView("grid");}
    if (view === "grid") { setView("list");}
  };
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() =>
  {
    dispatch(getAllProductsByPage(page))
    closeSidebar()
  }, [location, page])

  // console.log(articles)

  return (
      <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Main>
            <div>
              <PageTitle>All Products</PageTitle>
              {/* Breadcum */}
              <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                  <HomeOutline className="w-5 h-5" aria-hidden="true"  />
                  <NavLink to="/app/dashboard" className="mx-2">
                    Dashboard
                  </NavLink>
                </div>
                {">"}
                <p className="mx-2">All Products</p>
              </div>

              {/* Sort */}
              <Card className="mt-5 mb-5 shadow-md">
                <CardBody>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        All Products
                      </p>

                      <Label className="mx-3">
                        <Select className="py-3">
                          <option>Sort by</option>
                          <option>Asc</option>
                          <option>Desc</option>
                        </Select>
                      </Label>

                      <Label className="mx-3">
                        <Select className="py-3">
                          <option>Filter by Category</option>
                          <option>Electronics</option>
                          <option>Cloths</option>
                          <option>Mobile Accerssories</option>
                        </Select>
                      </Label>

                      <Label className="mr-8">
                        {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                        <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                          <input
                              className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                              placeholder="Number of Results"
                              value={resultsPerPage}
                              onChange={(e) => setResultsPerPage(e.target.value)}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                            {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                            Results on {`${view}`}
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="">
                      <Button
                          icon={view === "list" ? ViewList : ViewGrid}
                          className="p-2"
                          aria-label="Edit"
                          onClick={handleChangeView}
                      />
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Delete product model */}
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader className="flex items-center">
                  {/* <div className="flex items-center"> */}
                  <TrashOutline  className="w-6 h-6 mr-3" />
                  Delete Product
                  {/* </div> */}
                </ModalHeader>
                <ModalBody>
                  Make sure you want to delete product{" "}
                  {selectedDeleteProduct && `"${selectedDeleteProduct.name}"`}
                </ModalBody>
                <ModalFooter>
                  <div className="hidden sm:block">
                    <Button layout="outline" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                  <div className="hidden sm:block">
                    <Button>Delete</Button>
                  </div>
                  <div className="block w-full sm:hidden">
                    <Button block size="large" layout="outline" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                  <div className="block w-full sm:hidden">
                    <Button block size="large">
                      Delete
                    </Button>
                  </div>
                </ModalFooter>
              </Modal>

              {/* Product Views */}
              {view === "list" ? (
                  <>
                    <TableContainer className="mb-8">
                      <Table>
                        <TableHeader>
                          <tr>
                            <TableCell>Name</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>QTY</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Action</TableCell>
                          </tr>
                        </TableHeader>
                        <TableBody>
                          {articles?.map((product, index) =>
                              <TableRow key={index}>
                                <TableCell>
                                  <Link to={'/app/products/' + product?.id}>
                                  <div className="flex items-center text-sm">
                                    <Avatar
                                        className="hidden mr-4 md:block"
                                        src={`${product?.images[0]?.image}`} alt={""}  />
                                    <div>
                                      <p className="font-semibold">{product.name}</p>
                                    </div>
                                  </div>
                                  </Link>
                                </TableCell>
                                <TableCell>
                                  <Badge type={product?.stock > 0 ? "success" : "danger"}>
                                    {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-sm">
                                  {genRating(4, product.reviews.length, 5)}
                                </TableCell>
                                <TableCell className="text-sm">{product?.reviews?.length}</TableCell>
                                <TableCell className="text-sm">{product.price}</TableCell>
                                <TableCell>
                                  <div className="flex">
                                    <Link to={`/app/product/${product.id}`}>
                                      <Button
                                          icon={EyeOutline}
                                          className="mr-3"
                                          aria-label="Preview"
                                      />
                                    </Link>
                                    <Button
                                        icon={AiFillEdit}
                                        className="mr-3"
                                        layout="outline"
                                        aria-label="Edit"
                                    />
                                    <Button
                                        icon={TrashOutline}
                                        layout="outline"
                                        onClick={() => openModal(product?.id)}
                                        aria-label="Delete"
                                    />
                                  </div>
                                </TableCell>
                              </TableRow>
                          )}
                        </TableBody>
                      </Table>
                      <TableFooter>
                        <Pagination
                            totalResults={totalItems}
                            resultsPerPage={resultsPerPage}
                            label="Table navigation"
                            onChange={onPageChange}
                        />
                      </TableFooter>
                    </TableContainer>
                  </>
              ) : (
                  <>
                    {/* Car list */}
                    <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-4 lg:col-span-4 lg:gap-x-5 lg:gap-y-5">
                      {articles?.map((product) => (
                          <div className="" key={product.id}>
                            <Card>
                              <div onClick={()=>navigate(`/app/product/${product?.id}`)}  className="w-10/12 max-h-6/12 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75">
                                <img
                                    // src={`http://127.0.0.1:8000/${product?.images[0]?.image}`}
                                    //TODO: REVIEW THE THE REASON
                                    src={product?.images[0]?.image}
                                    alt={product?.name}
                                    className=" object-center object-contain cursor-pointer"
                                />
                              </div>
                              <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                  <p className="font-semibold truncate  text-gray-600 dark:text-gray-300">
                                    {product.name}
                                  </p>
                                  <Badge
                                      type={product?.stock > 0 ? "success" : "danger"}
                                      className="whitespace-nowrap"
                                  >
                                    <p className="break-normal">
                                      {product?.stock > 0 ? `In Stock` : "Out of Stock"}
                                    </p>
                                  </Badge>
                                </div>

                                <p className="mb-2 text-purple-500 font-bold text-lg">
                                  {product?.price}
                                </p>

                                <p className="mb-8 text-gray-600 dark:text-gray-400">
                                  {/*{product?.description}*/}
                                </p>

                                <div className="flex items-center justify-between">
                                  <div>
                                    <Link to={`/app/product/${product?.id}`}>
                                      <Button
                                          icon={EyeOutline}
                                          className="mr-3"
                                          aria-label="Preview"
                                          size="small"
                                      />
                                    </Link>
                                  </div>
                                  <div>
                                    <Button
                                        icon={AiFillEdit}
                                        className="mr-3"
                                        layout="outline"
                                        aria-label="Edit"
                                        size="small"
                                    />
                                    <Button
                                        icon={TrashOutline}
                                        layout="outline"
                                        aria-label="Delete"
                                        onClick={() => openModal(product.id)}
                                        size="small"
                                    />
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </div>
                      ))}
                    </div>

                    <Pagination
                        totalResults={totalItems}
                        resultsPerPage={resultsPerPage}
                        label="Table navigation"
                        onChange={onPageChange}
                    />
                  </>
              )}
            </div>
          </Main>
        </div>
      </div>
  );
};

export default ProductsAll;
