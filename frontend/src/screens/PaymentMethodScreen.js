import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import { CheckoutSteps } from '../components/CheckoutSteps'
import { useForm } from '../hooks/useForm'

export const PaymentMethodScreen = ({ history }) => {


    const { paymentMethod: method, shippingAddress } = useSelector(state => state.cart)
    if (!shippingAddress.address) {
        history.push('/shipping')
    }
    const [ formVaules, handleInputChange ] = useForm({
        paymentMethod: method
    });
    const { paymentMethod } = formVaules;

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( savePaymentMethod( paymentMethod ) )
        history.push('/placeorder')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={ handleSubmit }>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div className="pointer">
                        <input
                            className='mr-05 pointer'
                            type="radio"
                            name="paymentMethod"
                            id="paypal"
                            value="PayPal"
                            required
                            checked={ paymentMethod === 'PayPal' }
                            onChange={ handleInputChange }
                        />
                        <label className="p-tb-05 pointer" htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div className="pointer">
                        <input
                            className='mr-05 pointer'
                            type="radio"
                            name="paymentMethod"
                            id="stripe"
                            value="Stripe"
                            required
                            checked={ paymentMethod === 'Stripe' }
                            onChange={ handleInputChange }
                        />
                        <label className=" p-tb-05 pointer" htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className='primary' type='submit'>Continue</button>
                </div>
            </form>
        </div>
    );
}
