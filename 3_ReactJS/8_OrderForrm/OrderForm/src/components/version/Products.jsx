import React, { useState } from 'react';
import '../assets/css/products.css';

function Products(props) {
    const [products, setProducts] = useState([
        { name: 'Limited Edition V88 T-Shirt', quantity: 0 },
        { name: 'Limited Edition V88 Cap', quantity: 0 },
    ]);

    const [showModal, setShowModal] = useState(false); // new state variable for controlling modal display

    function handleQuantityChange(index, event) {
        const newProducts = [...products];
        newProducts[index].quantity = event.target.value;
        setProducts(newProducts);
    }

    function handleOrderPlaced() {
        const selectedProducts = products.filter((product) => product.quantity > 0); // filter out products with zero quantity
        const orderDetails = {
            products: selectedProducts,
        };
        props.onOrderPlaced(orderDetails);
        setShowModal(true); // set showModal to true to display the modal
    }

    function handleCloseModal() {
        setShowModal(false); // set showModal to false to hide the modal
    }

    return (
        <>
            <div className="products-wrapper">
                <h3>Products</h3>
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <label>
                            <input type="checkbox" name="product_choice" id="product_choice" />
                            {product.name}
                        </label>
                        <label>
                            QTY
                            <input
                                type="number"
                                name="quantity"
                                id="quantity"
                                value={product.quantity}
                                onChange={(event) => handleQuantityChange(index, event)}
                            />
                        </label>
                    </div>
                ))}
                <input type="submit" value="Place Order" onClick={handleOrderPlaced} />
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <p>Order placed successfully!</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Products;
