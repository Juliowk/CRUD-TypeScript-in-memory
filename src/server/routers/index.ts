import { Router } from "express";
import * as Controller from "../controller";
const router = Router();

router.get("/", Controller.get);
router.post("/create", Controller.create);
router.get("/items", Controller.getItems);
router.get("/items/:id", Controller.getItemByID);
router.put("/items/:id", Controller.updateById);
router.delete("/items/:id", Controller.deleteById);

export { router };