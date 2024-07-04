import React from "react";
import products from "../products";
import { Link } from "react-router-dom";
import { Row,Col,Image,ListGroup,Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
const Product1 = ({ match }) => {
    const product = products.find((item) =>{
     return item._id === match.params.id
    })
    return <div>hello</div>
    
}
export default Product1