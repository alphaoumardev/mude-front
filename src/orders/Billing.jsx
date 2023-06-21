import EditAddress from "./EditAddress.jsx";
import Paypalsvg from "../assets/paypal.svg"
const Billing = ({amount, address})=>
{
    // console.log(orderItem?.amount)
    return (
        <div>
            <section aria-labelledby="summary-heading" className="mt-16">
                <h2 id="summary-heading" className="sr-only">
                    Billing Summary
                </h2>

                <div className="bg-gray-100 py-6 px-4 sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                        <div>
                            <dt className="font-medium text-gray-900">Billing address</dt>
                            <dd className="mt-3 text-gray-500">
                                <span className="block"><span className="text-xs text-black font-bold">{address?.nickname}</span>{address?.customer?.contact}</span>
                                <span className="block">{address?.country +" "+address?.state+" "+address?.city}</span>
                                <span className="block">{address?.street +" "+address?.details+" "+address?.zip}</span>
                                <span className="block">{address?.order_note}</span>
                                <EditAddress address={address}/>
                            </dd>

                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">Payment information</dt>
                            <div className="mt-3">
                                <dd className="-ml-4 -mt-4 flex flex-wrap">
                                    <div className="ml-4 mt-4 flex-shrink-0">
                                        <img className=" h-12" src={Paypalsvg} alt={''}/>
                                        <p className="sr-only">Paypal</p>
                                    </div>
                                    <div className="ml-4 mt-4">
                                        <p className="text-gray-900">Ending with 6273</p>
                                        <p className="text-gray-600">Expires 02 / 24</p>
                                    </div>
                                </dd>
                            </div>
                        </div>
                    </dl>

                    <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                        <div className="pb-4 flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">¥{parseFloat(amount)-25.32}</dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd className="font-medium text-gray-900">¥15</dd>
                        </div>
                        <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Tax</dt>
                            <dd className="font-medium text-gray-900">¥10.32</dd>
                        </div>
                        <div className="pt-4 flex items-center justify-between">
                            <dt className="font-medium text-gray-900">Order total</dt>
                            <dd className="font-medium text-indigo-600"><span className={"font-thin text-sm"}>¥</span>{amount}</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    )
}
export default Billing
