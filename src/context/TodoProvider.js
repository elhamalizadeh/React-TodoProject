import { useCallback, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import TodoContext from "./TodoContext";
import axios from "axios";

const TodoProvider = ({children}) => {
    const initialState = {
        todos: [],
        error: null
    };

const [state, dispatch] = useReducer(TodoReducer , initialState);

    const getTodos = useCallback(async () =>{

        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            dispatch({ type: "SET_TODOS", payload: res.data});
            dispatch({ type: "SET_ERROR", payload: null})
        } catch(err){
            dispatch({ type: "SET_ERROR", payload: err.message });
            dispatch({ type: "SET_TODOS", payload: [] });
        }
    },[] );


    const filterTodos = async (count) =>{

        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`);
            dispatch({ type: "SET_FILTER_TODO", payload: res.data});
            dispatch({ type: "SET_ERROR", payload: null})
        } catch(err){
            dispatch({ type: "SET_ERROR", payload: err.message });
            dispatch({ type: "SET_Filter", payload: [] });
        }
    }
 

return (
    <TodoContext.Provider value={{...state , getTodos , filterTodos}} >
            {children}
    </TodoContext.Provider>

)
}
export default TodoProvider;