import express from 'express';
import evolutionController from '../controller/evolutionController'

const router = express.Router();

router.get('/eight-puzzle', evolutionController.eightPuzzle);

router.get('/traveling-salesman', evolutionController.travelingSalesman);

router.get('/', evolutionController.index);

export default router;
