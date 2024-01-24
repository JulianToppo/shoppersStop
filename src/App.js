import "./App.css";
import CartItem from "./components/Cart/CartItem";
import EntryForm from "./components/EntryForm/EntryForm";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartStore from "./utils/CartStore";
import ProductStore from "./utils/ProductStore";

function App() {
  return (
    <ProductStore>
      <CartStore>
        <Header/>
        <EntryForm />
        <ProductDetails />
        <CartItem/>
      </CartStore>
    </ProductStore>
  );
}

export default App;
