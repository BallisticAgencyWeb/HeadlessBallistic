import React, { useContext } from 'react';
import CartContext from '../../context/CartProvider';

const AddToCartButton = ({ children, productId, variantId }) => {
  const value = useContext(CartContext);
  const addToCart = value && value.addToCart;
  const addingToCart = value && value.state.addingToCart;

  return (
    <div className="bc-product-card">
      <div className="bc-product__actions" data-js="bc-product-group-actions">
        <div className="bc-form bc-product-form">
          <div className="bc-product-form__product-message"></div>
          <span className="inline-flex w-full rounded-md shadow-sm">
            <button  
              className="inline-flex w-full items-center justify-center px-6 py-3  border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none primary-btn transition ease-in-out duration-150"
              type="submit"
              disabled={addingToCart === productId}
              onClick={() => addToCart(productId, variantId)}>
              {addingToCart === productId ? 'Adding to Cart' : children}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddToCartButton;
