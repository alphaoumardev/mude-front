import {Menu, Popover, Transition} from "@headlessui/react";
import {AiOutlinePlus} from "react-icons/ai";
import {BsFillBellFill, BsPersonCircle} from "react-icons/bs";
import {Fragment} from "react";
import MyDropDown from "./MyDropDown.jsx";

const user = {
    name: 'Chelsea Hagon',
    email: 'chelsea.hagon@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
function classNames(...classes) {return classes.filter(Boolean).join(' ')}

const NotificationsPoper = ()=>
{
    return(
        <div>
            <Popover  as="div"  className={({ open }) =>classNames(open ? 'fixed inset-0 z-40 overflow-y-auto' : '', 'lg:static lg:overflow-y-visible')}>{({ open }) => (
                <>
                    <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                        <div className="flex-shrink-0 flex items-center"></div>
                    </div>
                    <div className="flex justify-between md:relative items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                        {/* Mobile menu button */}
                        <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            {open ? (
                                <AiOutlinePlus className="block h-6 w-6 rotate-45 flex justify-end" aria-hidden="true" />
                            ) : (

                                <BsFillBellFill className="block h-6 w-6 text-black" aria-hidden="true" />
                            )}
                        </Popover.Button>
                    </div>
                    <div className="hidden lg:flex  lg:items-center lg:justify-end xl:col-span-4">

                        {/* Profile dropdown */}
                        <Menu as="div" className="flex-shrink-0 relative ml-5">
                            <div>
                                <Menu.Button className="rounded-full flex focus:outline-none ">
                                    {/*Notifications*/}
                                    <a href={"#"} className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <span className="sr-only">View notifications</span>
                                        <BsFillBellFill className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute  right-0 mt-2  w-60 rounded-md  bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                    <MyDropDown/>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    {/*Mobile menu*/}
                    <Popover.Panel as="nav" className="lg:hidden  " aria-label="Global">
                        <div className="border-t border-gray-200 pt-4 pb-3 z-10">
                            <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">

                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BsFillBellFill className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                                {userNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </>
            )}
            </Popover>
        </div>
    )
}
export default NotificationsPoper
