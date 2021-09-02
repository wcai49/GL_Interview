const express = require('express');
const router = express.Router();

const account_controller = require('../controllers/account.controller');



//authentication
router.get('/users', account_controller.account_all)
router.post('/authenticate', account_controller.account_Auth);
router.post('/signup', account_controller.account_SignUp);



module.exports = router;
