import "./App.scss";
import Header from "./components/Header";
import Product from "./components/Product";
import Categories from "./components/Categories";
import VistaProducto from './components/VistaProducto'
import Footer from './components/Footer'
import Productos from './components/Productos'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Productos} />
        <Route exact path="/product" component={VistaProducto} /> 
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
