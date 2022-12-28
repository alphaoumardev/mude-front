import Hero from "../main/Hero.jsx";
import Carousel from "../main/Carousel.jsx";
import Favorites from "../main/Trendings.jsx";
import MainCategory from "../main/MainCategory.jsx";
import ShopByCategory from "../main/ShopByCategory.jsx";
import Cta from "../main/Cta.jsx";


export default function Mude()
{
    return (
        <div className="bg-transparent">
            <Carousel/>
            <Hero/>
            {/* This example requires Tailwind CSS v2.0+ */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">Start your free trial today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a href="#" className="inline-flex items-center justify-center px-16 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                {/* Featured section */}
                <section aria-labelledby="cause-heading " className={"flex justify-center items-center"}>
                    <div className="relative bg-gray-800 py-28 sm:flex  sm:w-11/12 px-6 sm:py-20 sm:px-6">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
                                alt=""
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                            <h2 id="cause-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                Long-term thinking
                            </h2>
                            <p className="mt-3 text-xl text-white">
                                We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows
                                us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of
                                the universe.
                            </p>
                            <a
                                href="#"
                                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                            >
                                Read our story
                            </a>
                        </div>
                    </div>
                </section>

                <MainCategory/>
                <ShopByCategory/>
                <Favorites/>
                <Cta/>

            </main>
        </div>
    )
}
