import ProductItem from "./ProductItem";

function ProductList({products}) {
    return (
        <div className="product-list">
            {products[0].map((product, index) => (
                <ProductItem
                    key={index}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    img={product.img}
                />
            ))}
        </div>
    );
}

export default ProductList; // Exporting the ProductList component