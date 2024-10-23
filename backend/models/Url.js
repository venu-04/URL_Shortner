import mongoose, { mongo } from "mongoose";

const UrlSchema = new mongoose.Schema({
    originalUrl: {type:String,required:true},
    shortUrl:{type:String,required:true},
    date:{type:Date,default:Date.now}
});

const url = mongoose.model('url',UrlSchema);
export default url;