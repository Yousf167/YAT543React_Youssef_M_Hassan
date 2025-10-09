import { useContext } from "react";
import { addToCart } from "../Services/services";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext"; 

function Item({ product }) {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Card style={{ width: "21rem" }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Product Price: {product.price}</Card.Text>
        <Button
          variant="info"
          onClick={() => addToCart(product, cart, setCart)}
        >
          + Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
