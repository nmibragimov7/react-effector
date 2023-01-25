import {useStore} from "effector-react";
import {Store} from "effector";

import {inputText} from "../../store/events";
import React from "react";

export default function useInput($store: Store<string>) {
    const value = useStore($store);
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        inputText(event.currentTarget.value)
    }

    return {
        value,
        onChange
    }
}
