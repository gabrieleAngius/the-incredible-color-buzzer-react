import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../helpers/fetch";
import { getTenSortedBestScores } from "../helpers/manageLeaderboard";
import { motion } from "framer-motion";
import { scaleShow } from "../helpers/animations";

export default function Leaderboard() {
	const [leaderboard, setLeaderboard] = useState([]);

	const [message, setMessage] = useState("Caricamento Leaderboard...");
	const [displayTable, setDisplayTable] = useState(false);

	useEffect(() => {
		getData()
			.then((rawLeaderBoard) => getTenSortedBestScores(rawLeaderBoard))
			.then((leaderboard) => setLeaderboard(leaderboard));
	}, []);

	useEffect(() => {
		if (leaderboard[0]) {
			setDisplayTable(true);
			setMessage("");
		} else {
			setMessage(
				"A causa di un errore non è stato possibile recuperare la leaderboard"
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [leaderboard]);

	return (
		<motion.section
			id="leaderboard"
			className="display modal"
			variants={scaleShow}
			exit="out"
			animate="in"
			initial="out"
			transition={{ type: "tween", stiffness: 50, duration: 0.4 }}
		>
			<p> {message} </p>

			{displayTable && (
				<table>
					<thead>
						<tr>
							<th colSpan="3">
								<h2>Leaderboard</h2>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>N°</th>
							<th>Nome</th>
							<th>Miglior punteggio</th>
						</tr>
						{leaderboard &&
							leaderboard.map((element, index) => {
								return (
									<tr key={element.id}>
										<td>{index + 1}</td>
										<td>{element.username}</td>
										<td>{element.score}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			)}
			<Link to="/">
				<button className="generic-button red">Esci</button>
			</Link>
		</motion.section>
	);
}
