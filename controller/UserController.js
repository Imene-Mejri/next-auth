const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegister = require("../validator/Register");
const validateLogin = require("../validator/Login");
const Register = (req, res) => {
  const { errors, isValid } = validateRegister(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  } else {
    var data = req.body;
    User.findOne({ email: req.body.email }).then((result) => {
      if (result) {
        res.json({
          email: "user exist",
        });
      } else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        data.password = hash;
        const user = new User(data);
        user
          .save()
          .then(() => res.json({ message: "user added with success" }));
      }
    });
  }
};

const Login = (req, res) => {
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  } else {
    User.findOne({ email: req.body.email }).then((result) => {
      if (!result) {
        res.status(404).json({ email: "user not exist" });
      } else {
        bcrypt.compare(req.body.password, result.password).then((isMatch) => {
          if (!isMatch) {
            res.json({ password: "password not equals" });
          } else {
            const payload = {
              firstname: result.firstname,
              lastname: result.lastname,
              email: result.email,
            };
           const token =  jwt.sign(payload, "imene", { expiresIn: 3600 })

           res.json({token: 'Bearer '+ token})
          }
        });
      }
    });
  }
};

module.exports = {
  Register,
  Login,
};
