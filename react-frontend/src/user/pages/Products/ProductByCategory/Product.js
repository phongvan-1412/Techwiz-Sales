import React from 'react'
import ProductItem from './ProductItem';

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
                    {product.title}
                </ProductItem>
                ))}
            </div>
}

export default Products;