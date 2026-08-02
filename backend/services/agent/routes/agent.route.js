import express from "express"
import { agent } from "../controllers/agent.controller.js"
import { transcribe } from "../controllers/transcribe.controller.js"
import multer from "../config/multer.js"
import multerAudio from "../config/multerAudio.js"

const router=express.Router()

router.post("/chat",multer.single("file"),agent)
router.post("/transcribe",multerAudio.single("audio"),transcribe)

export default router