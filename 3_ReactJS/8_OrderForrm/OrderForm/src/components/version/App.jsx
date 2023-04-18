

import './assets/css/style.css';
// import Form from './components/Form';
import Header from './components/Header';
// import Products from './components/Products';
import ProductForm from '../ProductForm';

function App() {

	return (
		<>
			<Header />
			{/* <Form onOrderPlaced={handleOrderPlaced} /> */}
			{/* <Products onOrderPlaced={handleOrderPlaced} /> */}
			<ProductForm />
		</>
	)
}

export default App;

