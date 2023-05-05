export class HttpError extends Error{}
export class RangeError extends Error{}
export const add=(a:number,b:number)=>{
    return a+b;
}
export const add2=(a:number,b:number)=>{
    const sum:number=a+b;
    if(sum>100){
        return 100;
    }
    return sum;
}
// 
export const addWithException=(a:number,b:number)=>{
    if(a<0 || a>100){
        throw new RangeError("aの入力値は0-100で入力してください")
    }
    if(b<0 || b>100){
        throw new RangeError("bの入力値は0-100で入力してください")
    }
    const sum:number=a+b;
    if(sum>100){
        return 100;
    }
    
    return a+b;
}