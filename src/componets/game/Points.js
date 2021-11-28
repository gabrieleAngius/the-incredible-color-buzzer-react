import { useContext } from "react";
import { GameContext } from "./GameContext";


export default function Points() {
	const {pointsValue} = useContext(GameContext);
	const [points, setPoints] = pointsValue;
	return (
		<div>
			<p id="points">{points}</p>
			<p className="small-p">Punteggio</p>
		</div>
	);
}
