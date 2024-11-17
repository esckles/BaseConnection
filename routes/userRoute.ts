import express, { Router } from "express";
import { createAccount } from "../controller/userController";
const router = Router();
router.route("/create-account").post(createAccount);
export default router;
