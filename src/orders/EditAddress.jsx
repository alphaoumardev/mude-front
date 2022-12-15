
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const EditAddress =({open, setOpen})=>
{
    function closeModal() {setOpen(false)}

    return (
        <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={()=>setOpen(!open)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <form action="#" method="POST">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                                <div>
                                                    <h3 className="text-lg leading-6 font-medium ">Shipping Address</h3>
                                                    <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
                                                </div>

                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                            First name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                            Last name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last-name"
                                                            id="last-name"
                                                            autoComplete="family-name"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                            Country
                                                        </label>
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            autoComplete="country-name"
                                                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                            Street address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="street-address"
                                                            id="street-address"
                                                            autoComplete="street-address"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                            City
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            autoComplete="address-level2"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                            State / Province
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="region"
                                                            id="region"
                                                            autoComplete="address-level1"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                            Zip/Postal code
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="postal-code"
                                                            id="postal-code"
                                                            autoComplete="postal-code"
                                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button
                                                    type="submit"
                                                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
    )
}
export default EditAddress
