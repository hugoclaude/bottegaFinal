import React from 'react';
import authController from '../../controllers/auth';

const router = React.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;