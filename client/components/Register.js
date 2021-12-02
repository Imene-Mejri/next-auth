import React, {useState} from 'react'
import { connect } from 'react-redux'
import { RegisterAction } from '../redux/actions/AuthActions'
import { InputGroup } from './InputGroup'

function Register({RegisterAction, toggle, errors, show}) {
    const [form, setForm] = useState({})
    const handle_change = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }


    const submit_form = (e)=>{
        e.preventDefault();
        RegisterAction(form, toggle)
    }

   
    return (
        <div>
            <form onSubmit={submit_form}>
                <div className="display__fields" style={{ display:  show === false ? 'none' : 'block'  }}>
                    <InputGroup type="text" name="firstname" placeholder="enter your firstName please" onchange={handle_change} errors={errors.firstname}/>
                    <InputGroup type="text" name="lastname" placeholder="enter your lastName please" onchange={handle_change} errors={errors.lastname} />
                    <InputGroup type="text" name="email" placeholder="your email please" onchange={handle_change} errors={errors.email}/>
                    <InputGroup type="password" name="password" placeholder="your password please" onchange={handle_change} errors={errors.password}/>
                    <InputGroup type="password" name="confirm" placeholder="confirm your password please" onchange={handle_change} errors={errors.confirm}/>
                  <button className="btn btn-secondary mt-4 w-50" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}


const mapStateToProps = (state)=>({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {RegisterAction})(Register)
