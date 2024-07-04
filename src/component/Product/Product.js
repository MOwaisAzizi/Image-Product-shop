import React from "react";
import { Card } from 'react-bootstrap'
import products from "../../products";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <Card className="my-2 p-2 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
            </Link>

            <Card.Body as={"div"}>
                <Link to={`/product/${product._id}`}>
                    {product.name}
                </Link>
            </Card.Body>
            <Card.Text as={"h3"}>{product.price}</Card.Text>
        </Card>
    )
}
export default Product

