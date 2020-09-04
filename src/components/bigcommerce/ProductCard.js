import React from "react";
import { Link } from "gatsby";
import AddToCartButton from "./AddToCartButton";
import ProductPrices from "./ProductPrices";

class ProductCard extends React.Component {
  render() {
    const product = this.props.product;

    return (
      <div className="bc-product-card">
        <Link
          to={`/products${product.custom_url.url}`}
          className="bc-product-card-image-anchor"
          title={product.name}
        >
          <div className="bc-product-card__featured-image">
            <img
              className="attachment-bc-medium size-bc-medium"
              src={
                (product.images.length && product.images[0].url_standard) ||
                "/img/default-bc-product.png"
              }
              alt={product.name}
            />
          </div>
        </Link>

        <div className="bc-product__meta">
          <h3 className="bc-product__title">
            <Link
              to={`/products${product.custom_url.url}`}
              className="bc-product__title-link"
              title={product.name}
            >
              {product.name}
            </Link>
          </h3>

          <ProductPrices product={product} />
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0">
          <Link
            to={`/products${product.custom_url.url}`}
            className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-base leading-6 font-medium rounded-md secondary-btn focus:outline-none transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
          >
            View Product
          </Link>
        </div>

        {/* <AddToCartButton
          productId={product.variants[0].product_id}
          variantId={product.variants[0].id}
        >
          Add to Cart
        </AddToCartButton> */}
      </div>
    );
  }
}

export default ProductCard;
