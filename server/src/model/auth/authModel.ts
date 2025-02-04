import {Schema, model} from 'mongoose';

interface Auth{
    name: string,
    password: string
}
export const authSchema = new Schema<Auth>({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
})

export const AuthModel = model<Auth>("Auth", authSchema);