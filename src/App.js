import "./App.scss";
import Header from "./components/Header";
import Product from "./components/Product";
import Categories from "./components/Categories";
import VistaProducto from './components/VistaProducto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="content"> */}
        {/* <Categories /> */}
        {/* <div className="products"> */}
          {/* <Product 
          price="$45.000"
          description="Notebook HP i5 8GB"
          link="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/4/242D3PA-1_T1599447323.png" />
          <Product
          price="$50.000"
          description="Notebook Acer i3 8GB"
          link="https://images.anandtech.com/doci/15680/Swift-3_SF314-42_front-facing.jpg" />
          <Product
          price="$55.000"
          description="Matebook 8GB RAM"
          link="https://www.lenovo.com/medias/lenovo-ideapad-3-15-almond-intel-hero.png?context=bWFzdGVyfHJvb3R8Mjc2NTE3fGltYWdlL3BuZ3xoMWUvaDU1LzEwODU5MzUxNDc0MjA2LnBuZ3wwMWIzNGFhY2M1MTljZTNiMzAwYmE3NGFjOWFiNjU2MWIxYzI4Y2I1YmJhOTM1NDVkNmZjNjVlZWYyZGEyNmIx" />
        </div> */}
      {/* </div> */}
      <VistaProducto />
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
