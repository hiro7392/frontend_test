import { getMyProfile } from "./fetchers";


export async function getGreet(){
    const data=await getMyProfile();
    if (!data.name){
        //  名前がなければ定型分
        return `Hello, anonymous user!`;
    }

    //  名前を含んだ挨拶を返す
    return `Hello, ${data.name}`;
}