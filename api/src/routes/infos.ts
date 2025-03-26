import express from 'express';
import controllers from "../controllers/infos";

const router = express.Router();

router.get('/infos', controllers.getInfosController);

export default router;