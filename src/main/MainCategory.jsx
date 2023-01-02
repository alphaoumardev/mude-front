import women_acc from "../assets/women_acc.jpg"
import women_c from "../assets/women_c.jpg"
import women_s from "../assets/women_s.jpg"

import men_a from "../assets/men_a.jpg"
import men_c from "../assets/men_c.jpg"
import men_s from "../assets/men_s.jpg"
import onsale from "../assets/onsale.jpg"

import home_2 from "../assets/home_2.jpg"
import {Link,} from "react-router-dom";

const MainCategory = ()=>
{
    return(
        <div className="sm:h-96">
            {/* Category section */}
            <section aria-labelledby="category-heading" className="bg-gray-50">
                <div className="sm:w-11/12 mx-auto  py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-baseline sm:justify-between">
                        <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Shop By Category
                        </h2>
                        <a href="/mude/guowuchang" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-6 grid  grid-cols-1 gap-y-6 sm:grid-cols-5  sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                        <Link to={'/mude/guowuchang/1'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 sm:h-1/2">
                            <img
                                src={women_c}
                                alt=""
                                className="object-center object-cover group-hover:opacity-75"
                            />
                            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                            <div className="p-6 flex items-end">
                                <div>
                                    <h3 className="font-semibold text-white">
                                        <span className="absolute inset-0" />
                                        New Arrivals
                                    </h3>
                                    <p aria-hidden="true" className="mt-1 text-sm text-white">
                                        Shop now
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2 ">
                            <img
                                src={women_acc}
                                alt=""
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />

                        </Link>
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2">
                            <img
                                src={men_a}
                                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />

                        </Link>
                        {/*second*/}

                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2">
                            <img
                                src={women_s}
                                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />

                        </Link>
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2 sm:h-1/2">
                            <img
                                src={onsale}
                                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                className="object-center object-cover group-hover:opacity-75"
                            />
                            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />

                        </Link>
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2 sm:-mt-64">
                            <img
                                src={men_c}
                                alt=""
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />
                        </Link>

                        {/*third*/}
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2 sm:-mt-64">
                            <img
                                src={men_s}
                                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />

                        </Link>
                        <Link to={'/mude/guowuchang'} className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-1/2 sm:-mt-64">
                            <img
                                src={home_2}
                                alt=""
                                className="object-center object-cover sm:object-contain group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                            />
                            <div
                                aria-hidden="true"
                                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                            />
                        </Link>
                    </div>

                    <div className="mt-6 sm:hidden">
                        <a href="/mude/guowuchang" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default MainCategory
