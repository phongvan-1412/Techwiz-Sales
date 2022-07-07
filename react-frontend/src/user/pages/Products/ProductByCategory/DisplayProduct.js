import React, { Component, useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import Products from './Product';
import Pagination from "./Pagination";


import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

const DisplayProduct = (products) => {
    // const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState (1);
    const [productsPerPage] = useState(10);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         setLoading(true);
    //         const res = await axios.get('')
    //         setProducts(res.data);
    //         setLoading(false);
    //     }

    //     fetchProducts();
    // }, []);

    //Get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
        return(
        <div className="container">
            <Products products={currentProducts} loading={loading} />
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
        </div>
    )
}

export default DisplayProduct;