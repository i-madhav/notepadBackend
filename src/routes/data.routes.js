import { Router } from "express";
import { generateDocument } from "../controller/data.controller.js";
const router = Router();

router.route("/").post(generateDocument);

export default router;