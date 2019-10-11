import React from "react";
import "../styles/ProductLists.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => this.setState({ products: res.data }));
  }

  render() {
    return (
      <div className="products">
        {this.state.products.map(product => (
          <div>
            <Link to={`/product/${product.product_id}`}>
              <h1>{product.title}</h1>
            </Link>
            <img src={product.image} alt="product"></img>
            <h3>{product.description}</h3>
            <h4>Likes:{product.likes}</h4>
            <button
              onClick={() => {
                axios.put(`/api/products/${product.product_id}`);
                alert("like recorded, refresh the page");
              }}
            >
              Like
            </button>
            <button
              onClick={() => {
                axios.delete(`/api/products/${product.product_id}`);
                alert("dislike recorded, refresh the page");
              }}
            >
              Dislike
            </button>
            <h4>${product.price}</h4>
          </div>
        ))}
      </div>
    );
  }
}
