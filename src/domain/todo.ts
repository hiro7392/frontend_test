import { DummyTodos } from "../mocks/sampleTodos";

export type Todo={
    id:string,
    content:string,
    created_at?:string,
    updated_at?:string,
    tag:string,
};
export type Todos=typeof DummyTodos