import {Menu, Popover, Transition} from "@headlessui/react";
import {Fragment} from "react";
import MyDropDown from "./MyDropDown.jsx";
import {useSelector} from "react-redux";
import Me from "../assets/31.jpeg"

const PopOversInfo = ()=>
{

    const {customer} = useSelector((state) =>state.authReducer)
    return(
        <div>
            <Popover  as="div"  className='fixed inset-0 z-50 overflow-y-auto lg:static lg:overflow-y-visible inset-0 z-50'>
                <div className="md:flex lg:items-center lg:justify-end xl:col-span-4">
                    {/* Profile dropdown */}
                    <Menu as="div" className="flex-shrink-0 relative ml-5">
                        <div>
                            <Menu.Button className="rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Open user menu</span>
                                {/*{customer?*/}
                                    <img className="h-8 w-8 rounded-full" alt={''} src={`http://127.0.0.1:8000/${customer?.avatar}`}/>:
                                    <img className="h-8 w-8 rounded-full" alt={''} src={Me}/>}

                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">

                            <Menu.Items className="origin-top-right absolute  right-0 mt-2  w-60 rounded-md  bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                                <MyDropDown/>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </Popover>
        </div>
    )
}
export default PopOversInfo
