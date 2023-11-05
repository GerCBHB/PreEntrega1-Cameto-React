import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Khali Design"}/>}/> 
          <Route path="/category/:categoryId" element ={<ItemListContainer />}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer />}/>
          <Route path="/cart" element={ <Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter> 
    </div>
  );
}

export default App;
