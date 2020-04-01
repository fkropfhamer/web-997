import express from 'express';
import mlController from '../controller/mlController'

const router = express.Router();

router.get('/', mlController.index);
router.get('/mnist', mlController.mnist);

export default router;
