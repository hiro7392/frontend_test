import { wait } from "./async";
//  非同期処理のテスト  4つの方法でテストできる

//  Promiseをreturnする方法
test("指定時間経つと、経過時間をもってresolveされる",()=>{
    //  Promiseをreturnする書き方
    return wait(50).then((duration)=>{
        expect(duration).toBe(50);
    });
});

// //  resolveを使用したアサーションをreturnする方法
// test("指定時間待つと、経過時間をもってresolveされる",()=>{
//     return expect(wait(50)).resolves.toBe(50);
// })

// //  async/awaitを使った書き方
// test("指定時間待つと、経過時間をもってresolveされる",async ()=>{
//     await expect(wait(50)).resolves.toBe(50);
// })

// //  検証値のPromiseが解決するのを待ってからアサーションに展開する方法
// test("指定時間待つと、経過時間をもってresolveされる",async ()=>{
//     await expect(wait(50)).toBe(50);
// })

// //  Rejectを検証するテスト
