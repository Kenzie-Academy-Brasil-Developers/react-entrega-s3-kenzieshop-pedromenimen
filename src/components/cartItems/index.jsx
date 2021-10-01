import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Portal } from "@chakra-ui/portal";
import "./style.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cart/actions";

const CartItems = ({ productsList }) => {
  const dispatch = useDispatch();
  return (
    <div className="popoverContainer">
      <Popover closeOnBlur={false}>
        <PopoverTrigger>
          <Button>
            <i className="fas fa-shopping-cart"></i>
          </Button>
        </PopoverTrigger>
        <Portal className="portal">
          <PopoverContent className="popoverContainer" w="200px" p="15px">
            <PopoverCloseButton pos="fixed" />
            {productsList.map((item, index) => (
              <div
              className="productItem"
              key={index}>
                <img src={item.img} alt={item.name}></img>
                <h2 className="productName" title={productsList.name}>
                  {item.name}
                </h2>
                <h1>R$ {item.price}</h1>
                <Button
                  backgroundColor="crimson"
                  p="2"
                  m="0"
                  onClick={() => dispatch(removeFromCart(item))}
                >
                  Remover do carrinho
                </Button>
              </div>
            ))}
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
};

export default CartItems;
