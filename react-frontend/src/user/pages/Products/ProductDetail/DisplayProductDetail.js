import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ProductDetailItem from './ProductDetailItem';


import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

const DisplayProductDetail = ({products}) => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = () => {
            setProduct(products);
            const haveProducts = products.length > 0;
            setLoading(haveProducts);
        }

        fetchProducts();
    }, []);

        return(
        <div className="container product-detail-display">
            <ProductDetailItem products={product} loading={loading} />
        </div>
    )
}

export default DisplayProductDetail;