import './assets/css/style.css';
// import ClickMe from './components/ClickMe';
// import ControlledForm from './components/ControlledForms';
// import Forms from './components/Forms';
// import UseEffectComponent from './components/UseEffectComponent';
// import UncontrolledForms from './components/UncontrolledForms';
import { Link, Route, Routes } from "react-router-dom";
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';


function App() {
	return (
		<>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/About">About</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
					<li><Link to="/Gallery">Gallery</Link></li>
				</ul>
			</nav>
			<Routes>
				<Route exact path='/' element={< Home />} />
				<Route exact path='/about' element={< About />} />
				<Route exact path='/contact' element={< Contact />} />
				<Route exact path='/gallery' element={< Gallery />} />
				<Route exact path="*" element={< NotFound />} />
			</Routes>
		</>
	)
}

export default App;


{/* <ClickMe /> */ }
{/* <Forms /> */ }
{/* <ControlledForm /> */ }
{/* <UncontrolledForms /> */ }
{/* <UseEffectComponent /> */ }