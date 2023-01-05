const footerNavigation = {
    shop: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    account: [
        { name: 'Manage Account', href: '/mude/' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Redeem a Gift Card', href: '#' },
    ],
    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'Pinterest', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

export const Footer =()=>
{
    return (
        <div className="">
            <div className="flex justify-center items-center">

                <footer aria-labelledby="footer-heading" className="bg-gray-900 sm:w-11/12">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-white">Shop</h3>
                                        <ul role="list" className="mt-6 space-y-6">
                                            {footerNavigation.shop.map((item) => (
                                                <li key={item.name} className="text-sm">
                                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-white">Company</h3>
                                        <ul role="list" className="mt-6 space-y-6">
                                            {footerNavigation.company.map((item) => (
                                                <li key={item.name} className="text-sm">
                                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-white">Account</h3>
                                        <ul role="list" className="mt-6 space-y-6">
                                            {footerNavigation.account.map((item) => (
                                                <li key={item.name} className="text-sm">
                                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-white">Connect</h3>
                                        <ul role="list" className="mt-6 space-y-6">
                                            {footerNavigation.connect.map((item) => (
                                                <li key={item.name} className="text-sm">
                                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-16 xl:mt-0">
                                <h3 className="text-sm font-medium text-white">Sign up for our newsletter</h3>
                                <p className="mt-6 text-sm text-gray-300">The latest deals and savings, sent to your inbox weekly.</p>
                                <form className="mt-2 flex sm:max-w-md">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="appearance-none min-w-0 w-full bg-white border border-white rounded-full shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                    />
                                    <div className="ml-4 flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-600 border border-transparent rounded-full shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="max-w-7xl lg:ml-56 py-6 md:flex  md:items-center md:justify-between">
                <div className="text-center md:text-left">
                    <p className="text-sm text-gray-500">&copy; 2023 Mude Inc. All Rights Reserved</p>
                </div>
                <div className="mt-4 flex items-center justify-center md:mt-0">
                    <div className="flex space-x-8">
                        {footerNavigation.bottomLinks.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="ml-6 border-l border-gray-200 pl-6">
                        <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                            <img
                                src="https://tailwindui.com/img/flags/flag-canada.svg"
                                alt=""
                                className="w-5 h-auto flex-shrink-0"
                            />
                            <span className="ml-3 text-sm">Change</span>
                            <span className="sr-only">location and currency</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
