import './App.scss';
import Header from './components/Header'
import Products from './components/Products'
import Categories from './components/Categories'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Categories categoria="Notebook"/>
        <Products/>
      </div>
    </div>
  );
}

export default App;
