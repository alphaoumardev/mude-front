
const Cta = ()=>
{
    return(
        <div>
            {/* CTA section */}
            <section aria-labelledby="sale-heading" className="flex justify-center items-center ">
                <div className="pt-5 overflow-hidden sm:pt-10 sm:w-11/12">
                    <div className="bg-gray-800">
                        <div className="max-w-full sm:w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative pt-52 pb-20 sm:pb-24">
                                <div className="w-full">
                                    <h2 id="sale-heading" className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                                        Final Stock.
                                        <br />
                                        Up to 50% off.
                                    </h2>
                                    <div className="mt-6 text-base">
                                        <a href="#" className="font-semibold text-white">
                                            Shop the sale<span aria-hidden="true"> &rarr;</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0">
                                    <div className="ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="mt-6 flex-shrink-0 sm:mt-0">
                                                <img
                                                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Cta
