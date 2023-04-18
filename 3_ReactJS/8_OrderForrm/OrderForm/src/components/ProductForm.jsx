import React, { useState } from 'react';
import '../assets/css/form.css';
import '../assets/css/products.css';

function ProductForm(props) {
    const [name, setName] = useState('');
    const [products, setProducts] = useState([
        { name: 'Limited Edition V88 T-Shirt', quantity: 0 },
        { name: 'Limited Edition V88 Cap', quantity: 0 },
    ]);
    const [showModal, setShowModal] = useState(false);

    function handleQuantityChange(index, event) {
        const newProducts = [];
        for (let i = 0; i < products.length; i++) {
            if (i === index) {
                newProducts.push({ ...products[i], quantity: event.target.value });
            } else {
                newProducts.push(products[i]);
            }
        }
        setProducts(newProducts);
    }

    function handleChange(event) {
        setName(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        const selectedProducts = products.filter((product) => product.quantity > 0);
        const orderDetails = {
            deliveryAddress: document.getElementById('address').value,
            contactNumber: document.getElementById('number').value,
            customerName: name,
            products: selectedProducts,
        };

        let inputValues = "Customer Name: " + name + "\n" +
            "Delivery Address: " + orderDetails.deliveryAddress + "\n" +
            "Contact Number: " + orderDetails.contactNumber + "\n";

        selectedProducts.forEach((product) => {
            inputValues += product.name + ": " + product.quantity + "\n";
        });

        alert(inputValues);

        props.onOrderPlaced(orderDetails);
        setShowModal(true);
    }


    function handleOrderPlaced() {
        setShowModal(false);
    }

    return (
        <>
            <div className="form-wrapper">
                <h2>Order Form</h2>
                <label>
                    Customer Name:
                    <input
                        type="text"
                        name="customer_name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Delivery Address:
                    <input type="text" name="delivery_address" id="address" />
                </label>
                <label>
                    Contact Number:
                    <input type="tel" name="contact_number" id="number" />
                </label>
            </div>
            <div className="products-wrapper">
                <h3>Products</h3>
                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <label>
                            <input
                                type="checkbox"
                                name="product_choice"
                                id="product_choice"
                            />
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
                <input type="submit" value="Place Order" onClick={handleSubmit} />
            </div>
        </>
    );
}

export default ProductForm;
