import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";

export default function Points() {
	const { pointsValue } = useContext(GameContext);
	const [points, _setPoints] = pointsValue;
	const [animation, setAnimation] = useState("paused");

	useEffect(() => {
		setAnimation("running");
		setTimeout(() => {
			setAnimation("paused");
		}, 500);
	}, [points]);
	
	return (
		<div>
			<p
				id="points"
				style={{
					animationPlayState: `${animation}`,
				}}
			>
				{points}
			</p>
			<p className="small-p">Punteggio</p>
		</div>
	);
}
