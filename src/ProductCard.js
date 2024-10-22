import React from 'react';

function ProductCard({ product, isInCart, addToCart, removeFromCart }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          {isInCart ? (
            <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
