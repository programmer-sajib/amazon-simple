import Logo from "../../images/Logo.svg";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="brand_logo" />
      <nav>
        <div>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventory</a>
        </div>
        <div>
          <ShoppingCartIcon className="cart"></ShoppingCartIcon>
        </div>
      </nav>
    </div>
  );
};

export default Header;
