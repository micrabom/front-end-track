
import './assets/css/style.css';
// import Form from './components/Form';
// import Products from './components/Products';
import ProductForm from './components/ProductForm';

function App() {
	function handleOrderPlaced(orderDetails) {
		alert(`Order placed for ${orderDetails.customerName}`);
	}

	return (
		<div className="App">
			<ProductForm onOrderPlaced={handleOrderPlaced} />
		</div>
	);
}


export default App;
