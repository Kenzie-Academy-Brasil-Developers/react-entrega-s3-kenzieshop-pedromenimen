import { Button } from "@chakra-ui/button";
import { useSelector } from "react-redux";
import "./style.css";
import { addToCart } from "../../store/modules/cart/actions";
import { useDispatch } from "react-redux";

const Display = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  return (
    <div>
      {products.map((product, i) => (
        <div key={i} className="displayContainer">
          <img src={product.img} alt="" />
          <h6 className="productName"
          title={product.name}
          >{product.name}</h6>
          <h1 className="price">R$ {product.price}</h1>
          <Button onClick={() => dispatch(addToCart(product))} bg="crimson">
            Adcionar ao carrinho
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Display;
