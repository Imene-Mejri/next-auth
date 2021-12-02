import axios from 'axios'
import { shallowEqual } from 'react-redux'
import { GET_ERRORS, SET_CURRENT_USER } from '../types'
import jwt_decode from 'jwt-decode'


export const RegisterAction = (form, toggle)=>(dispatch)=>{
    axios.post('/api/register', form)
    .then(result=>{
        alert(`${result.data.message}`)
        toggle();
        
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const LoginAction = (form, router)=>(dispatch)=>{
    axios.post('/api/login', form)
    .then(result=>{
          
        router.push('/logo')

        const token = result.data.token;
        window.localStorage.setItem("jwtToken", token)
        const decoded = jwt_decode(token)
        
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        })
    })
    .catch(err=>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    })
}


