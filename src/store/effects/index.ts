import {createEffect} from "effector";
import axios from "axios";

import {Todo} from "../types";

export const getTodosFx = createEffect<void, Todo[]>("todos");
getTodosFx.use(async ()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=50");
    return response.data;
})
