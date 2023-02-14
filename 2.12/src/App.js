import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Products from "./components/Products";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <h1 className="text-center mb-4">Shopping Cart</h1>
      <div className="d-flex justify-content-evenly gap-2">
        <Products />
        <Cart />
      </div>
    </Provider >
  );
}
