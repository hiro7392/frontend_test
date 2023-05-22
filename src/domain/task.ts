import { DummyTodos } from "../mocks/sampleTodos";

export type Task={
    id:string,
    title:string,
    content:string,
    created_at?:string,
    updated_at?:string,
    tag:string,
};
export type Todos=typeof DummyTodos