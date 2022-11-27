
const favorites = [
    {
        id: 1,
        name: 'Black Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
        imageAlt: "Model wearing women's black cotton crewneck tee.",
    },
    {
        id: 2,
        name: 'Off-White Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
    {
        id: 3,
        name: 'Mountains Artwork Tee',
        price: '$36',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt:
            "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
    },
    {
        id: 4,
        name: 'Off-White Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
    {
        id: 5,
        name: 'Mountains Artwork Tee',
        price: '$36',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
        imageAlt:
            "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
    },
    {
        id: 6,
        name: 'Off-White Basic Tee',
        price: '$32',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
        imageAlt: "Model wearing women's off-white cotton crewneck tee.",
    },
]
const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]

export default function Mude() {
    return (
        <div className="bg-transparent">

            {/* Hero section */}
            <div className="relative overflow-hidden">
                <div className="pt-16 md:mr-40 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                <div className="relative max-w-7xl mb-20 mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                    <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Summer styles are finally here
                            </h1>
                            <div className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't
                                care if you live or die.
                            </div>
                            <a  href="#" className="inline-block mt-3 text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">
                                Shop Collection
                            </a>
                        </div>
                        <div>
                            <div className="">
                                {/* Decorative image grid */}
                                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 mt-14 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0 grid grid-cols-1 gap-y-3 lg:gap-y-8">
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                                <div className="w-44 h-64 rounded-lg overflow-hidden">
                                                    <img
                                                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                                        alt=""
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {/* Featured section */}
                <section aria-labelledby="cause-heading ">
                    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
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

                {/* Category section */}
                <section aria-labelledby="category-heading" className="bg-gray-50">
                    <div className="max-w-full mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-baseline sm:justify-between">
                            <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                Shop by Category
                            </h2>
                            <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                                Browse all categories<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-5 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
                                    alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                    className="object-center object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                                <div className="p-6 flex items-end">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                New Arrivals
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Accessories
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Workspace
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*second*/}

                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Accessories
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
                                    alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                                    className="object-center object-cover group-hover:opacity-75"
                                />
                                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
                                <div className="p-6 flex items-end">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                New Arrivals
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Workspace
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*third*/}

                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                                    alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Accessories
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                    alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                                    className="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
                                />
                                <div
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                                />
                                <div className="p-6 flex items-end sm:absolute sm:inset-0">
                                    <div>
                                        <h3 className="font-semibold text-white">
                                            <a href="#">
                                                <span className="absolute inset-0" />
                                                Workspace
                                            </a>
                                        </h3>
                                        <p aria-hidden="true" className="mt-1 text-sm text-white">
                                            Shop now
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="mt-6 sm:hidden">
                            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                                Browse all categories<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/*Subcategories*/}
                <section aria-labelledby="category-heading" className="pt-5 sm:pt-5 xl:max-w-7xl xl:mx-auto xl:px-8">
                    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                        <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                            Shop by Category
                        </h2>
                        <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                                <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                        >
                                          <span aria-hidden="true" className="absolute inset-0">
                                            <img src={category.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                                          </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                            />
                                            <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                            Browse all categories<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>
                </section>

                {/*grid inline*/}
                <section aria-labelledby="trending-heading">
                    <div className="max-w-full  py-24 px-4 sm:px-6 sm:py-32 lg:pt-5 lg:px-8">
                        <div className="md:flex md:items-center md:justify-between">
                            <h2 id="favorites-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                Trending Products
                            </h2>
                            <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                                Shop the collection<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-6 md:gap-y-0 lg:gap-x-8">
                            {favorites.map((product,index) => (
                                <div key={index} className="">
                                    <div className="w-full h-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-sm md:hidden">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Shop the collection<span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA section */}
                <section aria-labelledby="sale-heading">
                    <div className="pt-5 overflow-hidden sm:pt-10">
                        <div className="bg-gray-800">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="relative pt-52 pb-20 sm:pb-24">
                                    <div>
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

            </main>
        </div>
    )
}
