//require("dotenv").config()
import express from "express";
import morgan from "morgan";
import session from "express-session"
import rootRouter from "./routers/rootRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";
import { localsMiddleWare } from "./middleware.js";
import MongoStore from "connect-mongo";
import apiRouter from "./routers/apiRouter.js";
import flash from "express-flash"
const app = express();

const logger = morgan("dev")

app.set("view engine","pug")
app.set("views",process.cwd()+"/src/views")
app.use(logger)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave : false,
    saveUninitialized : false,
    store : MongoStore.create({mongoUrl:process.env.DB_URL}),
}))

app.use(flash())
app.use(localsMiddleWare)
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api",apiRouter)


const mothodlogger=(req,res,next)=>{

    next()
}
const routerlogger=(req,res,next)=>{
   
    next()
    }

const handleprotected = (req,res,next)=>{
    return res.send("welcome to private lounge")
}

export default app


