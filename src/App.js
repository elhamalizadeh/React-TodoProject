import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Todos from "./pages/Todos";
import TodoProvider from './context/TodoProvider';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>
  <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/todos" element ={
          <TodoProvider>
            <Todos />
          </TodoProvider>
            }  />
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
