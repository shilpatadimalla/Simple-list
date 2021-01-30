import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var array = [
  { product: "Apple", price: 3 },
  { product: "Banana", price: 1 },
  { product: "Carrot", price: 2 },
  { product: "Donuts", price: 5 },
  { product: "Eggplant", price: 4 }
];

class ProductList extends React.Component {
  render() {
    var elements = array.map((item, index) => {
      return (
        <li key={item.product}>
          Product: {item.product} | Price: {item.price}{" "}
        </li>
      );
    });
    return <ol>{elements}</ol>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ProductList />, rootElement);
