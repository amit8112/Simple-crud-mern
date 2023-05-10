import mongoose from "mongoose";

const userShema = mongoose.Schema({
    name: {
        type : 'string',
    },
    email: {
        type : 'string',
    },
    phone: {
        type : 'string',
    },
    age: {
        type : 'string',
    }

})

const userModel = mongoose.model("users",userShema);
export default userModel;