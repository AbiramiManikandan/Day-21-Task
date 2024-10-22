import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, cartItems, addToCart, removeFromCart }) {
  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={cartItems.some(item => item.id === product.id)}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
