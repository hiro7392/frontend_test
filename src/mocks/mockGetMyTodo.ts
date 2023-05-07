import * as Fetchers from "../hooks/getTodosByUserId"
import { httpError } from "../test_sample/fetchers";
import { getMyTodoData } from "./getMyTodoData";

export function mockGetMyTodo(status=200){
    if (status>299){
        return jest
        .spyOn(Fetchers,"getMyTodo")
        .mockRejectedValueOnce(httpError);
    }
    return jest
    .spyOn(Fetchers,"getMyTodo")
    .mockResolvedValueOnce(getMyTodoData);
}