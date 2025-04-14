function ProductItem({name, price, description, img}) {
    return (
        <div className="product-item">
            <div id="img-container">
                <img className="product-img" src={img} alt={name} />
            </div>
            <h2 className="product-name">{name}</h2>
            <p className="product-price">Price: ${price}</p>
            <p className="product-description">{description}</p>
        </div>
    );
}

export default ProductItem; // Exporting the ProductItem component