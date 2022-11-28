import express from "express";

const videoRouter = express.Router();
import {getUpload,getEdit,deleteVideo,watch,postEdit, postUpload} from "../controllers/videocontroller.js"
import { protectorMiddleWare, avatarUpload, videoUpload } from "../middleware.js";



videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleWare).get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleWare).get(deleteVideo);
videoRouter.route("/upload").all(protectorMiddleWare).get(getUpload).post(videoUpload.fields([{ name: "video" }, { name: "thumb" }]), postUpload);
export default videoRouter;