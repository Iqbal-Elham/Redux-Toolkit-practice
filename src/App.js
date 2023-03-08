import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import CartContainer from './components/CartContainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <CartContainer />
    </div>
  );
}

export default App;
