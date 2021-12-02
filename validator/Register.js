const isEmpty = require('./isEmpty');
const validator = require('validator');

//data = req.body
module.exports = function validateRegister(data){
   
     let errors = {};
     data.firstname = !isEmpty(data.firstname) ? data.firstname : ''
     data.lastname = !isEmpty(data.lastname) ? data.lastname : ''
     data.email = !isEmpty(data.email) ? data.email : ''
     data.password = !isEmpty(data.password) ? data.password : ''
     data.confirm = !isEmpty(data.confirm) ? data.confirm : ''

     if(validator.isEmpty(data.firstname)){
       errors.firstname = 'required firstname'
     }
     if(validator.isEmpty(data.lastname)){
        errors.lastname = 'required lastname'
      }
      if(!validator.isEmail(data.email)){
        errors.email = 'verify format email'
      }
      if(validator.isEmpty(data.email)){
        errors.email = 'required email'
      }
      
      if(validator.isEmpty(data.password)){
        errors.password = 'required password'
      }
      if(!validator.equals(data.password, data.confirm)){
        errors.confirm= 'passwords not matches'
      }
      if(validator.isEmpty(data.confirm)){
        errors.confirm= 'required confirm'
      }
      
     
      return {
          errors, //errors list
          isValid: isEmpty(errors) //true , false

      }
}