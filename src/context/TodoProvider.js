import axios from "axios";
import { useCallback, useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./TodoReducer"

const TodoProvider = ({ children }) => {
    const initialState = {
        todos: [],
        error: null
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const getTodos = useCallback(async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch({ type: "SET_TODOS", payload: res.data });
            dispatch({ type: "SET_ERROR", payload: null });
        } catch (err) {
            dispatch({ type: "SET_ERROR", payload: err.message });
            dispatch({ type: "SET_TODOS", payload: [] });
        }
    }, [])

    return (
        <TodoContext.Provider value={{ ...state, getTodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;