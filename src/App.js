import Instructions from "./componets/Instructions";
import Landing from "./componets/Landing";
import Leaderboard from "./componets/Leaderboard";
import EndMatch from "./componets/EndMatch";
import Game from "./componets/Game";
import { Routes, Route, useLocation } from "react-router-dom";
import { GameProvider } from "./componets/game/GameContext";
import Sounds from "./componets/Sounds";
import { AnimatePresence } from "framer-motion";

const App = () => {
	const location = useLocation(); 
	return (
		<div className="App">
			<GameProvider>
				<Sounds />
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Landing />} />
						<Route path="/how-to-play" element={<Instructions />} />
						<Route path="/leaderboard" element={<Leaderboard />} />
						<Route path="/now-playing" element={<Game />} />
						<Route path="/end-match" element={<EndMatch />} />
					</Routes>
				</AnimatePresence>
			</GameProvider>
		</div>
	);
};

export default App;
