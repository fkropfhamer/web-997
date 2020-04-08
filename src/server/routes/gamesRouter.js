import express from 'express';
import gamesController from '../controller/gamesController'

const router = express.Router();

router.get('/tictactoe', gamesController.tictactoe);

router.get('/', gamesController.index);



export default router;
