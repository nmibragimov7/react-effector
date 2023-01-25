import React, {useCallback, useEffect, useState} from 'react';
import {useStore} from "effector-react";

import TodoItem from "../components/TodoItem";
import BaseInput from "../components/base/BaseInput/BaseInput";
import useInput from "../core/hooks/useInput";
import {getTodosFx} from "../store/effects";
import {$input, $todos, $todosStore} from "../store";
import {Todo} from "../store/types";
import BaseSpinner from "../components/base/BaseSpinner/BaseSpinner";

const Todos = () => {
    const [filtered, setFiltered] = useState<Todo[]>([]);
    const {value, onChange} = useInput($input);
    const {todos, loading, error} = useStore($todosStore);
    const filterTodos = useCallback((data: string) => {
        if (data.length) {
            const items = todos.filter(todo => {
                if (todo.title.includes(data)) {
                    return todo;
                }
            });
            setFiltered(items);
            return;
        }
        setFiltered(todos);
    }, [value, todos]);
    const fetchTodos = useCallback(async () => {
        await getTodosFx();
        setFiltered(todos);
    }, [todos]);
    useEffect(() => {
        fetchTodos();
    }, []);
    useEffect(() => {
        filterTodos(value);
    }, [value, todos]);

    return (
        <>
            <div className={"max-w-xl mx-auto mb-4"}>
                <BaseInput
                    name={"text"}
                    value={value}
                    placeholder={"Поиск по заголовку..."}
                    onChange={onChange}
                />
            </div>
            {!loading && error && <p className={"text-center text-red font-bold"}>{error?.message}</p>}
            {loading && <div className={"flex justify-center"}>
                <BaseSpinner/>
            </div>}
            <div className={"flex flex-col gap-2 max-w-md mx-auto"}>
                {!loading && filtered.map((todo: Todo) => (
                    <TodoItem key={todo.id} item={todo}/>
                ))}
            </div>
        </>
    );
};

export default Todos;
