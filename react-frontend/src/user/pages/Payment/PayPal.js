import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const PayPal = () => {
    const paypal = useRef();
    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: "USD",
                                value: 650.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await (actions.order.capture())
                console.log(order)
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])

    return (
    <div>
        <div ref={paypal}></div>
    </div>
    )
}

// PayPal.propTypes = propTypes;
// PayPal.defaultProps = defaultProps;

export default PayPal;