import express from 'express';
import mobileController from '../controller/mobileController'

const router = express.Router();

router.get('/', mobileController.index);

export default router;
