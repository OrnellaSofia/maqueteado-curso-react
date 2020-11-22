import React from "react";
import './styles.scss';

const Categories = (props) => (
  <div className="categories">
    <h3>{props.categoria}</h3>
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
);

export default Categories
