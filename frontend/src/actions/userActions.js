import axios from "axios"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"

export const startLoginEmailPassword = ( email, password ) => {
    return async( dispatch ) => {
        dispatch({
            type: USER_SIGNIN_REQUEST,
            payload: {
                email,
                password
            }
        })

        try {
            const { data } = await axios.post('api/users/signin', { email, password })
            dispatch({
                type: USER_SIGNIN_SUCCESS,
                payload: data 
            })

            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch (err) {
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: 
                    err.response && err.response.data.message 
                        ? err.response.data.message
                        : err.message,
            })
        }
    }
}

export const startRegister = ( name, email, password ) => {
    return async( dispatch ) => {
        dispatch({
            type: USER_REGISTER_REQUEST,
            payload: {
                email,
                password
            }
        })

        try {
            const { data } = await axios.post('api/users/register', { name, email, password })
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data 
            })
            dispatch({
                type: USER_SIGNIN_SUCCESS,
                payload: data 
            })

            localStorage.setItem("userInfo", JSON.stringify(data))
        } catch (err) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: 
                    err.response && err.response.data.message 
                        ? err.response.data.message
                        : err.message,
            })
        }
    }
}


export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('shippingAddress');

        dispatch({
            type: USER_SIGNOUT
        })
    }
}
