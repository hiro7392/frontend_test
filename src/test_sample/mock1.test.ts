import { greet, sayGoodBye } from "./mock1"

jest.mock("./mock1",()=>({
    ...jest.requireActual("./mock1"),
    sayGoodBye:(name:string)=>`Good bye, ${name}`,
}));

test("挨拶を返す 本来の実装通り",()=>{
    expect(greet("Taro")).toBe("Hello! Taro");
})
//  モックを返す
test("さよならを返す (本来の実装ではない)",()=>{
    const message=`${sayGoodBye("Taro")} See you`;
    expect(message).toBe("Good bye, Taro See you");
})