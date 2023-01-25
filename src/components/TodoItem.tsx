import React from 'react';

import BaseCheckbox from "./base/BaseCheckbox/BaseCheckbox";
import {Todo} from "../store/types";
import {toggleTodo} from "../store/events";

interface IProps {
    item: Todo;
    className?: string;
}

const TodoItem: React.FC<IProps> = (props) => {
    const {
        item,
        className
    } = props;

    return (
        <div className={className}>
            <BaseCheckbox
                name={`todo-${item.id}`}
                value={item.completed}
                setValue={() => toggleTodo(item.id)}
            >
                {item.title}
            </BaseCheckbox>
        </div>
    );
};

export default TodoItem;
