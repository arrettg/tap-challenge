import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios
      .get(`/api/products/${this.props.match.params.id}`)
      .then(res => this.setState({ products: res.data }));
  }
  render() {
    // console.log(this.props.match.params.id);
    return (
      <>
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
        <div className="products">
          {this.state.products.map(product => (
            <div>
              <h1>{product.title}</h1>
              <img src={product.image} alt="product"></img>
              <h3>{product.description}</h3>
              <h4>Likes:{product.likes}</h4>
              <h4>${product.price}</h4>
            </div>
          ))}
        </div>
      </>
    );
  }
}
