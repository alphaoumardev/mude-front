import women_a from "../assets/women_a.jpg"
import women_acc from "../assets/women_acc.jpg"
import women_c from "../assets/women_c.jpg"
import women_s from "../assets/women_s.jpg"

import men_a from "../assets/men_a.jpg"
import men_acc from "../assets/men_acc.jpg"
import men_c from "../assets/men_c.jpg"
import men_s from "../assets/men_s.jpg"

import home_1 from "../assets/home_1.jpg"
import home_2 from "../assets/home_2.jpg"
import {Link, useNavigate} from "react-router-dom";

const Hero = ()=>
{
    const navigate = useNavigate()
    return(
        <div>
            {/* Hero section */}
            <div className="relative overflow-hidden hidden sm:block">
                <div className="pt-16 md:mr-40 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-2xl ">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <div className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't
                                care if you live or die.
                            </div>
                            <div onClick={()=>navigate("/mude/guowuchang")} className=" cursor-pointer inline-block mt-3 text-center bg-indigo-600 border border-transparent rounded-full py-4 px-12 font-medium text-white hover:bg-indigo-800">
                                Shop Collection
                            </div>
                        </div>

                        <div className="">

                            {/* Decorative image grid */}
                            <div aria-hidden="true" className="absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">

                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 mt-1 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-5 lg:space-x-5">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                            <Link to={`/mude/guowuchang/${2}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={women_c}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </Link>
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={women_s}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                            <Link to={`/mude/order/detail`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={women_acc}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={men_a}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={women_a}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={men_c}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={men_s}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={men_acc}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={home_1}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                            <Link to={`/mude/guowuchang/${5}`} className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src={home_2}
                                                    alt=""
                                                    className="w-full h-full object-center object-contain"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-10 ">
                        <div className="inline-flex rounded-md shadow">
                            <Link to={"/mude/guowuchang"} className="inline-flex cursor-pointer items-center justify-center px-16 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"> Get started </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
