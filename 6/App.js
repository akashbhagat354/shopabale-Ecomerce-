import logo from './logo.svg';
import './App.css';
import Category from './Component/Category';
import Product from './Component/Product';
import Cart from './Component/Cart';
import CheckOut from './Component/CheckOut';
import CheckSecond from './Component/CheckSecond';
import Contact from './Component/Contact';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';



function App() {
  return (
    <div className="App">     
        <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Category></Category>
      <Product></Product> 
      <Cart></Cart>
      <CheckOut></CheckOut>
      <CheckSecond></CheckSecond> 
      <Contact></Contact>
    </div>
  );
}

export default App;
