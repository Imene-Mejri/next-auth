import React, {useState} from 'react'
import { InputGroup } from './InputGroup'
import {useSelector, useDispatch} from 'react-redux'
import { LoginAction } from '../redux/actions/AuthActions'
import {useRouter} from 'next/router'
function Login({show}) {
    const auth = useSelector((state) => state.auth)
    const errors = useSelector((state) => state.errors)
    const dispatch  = useDispatch();
    const [form, setForm] = useState({})
    const router = useRouter();
    const handle_change = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }


    const submit_form = (e)=>{
        e.preventDefault();
        dispatch(LoginAction(form, router))
    }

    
    return (
        <div>
            <form onSubmit={submit_form}>
                <div className="display__fields" style={{ display:  show === false ? 'none' : 'block'  }}>
                <InputGroup type="text" name="email" placeholder="your email please" onchange={handle_change} errors={errors.email}/>
                <InputGroup type="password" name="password" placeholder="your password please" onchange={handle_change} errors={errors.password}/>
                <button type="submit" className="btn btn-secondary mt-4 w-50">login</button>

                </div>
            </form>
        </div>
    )
}

export default Login
