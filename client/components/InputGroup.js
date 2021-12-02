import React from 'react'
import classnames from 'classnames'
export const InputGroup = ({type, name, placeholder, onchange, errors})=> {
    return (
        <div>
          <input type={type} name={name} placeholder={placeholder}  className={classnames("w-50 mt-4 input__index",  {"is-invalid": errors})} onChange={onchange}/>  
           { errors && 
             <div  class="invalid-feedback">
               {errors}
             </div>
           }
        </div>
    )
}

 
