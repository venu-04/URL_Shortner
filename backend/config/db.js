///password for cluster:FVPIKc3ypDudOFKi
import mongoose, { mongo } from "mongoose";
const url='mongodb+srv://kamsuvenu2004:FVPIKc3ypDudOFKi@cluster0.azq7e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async() => {
   mongoose.connect(url)
   .then(()=> {
    console.log("connected to database")
   })
   .catch((error) => {
    console.log("error connecting to database")
   })
};

export default connect;
