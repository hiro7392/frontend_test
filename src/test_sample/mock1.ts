export function greet(name:string){
    return `Hello! ${name}`
}

export function sayGoodBye(name:string){
    console.log(name)
    throw new Error("未実装")
}