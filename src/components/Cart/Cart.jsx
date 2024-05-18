const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, pdr) => total + pdr.price, 0);
  const shipping = cart.reduce((total, pdr) => total + pdr.shipping, 0);
  const tax = totalPrice / 10;
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };
  const grandTotal = totalPrice + shipping + tax;

  return (
    <div>
      <h2>Order Summary </h2>
      <h3>Items Ordered: {cart.length}</h3>
      <p>Product Price: {formatNumber(totalPrice)}</p>
      <p>Shipping Cost: {shipping} </p>
      <p>Tax + VAT : {formatNumber(tax)} </p>
      <h3>Grand Total: {formatNumber(grandTotal)} </h3>
    </div>
  );
};

export default Cart;
