import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CartContainer from './components/CartContainer';
import { calculateTotal } from './feature/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <div className="App">
     <Navbar />
     <CartContainer />
    </div>
  );
}

export default App;
