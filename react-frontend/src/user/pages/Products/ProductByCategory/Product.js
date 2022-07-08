import React from 'react'
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

const Products =({products,loading})=> {
    if (loading != true) {
        return <h2>Products not found</h2>
    }
        return  <div className="products-grid">
                        <div className='row'>
                            {products.map(product => (
                                <ProductItem 
                                    key={product.product_SKU} 
                                    className="list-group-item"
                                    product={product}>
                                </ProductItem>
                            ))}
                        </div>
                </div>

    
}

export default Products;