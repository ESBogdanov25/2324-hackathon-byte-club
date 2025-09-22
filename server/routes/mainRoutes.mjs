import express from "express";
import { handleChatRequest, handleMoodRequest } from "../controllers/mainController.mjs";

const router = express.Router();

router.post('/chat', handleChatRequest);
router.get('/mood', handleMoodRequest);

router.get("/", (req, res) => {
    res.json({
        author: "Byte Club :)",
        message: "Hey!",
    });
});

export default router;
