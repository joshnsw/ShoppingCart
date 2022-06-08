
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Cart from './components/Cart'

import { CartProvider } from "react-use-cart";


function App() {
  return (
    <div className="App">
      <CartProvider> 
        <Home/>
      <Cart/> 
      </CartProvider>
     
    </div>
  );
}

export default App;
