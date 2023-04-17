import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Header/>
  <Routes path="/todos">
    <Route path="/" element={<Home/>}></Route>
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
