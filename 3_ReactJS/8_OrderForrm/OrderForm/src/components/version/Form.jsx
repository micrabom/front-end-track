import React, { useState } from 'react';
import '../assets/css/form.css';

function Form(props) {
    const { onOrderPlaced } = props;

    const [name, setName] = useState('');
    const [products, setProducts] = useState([
        { name: 'Limited Edition V88 T-Shirt', quantity: 0 },
    ]);

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const details = {
            deliveryAddress: document.getElementById('address').value,
            contactNumber: document.getElementById('number').value,
            product: 'Limited Edition V88 T-Shirt',
            quantity: document.getElementById('quantity').value,
        };
        onOrderPlaced(name, details);
    }

    return (
        <>
            <div className="form-wrapper">
                <h2>Order Form</h2>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
        </>
    );
}

export default Form;
