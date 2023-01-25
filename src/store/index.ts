import {combine, createStore, restore} from "effector";

import {inputText, toggleTodo} from "./events";
import {getTodosFx} from "./effects";
import {Todo} from "./types";

const updateInput = (_: string, data: string) => data;
const fetchTodos = (_: Todo[], data: Todo[]): Todo[] => data;
const updateTodo = (state: Todo[], id: number): Todo[] => state.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);

export const $input = createStore<string>("");
$input.on(inputText, updateInput);

export const $todos = createStore<Todo[]>([]);
export const $error = restore<Error>(getTodosFx.failData, null);
$todos.on(getTodosFx.doneData, fetchTodos);
$todos.on(toggleTodo, updateTodo);

export const $todosStore = combine({
    loading: getTodosFx.pending,
    error: $error,
    todos: $todos,
});
