import { getMyTodoData } from "../mocks/getMyTodoData";
import { mockGetMyTodo } from "../mocks/mockGetMyTodo"
import { getMyTodo } from "./getTodosByUserId";

test("指定したuserIdを持つTodoが一件もない場合,nullが返る",async ()=>{
    mockGetMyTodo();
    const data=await getMyTodo("1");

    //expect(data).toBeNull();
    expect(data).toMatchObject(getMyTodoData);
})


test("指定したuserIdを持つTodoが一件以上あればTodo[]が返る",async()=>{
    mockGetMyTodo();
    const data=await getMyTodo("1");
    expect(data).toMatchObject(getMyTodoData);

});