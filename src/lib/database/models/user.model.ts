import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: String;
    firstName: string;
    lastName?: string;
    planId: string;
    creditBalance: number;
}

const UserSchema=new Schema({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    planId: { type : Number , required : true }, 
    creditBalance: { type : Number ,default:10}
});

const User=models?.User||model('User',UserSchema);

export default User;