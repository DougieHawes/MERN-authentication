const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('name is required'),
  check('email')
    .isEmail()
    .withMessage('must be a valid email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long')
];

exports.userSigninValidator = [
  check('email')
    .isEmail()
    .withMessage('must be a valid email address'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 characters long')
];

exports.forgotPasswordValidator = [
  check('email')
    .not()
    .isEmpty()
    .isEmail()
    .withMessage('must be a valid email address')
];

exports.resetPasswordValidator = [
  check('newPassword')
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage('Password must be at least  6 characters long')
];
