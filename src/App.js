import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from "./component/Header/Header";
import Footer from "./component/Footer/footer";
import Home from './pages/Home'
import Product1 from "./pages/Product1";


const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">

                <Container>
                    <Routes>
                        <Route path="/" Component={Home} exact />
                        <Route path="/product/:id" element={<Product1 />} />
                        <Route path="/cart" element={<h2>hello cart</h2>}/>
                    </Routes>
                </Container>

            </main>

            <Footer />

        </Router>


    )
}
export default App