import { useContext, useState } from "react";
import todoContext from "../../context/TodoContext";

const CreateTodo = () => {
    const { createTodos } = useContext(todoContext);
    const [Title , setTitle] = useState('');
    const [loading, setLoading] = useState(false)

    const handleClick = async(e) =>{
        e.preventDefault();
        if(Title){
            setLoading(true);
            await createTodos(Title);
            setLoading(false)
        }
    }

    return(
        <>
        <h4>Create Todo : </h4>
        <form className="row" onSubmit={(e)=>handleClick(e)}>
        <div className="col-md-6" >
            <input onChange={(e) => setTitle(e.target.value)}  type="text" className="form-control" placeholder="Todo Title ..."></input>
            <div className="form-text text-danger">{ Title ? '': '*Title is required' }</div>
        </div>
        <div className="col-auto">
        <button type="submit" className="btn btn-dark mb-3 mt-1">{loading && <div className="spinner-border spinner-border-sm me-1"></div> }Create New</button>
        </div>
        </form>
        </>
    )
}
export default CreateTodo;