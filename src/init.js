
import "regenerator-runtime"
import "dotenv/config";
import "./db.js"
import  "./models/Video.js"
import  "./models/User.js"
import  "./models/Comment.js"
import app from "./server.js"

const PORT = 4000;

const handleListening = () => console.log("")
app.listen(PORT, handleListening)