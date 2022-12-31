import {BsCreditCard2Back, BsPerson} from "react-icons/bs";
import {GrKey} from "react-icons/gr";
import {HiOutlineUserGroup} from "react-icons/hi";
import {TfiViewGrid} from "react-icons/tfi";
import MyInfoTab from "./MyInfoTab.jsx";

const navigation = [
    { name: 'Account', href: '#', icon: BsPerson, current: true },
    { name: 'Password', href: '#', icon: GrKey, current: false },
    { name: 'Plan & Billing', href: '#', icon: BsCreditCard2Back, current: false },
    { name: 'Team', href: '#', icon: HiOutlineUserGroup, current: false },
    { name: 'Integrations', href: '#', icon: TfiViewGrid, current: false },
]

function classNames(...classes) {return classes.filter(Boolean).join(' ')}

const MyProfile = () =>
{
    return (
        <div className=" flex justify-center items-center ">
            <div className="sm:w-8/12  lg:grid lg:grid-cols-12 lg:gap-x-5">
                <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                        <nav className="space-y-1">
                                {navigation.map((item, index) =>
                                    <a
                                        key={index}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? 'text-indigo-500 group-hover:text-indigo-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className="truncate">{item.name}</span>
                                    </a>
                                )}
                            </nav>
                    </aside>
                <MyInfoTab/>
            </div>
        </div>
    )
}
export default MyProfile
