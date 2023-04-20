import { useContext } from "react";
import todoContext from "../../context/TodoContext";

const FilterTodos = () => {
    const { filterTodos } = useContext(todoContext);

    const handleFilter =async (e) =>{
       await filterTodos(e.target.value)
    }

    return(
        <div className="col-md-3 mb-3">
            <h2>Filter:</h2>
            <select onChange={(e) => handleFilter(e)} className="form-select">
            <option value="100">all</option>
            <option value="5">5</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="75">75</option>
        </select>
        </div>
    )
}
export default FilterTodos;