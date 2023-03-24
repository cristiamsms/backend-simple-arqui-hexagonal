import { model, Schema } from "mongoose";
import { User } from "../../core/entities/User";

 const userSchema = new Schema<User>({

  
    name: { type: String, required: true },
    nickname:{type:String, required:true,unique:true  },
    password:{type:String, required:true},
    team:{type:String, required:true},
    last_connection:{type:Date, required:true}
});

export const Users = model<User>('user', userSchema);