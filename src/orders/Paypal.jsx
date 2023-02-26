import {PayPalScriptProvider, PayPalButtons,} from "@paypal/react-paypal-js";
import {useDispatch} from "react-redux";
import {createOrderAction} from "../redux/Actions/orderAction";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Paypal = ({customer, order_total, address})=>
{
    const amount = order_total +25.32;//for the shippment
    const currency = "USD";
    const style = {layout: "vertical", color:"silver", shape:"pill"};
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [order_reference, setOrder_reference] = useState('');
    const getOrderReference = () =>
    {
        let min = 100000000000;
        let max = 999999999999;
        setOrder_reference(Math.round(Math.random() * (max - min) + min))
    }
    useEffect(() => {return getOrderReference();},[]);

    // console.log(order_reference)

    return (
        <div style={{maxWidth: "750px", minHeight: "200px"}}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AZBav3-IKfYRTRjLEy--IkkjE7sIWz1VAWPiqX3OX_nuOFt8M7hQOafdwiZwQpNpzFI4epi7BNVwzmlR",
                    components: "buttons",
                    currency: "USD",
                    // "disable-funding": "credit,card,p24"
                }}>
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    onClick={(data, actions)=>
                    {
                        return actions.reject()
                        // return actions.resolve()
                    }}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) =>
                            {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={async (data, actions)=>
                    {
                        await actions.order.capture().then(()=>
                        {
                            //create the order
                            dispatch(createOrderAction(customer?.id, address?.id, amount, order_reference))
                            navigate('/mude/order/detail')
                        });
                    }}
                    onCancel={(data, actions)=>
                    {
                        return actions.redirect('/mude/checkout')
                    }}
                    onError={(error)=>
                    {
                        console.error(error)
                    }}/>
            </PayPalScriptProvider>
        </div>
    );
}
export default Paypal
