import FormUsername from "./FormUsername";
import { useContext, useState, useEffect } from "react";
import { GameContext } from "./game/GameContext";
import { getMessageFromScoreAndLeaderboard } from "../helpers/manageLeaderboard";
import { getTenSortedBestScores } from "../helpers/manageLeaderboard";
import getData from "../helpers/fetch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleShow } from "../helpers/animations";

export default function EndMatch() {
	const { pointsValue } = useContext(GameContext);
	const [points, setPoints] = pointsValue;

	const [leaderboard, setLeaderboard] = useState([]);
	const [message, setMessage] = useState({
		title: "Partita finita",
		subtitle: "Caricamento...",
	});
	const [displayForm, setDisplayForm] = useState(false);
	const [disableButton, setDisableButton] = useState(false);

	useEffect(() => {
		if (points > 0) {
			getData()
				.then((rawLeaderBoard) => getTenSortedBestScores(rawLeaderBoard))
				.then((leaderboard) => setLeaderboard(leaderboard));
		}

		return () => setPoints(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setMessage(getMessageFromScoreAndLeaderboard(points, leaderboard));
		if (leaderboard[9]) {
			const shouldDispayForm = points > 0 && points > leaderboard[9].score;
			setDisplayForm(shouldDispayForm);
			setDisableButton(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [leaderboard]);

	return (
		<motion.section
			id="modal-end"
			className="display modal"
			variants={scaleShow}
			exit="out"
			animate="in"
			initial="out"
			transition={{ type: "tween", stiffness: 50, duration: 0.3 }}
		>
			<div>
				<h2>{message.title}</h2>
				<p>{message.subtitle}</p>
			</div>
			<div>
				<p>Il tuo punteggio:</p>
				<p className="big-p">{points}</p>
			</div>
			{displayForm && (
				<FormUsername score={points} toggleExitButtons={setDisableButton} />
			)}
			<div>
				<Link to="/">
					<button
						className="generic-button red"
						id="exit-endmodal"
						disabled={disableButton}
					>
						Esci
					</button>
				</Link>
				<Link to="/now-playing">
					<button
						className="generic-button white"
						id="riprova"
						disabled={disableButton}
					>
						Riprova
					</button>
				</Link>
			</div>
		</motion.section>
	);
}
