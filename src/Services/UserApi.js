import { userinstance } from "../axios/axiosInstance";



export const signup= (value)=>{
    return userinstance.post("/signup",{...value})
};