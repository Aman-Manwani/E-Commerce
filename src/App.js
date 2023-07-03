import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import Main from "./components/heroPage/Main";
import ShopContextProvider from "./context/ShopContext";
import Description from "./components/productDesc/Description";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product/:id" element={<Description/>} />
          </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
