import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title : {type : String, requdired : true, trim : true, maxLength : 80},
    description : {type : String, requdired : true, trim : true, minLength : 20},
    createdAt : {type : Date, required:true,default : Date.now},
    hashtags : [{type : String, trim : true}],
    meta:{
        views : {type : Number, default : 0, requdired : true},
        rating : {type : Number, default : 0, requdired : true},}
});

videoSchema.static('formatHashtags',function(hashtags){
    return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`))
})

const Video = mongoose.model("Videos", videoSchema);

export default Video;
