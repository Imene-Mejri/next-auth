const isEmpty = require('./isEmpty');
const validator = require('validator');

//data = req.body
module.exports = function validateLogin(data){
   
     let errors = {};
     
     data.email = !isEmpty(data.email) ? data.email : ''
     data.password = !isEmpty(data.password) ? data.password : ''
     

     
      if(!validator.isEmail(data.email)){
        errors.email = 'verify format email'
      }
      if(validator.isEmpty(data.email)){
        errors.email = 'required email'
      }
      
      if(validator.isEmpty(data.password)){
        errors.password = 'required password'
      }
      
      
     
      return {
          errors, //errors list
          isValid: isEmpty(errors) //true , false

      }
}