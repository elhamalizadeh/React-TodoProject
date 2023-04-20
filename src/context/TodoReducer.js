 const TodoReducer = (state, action) => {
    switch (action.type) {
        case "SET_TODOS":
            return {
                ...state,
                todos: action.payload
            };

            case "SET_FILTER_TODO":
            return {
                ...state,
                todos: action.payload
            };

            case "SET_CREATE_TODO":
                return {
                    ...state,
                    todos: [action.payload , ...state.todos]
                };

        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
}

export default TodoReducer;
