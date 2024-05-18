import axios, { AxiosError } from "axios";

interface UserResponse{
    user: string |null,
    error:AxiosError| null
}


export async function getUser():Promise<UserResponse>
{
    try
    {
        console.log("in get user")
        const {data}= await axios.get("/api/auth/me")
        return{
            user:data,
            error:null,
        }
    }
    catch(e)
    {
        const error = e as AxiosError;

        return{
            user:null,
            error:error
        }
    }
}