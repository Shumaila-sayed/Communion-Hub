import EventPage from "./Event-page"
import Home from "./Home"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
    return (
			<Router>
				<Routes>
                    <Route path="/" element={<Home />} />
				    <Route path="/events" element={<EventPage />} />
				</Routes>
			</Router>
		);
}

export default App