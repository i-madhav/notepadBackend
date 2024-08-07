import { Router } from "express";
import { fetchDocument, generateDocumentAndSaveDocument } from "../controller/data.controller.js";
const router = Router();

router.route("/save").post(generateDocumentAndSaveDocument);
router.route("/fetch/:id").get(fetchDocument);

export default router;