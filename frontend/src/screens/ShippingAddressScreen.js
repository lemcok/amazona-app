import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveShippingAddress } from '../actions/cartActions'
import { CheckoutSteps } from '../components/CheckoutSteps'
import { useForm } from '../hooks/useForm'

export const ShippingAddressScreen = ({ history }) => {

	const { userInfo } = useSelector(state => state.userAuth)
	if (!userInfo) {
		history.push('/signin')
	}

	const { shippingAddress } = useSelector(state => state.cart)

    const [ formValues, handleInputChange ] = useForm({
        fullName: shippingAddress.fullName,
        address: shippingAddress.address,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        country: shippingAddress.country,
    })
    const { fullName, address, city, postalCode, country } = formValues;

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( startSaveShippingAddress( formValues ) );
        history.push('/payment');
    }

    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={ handleSubmit } >
                <div>
                    <h1>Ahipping Address</h1>
                </div>

                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter full name"
                        value={ fullName }  
                        onChange={ handleInputChange }
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter address"
                        value={ address }  
                        onChange={ handleInputChange }
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        value={ city }  
                        onChange={ handleInputChange }
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="postalCode">PostalCode</label>
                    <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Enter postalCode"
                        value={ postalCode }  
                        onChange={ handleInputChange }
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Enter country"
                        value={ country }  
                        onChange={ handleInputChange }
                        required
                        autoComplete="off"
                    />
                </div>

                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}
