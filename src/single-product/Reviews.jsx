import {Fragment,} from 'react'
import {Disclosure, Tab} from '@headlessui/react'
import {AiFillStar} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import ReviewTextArea from "./ReviewTextArea";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const faqs = [
    {
        question: 'What format are these icons?',
        answer:
            'The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.',
    },
    {
        question: 'Can I use the icons at different sizes?',
        answer:
            "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
    },
    // More FAQs...
]
const license = {
    href: '#',
    summary:
        'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
    content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}
function classNames(...classes) {return classes.filter(Boolean).join(' ')}


const Reviews = ({id, singleProduct})=>
{
    const navigate = useNavigate()
    const {customer} = useSelector((state) =>state.authReducer)

    return(
        <div className="w-full sm:ml-24 mt-12 mx-auto  lg:max-w-none  lg:col-span-4">
            <Tab.Group as="div">
                <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    selected
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                    'whitespace-nowrap py-2 border-b-2 font-medium text-sm'
                                )
                            }
                        >
                            Customer Reviews
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    selected
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                    'whitespace-nowrap py-2 border-b-2 font-medium text-sm'
                                )
                            }
                        >
                            FAQ
                        </Tab>
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    selected
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                    'whitespace-nowrap py-2 border-b-2 font-medium text-sm'
                                )
                            }
                        >
                            License
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                    <Tab.Panel className="-mb-1">
                        <h3 className="sr-only">Customer Reviews</h3>
                        {customer?
                        <Disclosure as="div" className="mt-2 sm:w-4/12">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span className="sm:text-xl">What do you think about this article?</span>
                                        <AiOutlinePlus className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}/>
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        <ReviewTextArea id={id} customer={customer}/>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>:
                            <button type="button" onClick={()=>navigate("/login")}  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full">
                                Login To Add Review
                            </button>}

                        {singleProduct?.reviews?.map((review, reviewIdx) =>
                            <div key={reviewIdx} className="flex text-sm text-gray-500 space-x-4">
                                <div className="flex-none py-10">
                                    <img
                                        src={`http://127.0.0.1:8000/${review?.customer?.avatar}`}
                                        alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                                </div>
                                <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                                    <h3 className="font-medium text-gray-900 capitalize ">{review?.customer?.user?.username}</h3>
                                    {/*<span>*/}
                                        <time dateTime={review?.reviewed_at?.slice(0,10)}>{review?.reviewed_at?.slice(0,10)}</time>
                                        {/*<time dateTime={review.datetime}>{review.date}</time>*/}
                                    {/*</span>*/}

                                    <div className="flex items-center mt-4">
                                        {[0, 1, 2, 3, 4].map((rating, index) =>
                                            <AiFillStar
                                                key={index}
                                                className={classNames(review.rate > rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0')}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </div>
                                    <p className="sr-only">{review.rate} out of 5 stars</p>

                                    <div
                                        className="mt-4 prose prose-sm max-w-none text-gray-500"
                                        dangerouslySetInnerHTML={{ __html: review?.comment }}
                                    />
                                </div>
                            </div>
                        )}
                    </Tab.Panel>

                    <Tab.Panel as="dl" className="text-sm text-gray-500">
                        <h3 className="sr-only">Frequently Asked Questions</h3>

                        {faqs.map((faq) => (
                            <Fragment key={faq.question}>
                                <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                                    <p>{faq.answer}</p>
                                </dd>
                            </Fragment>
                        ))}
                    </Tab.Panel>

                    <Tab.Panel className="pt-10">
                        <h3 className="sr-only">License</h3>

                        <div
                            className="prose prose-sm max-w-none text-gray-500"
                            dangerouslySetInnerHTML={{ __html: license.content }}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
export default Reviews
