import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CartContainer from './components/CartContainer';
import { calculateTotal, getCartItems } from './feature/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Model from './components/Model';



function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.model);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
    // eslint-disable-next-line
  }, [ cartItems ]);

  useEffect(() => {
    dispatch(getCartItems())
    // eslint-disable-next-line
  }, []);

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      { isOpen && <Model />}
     <Navbar />
     <CartContainer />
    </div>
  );
}

export default App;
