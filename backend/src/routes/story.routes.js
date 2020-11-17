import { Router } from "express";
import storyController from "../controllers/story.controller";
import authMiddleware from "../middlewares/auth.middleware";

const storyRoutes = Router();
storyRoutes.post("/story", authMiddleware, storyController.add);
storyRoutes.get("/story", authMiddleware, storyController.get);
storyRoutes.get("/story/:id", authMiddleware, storyController.delete);

export { storyRoutes };
