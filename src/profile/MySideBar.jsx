import {BsPerson,BsBoxSeam} from "react-icons/bs";

import {HiOutlineUserGroup} from "react-icons/hi";
import {TfiViewGrid} from "react-icons/tfi";
import {FaRegAddressCard} from "react-icons/fa";
import {AiOutlineShopping} from "react-icons/ai";
const navigation = [
    { name: 'Account', href: '/mude/myprofile', icon: BsPerson, current: false },
    { name: 'Purchases', href: '/mude/mypurchases', icon: BsBoxSeam, current: false },
    { name: 'Cart', href: '/mude/mycart', icon: AiOutlineShopping, current: false },
    { name: 'Shipping Address', href: '/mude/myshippingaddress', icon: FaRegAddressCard, current: false },
    { name: 'Team', href: '#', icon: HiOutlineUserGroup, current: false },
    { name: 'Company Profile', href: '#', icon: TfiViewGrid, current: false },
]

const MySideBar = () =>
{
    return (
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                    <nav className="space-y-1">
                        {navigation.map((item, index) =>
                            <a
                                key={index}
                                href={item.href}
                                className='bg-gray-100 text-gray-900 hover:text-indigo-700 hover:bg-white
                                    group rounded-md px-5 py-4 flex items-center text-sm font-bold'
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <item.icon
                                    className=
                                            'text-gray-500 group-hover:text-indigo-500
                                        flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                    aria-hidden="true"
                                />
                                <span className="truncate">{item.name}</span>
                            </a>
                        )}
                    </nav>
                </aside>
    )
}
export default MySideBar
