import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Card, Button } from "react-bootstrap";

import Item from "./Item";
import { deleteCart, removeFromCart } from "../Services/services";

function Cart() {
    let { cart, setCart } = useContext(CartContext)
    return (
        <>
            <h1>Cart</h1>
            <Button onClick={() => {deleteCart(setCart)}}>Clear Cart</Button>
            {cart.map((item, index) => (
                <Card key={index} style={{ width: "21rem" }}>
                    <Card.Body className="m-auto">
                        <Card.Title>{item.title}</Card.Title>
                        <Button onClick={() => removeFromCart(item, cart, setCart)}>Remove Item</Button>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
}

export default Cart;