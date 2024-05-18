import { ShoppingCart } from "@mui/icons-material";
import "./Product.css";
import { Rating } from "@mui/material";
const Product = (props) => {
  const { name, seller, price, stock, ratings, img } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="product_img" width={100} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>
          By: <strong>{seller}</strong>
        </p>
        <div className="details">
          <div className="price">
            <p>Price: ${price}</p>
            <p>Only left {stock} items in Stock - Order soon.</p>
            <button
              className="btn"
              onClick={() => props.handleAddProduct(props.product)}
            >
              <ShoppingCart className="cart"></ShoppingCart> Add to Cart
            </button>
          </div>
          <div className="ratings">
            <p>Ratings:</p>
            <Rating
              name="half-rating"
              defaultValue={ratings}
              precision={0.5}
              readOnly
            />
            <p>{ratings} out of 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
