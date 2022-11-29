import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import MobileFilterList from "./MobileFilterList";
const breadcrumbs = [{ id: 1, name: 'Men', href: '#' }]
const MudeMobileFilter = ({mobileFiltersOpen, setMobileFiltersOpen})=>
{
    return(
        <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                    onClick={() => setMobileFiltersOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <AiOutlinePlus className="h-6 w-6 rotate-45" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Filters on mobile*/}
                            <MobileFilterList/>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <div className="border-b border-gray-200 ">
                <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ol role="list" className="flex items-center space-x-4 py-4">
                        {breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-4 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        viewBox="0 0 6 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="h-5 w-auto text-gray-300"
                                    >
                                        <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href="src/mude/Shop.jsx#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                New Arrivals
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
            <div className=" bg-gray-800 px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="lg:w-7/12 block lg:ml-96 rounded-full">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative  ">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <BsSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input
                            id="search"
                            name="search"
                            className="block w-full  border border-gray-300 rounded-full py-3 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MudeMobileFilter
