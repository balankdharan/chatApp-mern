import express from "express";
import { signUp, logout, login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/logout", logout);

export default router;
