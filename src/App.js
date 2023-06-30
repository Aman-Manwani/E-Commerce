import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Main from "./components/heroPage/Main";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
