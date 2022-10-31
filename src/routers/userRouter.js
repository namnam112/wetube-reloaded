import express from "express";
import morgan from "morgan";
import {getedit,postedit, remove,logout,upload,see,startGitHubLogin, finishGithubLogin, getChagePassword, postChagePassword} from "../controllers/userController.js"
import { avatarUpload, protectorMiddleWare } from "../middleware.js";


const userRouter = express.Router()

userRouter.get(":remove", remove);
userRouter.route("/edit").all(protectorMiddleWare).get(getedit).post(avatarUpload.single("avatar"),postedit);
userRouter.get("/logout", protectorMiddleWare,logout);
userRouter.get("/github/start" ,startGitHubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/:id", see);
userRouter.route("/change-password").all(protectorMiddleWare).get(getChagePassword).post(postChagePassword)

export default userRouter;