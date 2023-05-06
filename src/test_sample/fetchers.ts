import { HttpError } from "./basiceSample";

export type Profile={
    id:string;
    name?:string;
    age?:number;
    email:string;
};

export function getMyProfile():Promise<Profile>{
    return fetch("https://mysqpi.testing.com/my/profile").then(async (res)=>{
        const data=await res.json();
        if(!res.ok){
            //  200番台以外のレスポンスの場合
            throw data;
        }
        return data;
    })
}
export const httpError:HttpError={
    name:"500",
    message:"internal server error"
};