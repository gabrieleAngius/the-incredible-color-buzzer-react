import Instructions from "./componets/Instructions";
import Landing from "./componets/Landing";
import Leaderboard from "./componets/Leaderboard";
import EndMatch from "./componets/EndMatch";
import Game from "./componets/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameProvider } from "./componets/game/GameContext";
import Sounds from "./componets/Sounds";

const App = () => {
	return (
		<Router>
			<div className="App">
				<GameProvider>
					<Sounds />
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/how-to-play" element={<Instructions />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/now-playing" element={<Game />} />
						<Route path="/end-match" element={<EndMatch />} />
					</Routes>
				</GameProvider>
			</div>
		</Router>
	);
};

export default App;
