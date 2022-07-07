import React from 'react'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const Products = ({ products, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return  <div className="list-group mb-4">
                {products.map(product => (
                <ProductItem 
                    key={product.id} 
                    className="list-group-item"
                >
                    <Link to="/productdetail">{product.title}</Link> 
                </ProductItem>
                ))}
            </div>
}

export default Products;