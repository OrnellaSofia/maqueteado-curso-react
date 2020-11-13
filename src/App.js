import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="div-search-bar">
          <input type="text" className="search-bar" placeholder="Buscar productos, marcas y más..."/>
        </div>
      </header>

      <div className="content">
        <div className="categories">
          <h3>Notebook</h3>
          <p>30.906 resultados</p>
          <h4>Categorías</h4>
          <ul>
            <li>Categoría 1</li>
            <li>Categoría 2</li>
            <li>Categoría 3</li>
            <li>Categoría 4</li>
            <li>Categoría 5</li>
          </ul>
        </div>
        <div className="products">
          <div className="one-product">
            Notebook
            <img src="https://picsum.photos/200" />
          </div>
          <div className="one-product">
            <img src="https://picsum.photos/200" />
          </div>
          <div className="one-product">
            <img src="https://picsum.photos/200" />
          </div>
          <div className="one-product">
              <img src="https://picsum.photos/200" />
          </div>
          <div className="one-product">
              <img src="https://picsum.photos/200" />
          </div>
          <div className="one-product">
              <img src="https://picsum.photos/200" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
