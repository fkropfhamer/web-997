import express from 'express';
import indexController from '../controller/indexController'

const router = express.Router();

router.get('/about', indexController.about);

router.get('/', indexController.index);



export default router;
