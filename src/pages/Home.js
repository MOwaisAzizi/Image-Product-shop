import React from "react";
import {Col,Row} from 'react-bootstrap'
import products from "../products";
import Product from "../component/Product/Product";

const Home = ()=>{
    return(
<div>
    <h1 style={{textAlign : "center"}}>محصولات</h1>
<Row> 
       {products.map((item)=>{
           return (
               <Col key={item._id} lg={4} sm={12}>
               {/* <h3>{item.name}</h3> */}
               <Product product={item} />
               </Col>
)
       })}
       
     </Row>
</div>
    )
}
export default Home