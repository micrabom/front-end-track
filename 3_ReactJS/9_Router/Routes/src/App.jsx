// import './assets/css/style.css';
// import ClickMe from './components/ClickMe';
// import ControlledForm from './components/ControlledForms';
// import Forms from './components/Forms';
// import UseEffectComponent from './components/UseEffectComponent';
// import UncontrolledForms from './components/UncontrolledForms';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={< Home />} />
				<Route exact path='/about' element={< About />} />
				<Route exact path='/gallery' element={< Gallery />} />
				<Route exact path='/home' element={< Home />} />
				<Route exact path="*" element={< NotFound />} />
			</Routes>
		</ >
	)
}

export default App;


{/* <ClickMe /> */ }
{/* <Forms /> */ }
{/* <ControlledForm /> */ }
{/* <UncontrolledForms /> */ }
{/* <UseEffectComponent /> */ }