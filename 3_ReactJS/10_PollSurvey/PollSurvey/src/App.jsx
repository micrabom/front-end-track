
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PollSurvey } from './pages/PollSurvey';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' element={< Home />} />
				<Route exact path='/about' element={< About />} />
				<Route exact path='/home' element={< Home />} />
				<Route exact path='/pollsurvey' element={< PollSurvey />} />
				<Route exact path="*" element={< NotFound />} />
			</Routes>
		</ >
	)
}

export default App;
