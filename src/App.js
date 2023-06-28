import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/"/>
        <Route path="/cart"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
