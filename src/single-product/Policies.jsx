
const policies = [
    {
        name: 'Free delivery all year long',
        description:
            'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
        name: '24/7 Customer Support',
        description:
            'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
        name: 'Fast Shopping Cart',
        description:
            "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
        name: 'Gift Cards',
        description:
            "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
]
const Policies = ()=>
{
    return(
        <div>
            {/* Policies section */}
            {/*<section aria-labelledby="policy-heading" className="pt-5 sm:pt-5 xl:max-w-7xl xl:mx-auto xl:px-8">*/}

                <div className="box-content py-2 relative h-64 overflow-scroll xl:overflow-visible">
                    <div className="absolute px-4 flex  space-x-5 grid grid-cols-1 grid-rows-1 gap-x-3 xl:px-0 xl:space-x-0 xl:grid sm:grid-cols-4 xl:gap-x-5  ">
                    {policies.map((policy) =>
                        <div key={policy.name} className="text-center">
                            <div className="flex justify-center items-center">
                                <img src={policy.imageSrc} alt="" className=" h-24 w-auto items-center" />
                            </div>
                            <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
                            <p className="mt-3 text-base text-gray-500">{policy.description}</p>
                        </div>
                    )}
                </div>
                </div>
            {/*</section>*/}
        </div>
    )
}
export default Policies
