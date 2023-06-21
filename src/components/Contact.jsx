import { PhoneIcon } from '@heroicons/react/24/outline'
import {AiFillGithub, AiFillMail} from "react-icons/ai";
import {BsTwitter, BsFacebook} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {postContactUs} from "../redux/Actions/authActions.js";

const offices = [
    { id: 1, city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
    { id: 2, city: 'New York', address: ['886 Walter Streets', 'New York, NY 12345'] },
    { id: 3, city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
    { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
]

const Contact = ()=>
{
    const dispatch = useDispatch()
    const {customer} = useSelector(state=>state.authReducer)
    // console.log(customer)
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const onContact =(e)=>
    {
        e.preventDefault();
        dispatch(postContactUs(customer?.id, subject, content))
    }
    return (
        <div className="bg-white">

            <main className="mt-24">
                {/* Contact section */}
                <section className="relative bg-white" aria-labelledby="contact-heading">
                    <div className="absolute w-full h-1/2 bg-warm-gray-50" aria-hidden="true" />
                    {/* Decorative dot pattern */}
                    <div className="hidden sm: block relative sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <svg
                            className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-white shadow-xl">
                            <h2 id="contact-heading" className="sr-only">
                                Contact us
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Contact information */}
                                <div className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-gray-500 to-teal-600 sm:px-10 xl:p-12">
                                    {/* Decorative angle backgrounds */}
                                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">

                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true"
                                    >

                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true"
                                    >

                                    </div>
                                    <h3 className="text-lg font-medium text-white">Contact information</h3>
                                    <p className="mt-6 text-base text-teal-50 max-w-3xl">
                                        The mudee online service or outline service provides you a cutomized service when needed while you are shopping at mudee
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <PhoneIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                                            <span className="ml-3">+86 (132) 2270-2122</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <AiFillMail className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                                            <span className="ml-3">support@mudemart.com</span>
                                        </dd>
                                    </dl>
                                    <ul role="list" className="mt-8 flex space-x-12">
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="https://www.facebook.com">
                                                <span className="sr-only">Facebook</span>
                                                <BsFacebook className="w-7 h-7"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="https://www.github.com/alphaoumardev">
                                                <span className="sr-only">GitHub</span>
                                                <AiFillGithub className="w-7 h-7"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="https://www.twitter.com/">
                                                <span className="sr-only">Twitter</span>
                                                <BsTwitter className="w-7 h-7"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact form */}
                                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                                    <form onSubmit={onContact} method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                                                Subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    required
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between">
                                                <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                                                    Message
                                                </label>
                                                <span id="message-max" className="text-sm text-warm-gray-500">
                                                  Max. 1000 characters
                                                </span>
                                            </div>
                                            <div className="mt-1">
                                            <textarea
                                                onChange={(e) => setContent(e.target.value)}
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md"
                                                aria-describedby="message-max"
                                                defaultValue={''}
                                            />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button
                                                type="submit"
                                                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact grid */}
                <section aria-labelledby="offices-heading">
                    <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <h2 id="offices-heading" className="text-3xl font-extrabold text-warm-gray-900">
                            Our offices
                        </h2>
                        <p className="mt-6 text-lg text-warm-gray-500 max-w-3xl">
                            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus
                            dui laoreet diam sed lacus, fames.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {offices.map((office) => (
                                <div key={office.id}>
                                    <h3 className="text-lg font-medium text-warm-gray-900">{office.city}</h3>
                                    <p className="mt-2 text-base text-warm-gray-500">
                                        {office.address.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact
