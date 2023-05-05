import {add,add2, addWithException} from "./";

describe("add",()=>{
    test("add:1+2は3",()=>{
        expect(add(1,2)).toBe(3);
    });
    test("add:1+2は3",()=>{
        expect(add(1,5)).toBe(6);
    });
    // test("このテストは失敗します",()=>{
    //     expect(add(1,5)).toBe(7);
    // });
})

describe("add2",()=>{
    test("add2 上限は100なので 100+1=100",()=>{
        expect(add2(100,1)).toBe(100);
    })
    test("add2 上限は100なので 50+1=51",()=>{
        expect(add2(50,1)).toBe(51);
    })
})

describe(("addWithException"),()=>{
    test("例外付きadd aがマイナスのとき ",()=>{
        //  expect(addWithException(-1,1)).toThrow();としないように注意
        expect(()=>addWithException(-1,1)).toThrow(RangeError("aの入力値は0-100で入力してください"));
    })
    test("例外付きadd bがマイナスのとき",()=>{
        expect(()=>addWithException(1,-1)).toThrow(Error("bの入力値は0-100で入力してください"));
    })
})
//  マッチャーのテスト
describe("Matcherの検証",()=>{
    //  真の値
    test("真の値の検証",()=>{
    expect(1).toBeTruthy();
    expect("1").toBeTruthy();
    expect(true).toBeTruthy();
    expect("").not.toBeTruthy();
    expect("").toBeFalsy();
    });

    //  nullとundefinedの検証
    test("null,undefinedの検証",()=>{
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    })
});


//  数値の検証
describe("数値の検証",()=>{
    const value=2+2;
    test("検証値は期待値と等しい",()=>{
        expect(value).toBe(4);
        expect(value).toEqual(4);
    })
    test("検証値は期待値より大きい",()=>{
        expect(value).toBeGreaterThan(3);   //4>3
        expect(value).toBeGreaterThanOrEqual(4);    //4>=4
    })
    test("検証値は期待値より小さい",()=>{
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4);
    })
});

describe("小数点の検証",()=>{
    test("小数計算は正確ではない",()=>{
        expect(0.1+0.2).not.toBe(0.3);
        /**
        Expected: 0.3
        Received: 0.30000000000000004
         */
    });
    test("指定の小数点以下n桁までを比較する",()=>{
        expect(0.1+0.2).toBeCloseTo(0.3);
        expect(0.1+0.2).toBeCloseTo(0.3,15);
        expect(0.1+0.2).not.toBeCloseTo(0.3,16);
    });
});
