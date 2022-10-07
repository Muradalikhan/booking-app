import express from "express";
import { createUser } from "../controllers/auth.js";

const router = express.Router();

//register
router.post("/register", createUser);

export default router;
