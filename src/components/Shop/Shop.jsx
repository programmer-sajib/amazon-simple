import { useState, useEffect } from "react";
import "./shop.css";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        const first10 = data.slice(0, 10);
        setProducts(first10);
      });
  }, []);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.id}
            product={pd}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
