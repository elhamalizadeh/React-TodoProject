import { useCallback, useReducer } from "react";
import TodoReducer from "./TodoReducer";
import TodoContext from "./TodoContext";
import axios from "axios";
import Swal from "sweetalert2";

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
 

    const createTodos = async (title) =>{

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/todos",{
                title : title ,
                completed : false
            });
            dispatch({ type: "SET_CREATE_TODO", payload: res.data});
            dispatch({ type: "SET_ERROR", payload: null});
            Swal.fire({
               title : "New task added!",
               icon : "success",
               showConfirmButton : false ,
               timerProgressBar : true,
               timer : 3000 ,
               toast : true ,
               position : 'top'
            }
              )
        } catch(err){
            dispatch({ type: "SET_ERROR", payload: err.message });
        }
    }

return (
    <TodoContext.Provider value={{...state , getTodos , filterTodos, createTodos}} >
            {children}
    </TodoContext.Provider>

)
}
export default TodoProvider;