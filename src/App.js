import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"/>
          <Route path="/cart" Component={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
