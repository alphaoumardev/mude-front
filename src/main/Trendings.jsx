import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTrendingProductAction} from "../redux/Actions/productsActions.js";

const Trendings = () =>
{
    const dispatch = useDispatch()
    const {trending} = useSelector(state => state.getTrendingProductsReducer)

    useEffect(() =>
    {
        dispatch(getTrendingProductAction())
    }, [dispatch]);

    return(
            <div aria-labelledby="trending-heading " className="sm:flex sm:justify-center sm:items-center ">
                <div className=" sm:w-11/12  py-24 px-4 sm:px-6 sm:py-32 lg:pt-5 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <h2 id="favorites-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Trending Products
                        </h2>
                        <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                            Shop the collection<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-6 md:gap-y-0 lg:gap-x-8">
                        {trending?.map((product, index) =>
                            <div  key={index} className="">
                                <div  className="w-full h-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                                    <img
                                        src={`http://127.0.0.1:8000/${product?.images[0].image}`}
                                        alt={""}
                                        className="w-full h-full object-center object-contain"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    <span className="absolute inset-0" />
                                    {product?.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-gray-900">{product?.price}</p>
                            </div>
                        )}
                    </div>
                    <div className="mt-8 text-sm md:hidden">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Shop the collection<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default Trendings
