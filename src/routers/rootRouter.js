import express from "express";
import {getJoin,postJoin,getLogin,postLogin} from "../controllers/userController.js"
import {home} from "../controllers/videocontroller.js"
import {getEdit,search} from "../controllers/videocontroller.js"
import { publicOnlyMiddleWare } from "../middleware.js";


const rootRouter = express.Router();


rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleWare).get(getJoin).post(postJoin)
rootRouter.route("/login").all(publicOnlyMiddleWare).get(getLogin).post(postLogin)
rootRouter.get("/search", search);

export default rootRouter;