import FormUsername from "./FormUsername";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "./game/GameContext";
import { getMessageFromScoreAndLeaderboard } from "../helpers/manageLeaderboard";
import { getTenSortedBestScores } from "../helpers/manageLeaderboard";
import getData from "../helpers/fetch";
import { Link } from "react-router-dom";

export default function EndMatch() {
	const { pointsValue } = useContext(GameContext);
	const [points, setPoints] = pointsValue;

	const [leaderboard, setLeaderboard] = useState([]);

	useEffect(() => {
		getData()
			.then((rawLeaderBoard) => getTenSortedBestScores(rawLeaderBoard))
			.then((leaderboard) => setLeaderboard(leaderboard));

		return () => setPoints(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [message, setMessage] = useState({
		title: "Partita finita",
		subtitle: "Caricamento...",
	});
	const [displayForm, setDisplayForm] = useState(false);

	useEffect(() => {
		setMessage(getMessageFromScoreAndLeaderboard(points, leaderboard));
		if(leaderboard[9]) {
			const shouldDispayForm = points > 0 && points > leaderboard[9].score;
			setDisplayForm(shouldDispayForm);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [leaderboard]);

	return (
		<section id="modal-end" className="display modal">
			<div>
				<h2>{message.title}</h2>
				<p>{message.subtitle}</p>
			</div>
			<div>
				<p>Il tuo punteggio:</p>
				<p className="big-p">{points}</p>
			</div>
			{displayForm && <FormUsername score={points}/>}
			<div>
				<Link to="/">
					<button className="generic-button red" id="exit-endmodal">
						Esci
					</button>
				</Link>
				<Link to="/now-playing">
					<button className="generic-button white" id="riprova">
						Riprova
					</button>
				</Link>
			</div>
		</section>
	);
}
