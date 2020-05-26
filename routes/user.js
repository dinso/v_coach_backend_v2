import { Router } from 'express';
const route = Router();
import auth from '../middleware/auth';

import { user } from '../controllers';
const userController = user;

route.post('/loginAdmin', userController.loginAdmin);

route.post('/signup', userController.signUp);

route.get('/getAllUsers', auth, userController.getAllUsers);

export default route;