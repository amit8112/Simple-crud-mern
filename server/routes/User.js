import express  from "express";
import UserController from "../controllers/User.controller.js";

const router = express.Router();

// All routers are here 

router.get('/users', UserController.getAllUsers);

router.post('/users', UserController.createUser);

router.get('/users/single/:id', UserController.getSingleUser);

router.put('/users/:id', UserController.updateUser);

router.delete('/users/:id', UserController.deleteUser);

export default  router;