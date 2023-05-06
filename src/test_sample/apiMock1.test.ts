import { getGreet } from "./apiMock1";
import * as Fetchers from "./fetchers";
jest.mock("./fetchers");



test("データ取得成功時:ユーザー名がない場合",async ()=>{
    //getMyPRofileがresolveしたときの値を再現
    jest.spyOn(Fetchers,"getMyProfile").mockResolvedValueOnce({
        id: "xxxxxx-123456",
        email: "taroyamada@mayapi.testing.com",
    });
    await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});

test("データ取得成功時:ユーザー名がある場合",async ()=>{
    //getMyPRofileがresolveしたときの値を再現
    jest.spyOn(Fetchers,"getMyProfile").mockResolvedValueOnce({
        id:     "xxxxxx-123456",
        email:  "taroyamada@mayapi.testing.com",
        name:   "taro",
    });
    await expect(getGreet()).resolves.toBe("Hello, taro");
});

test("データ取得失敗時",async ()=>{
    //  getMyProfileがrejectされた時の値を再現
    jest.spyOn(Fetchers,"getMyProfile").mockRejectedValueOnce(Fetchers.httpError);
    // await expect(getGreet()).rejects.toMatchObject({
    //     name:"500",
    //     message:"internal server error"
    // });
    try{
        await getGreet();
    }catch(err){
        expect(err).toMatchObject(Fetchers.httpError);
    }

});