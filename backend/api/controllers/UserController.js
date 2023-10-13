const Joi = require('joi');
const Bcrypt = require('bcrypt');
const saltRound = 10;

/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {

    try {
      const schema = Joi.object({
        username: Joi.string()
          .alphanum()
          .min(2)
          .max(20)
          .required(),

        password: Joi.string()
          .min(6)
          .required()
          .pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')),

        repeatPassword: Joi.ref('password'),

        email: Joi.string()
          .email()
          .required()
      });

      const {email, password, username} = await schema.validateAsync(req.allParams())
      const hashedPassword = await Bcrypt.hash(password, saltRound);
      const user = await User.create({email, password: hashedPassword, username}).fetch();

      return res.ok(user);
    } catch (err) {
      if(err.name === 'ValidationError'){
        return res.badRequest({err}).json();
      }

      return res.serverError({err}).json();
    }
  },
  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try {
      const schema = Joi.object({
        password: Joi.string()
          .min(6)
          .required()
          .pattern(new RegExp('^[a-zA-Z0-9_]{3,30}$')),

        repeatPassword: Joi.ref('password'),

        email: Joi.string()
          .email()
          .required()
      });

      const {email, password} = await schema.validateAsync(req.allParams())

      const user = await User.findOne({email});

      if (!user) {
        return res.notFound({err: 'User not found'});
      }

      const comparedPassword = await Bcrypt.compare(password, user.password)
      return (comparedPassword) ? res.ok(user) : res.badRequest({err: 'Unauthorized'})

    } catch (err) {
      if(err.name === 'ValidationError'){
        return res.badRequest({err}).json();
      }

      return res.serverError({err}).json();
    }
  }

};

