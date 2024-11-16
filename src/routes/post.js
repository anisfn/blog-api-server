import express from "express"
import { createdPost } from "../controllers/post.js"

const router = express.Router()

router.post(
    '/post',
    createdPost
)

export default router