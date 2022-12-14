import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

export default function Paginations()
{
    return (
        <nav className="px-4 mt-10 max-w-5xl flex items-center justify-between sm:px-0 lg:ml-96">
            <div className="-mt-px w-0 flex-1 flex">
                <a
                    href="#"
                    className=" pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                    <AiOutlineArrowLeft className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                </a>
            </div>
            <div className="hidden md:-mt-px md:flex">
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                    1
                </a>
                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                <a
                    href="#"
                    className="text-indigo-600  pt-4 px-4 inline-flex items-center text-sm font-medium"
                    aria-current="page"
                >
                    2
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                    3
                </a>
                <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                    8
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                    9
                </a>
                <a
                    href="#"
                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                    10
                </a>
            </div>
            <div className="-mt-px w-0 flex-1 flex justify-end">
                <a
                    href="#"
                    className=" pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                    Next
                    <AiOutlineArrowRight className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </a>
            </div>
        </nav>
    )
}
