import React from "react";
import products from "../products";

const Product1 = ({ match }) => {
    const product = products.find((item) => {
        return item._id === match.params.id
    })
    return <div>hello</div>

}
export default Product1