import React from 'react'
import productsReducer from '../../../reducers/productsReducer'

const Products = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return  <ul className="list-group mb-4">
                {posts.map(post => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
                ))}
            </ul>
}

export default Products;