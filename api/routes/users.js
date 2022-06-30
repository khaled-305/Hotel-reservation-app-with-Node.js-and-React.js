import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import User from "../models/Hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// CHECK AUTHENTICATION
router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.status(200).send("You are logged In")
})

// CHECK USER
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.status(200).send("You are logged In")
})

// CHECK ADMIN
router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.status(200).send("You are logged In as an admin")
})

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUser);
 
export default router