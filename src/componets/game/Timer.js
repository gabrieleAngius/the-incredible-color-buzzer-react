import { useEffect, useContext } from "react";
import { GameContext } from "./GameContext";

export default function Timer({redirect}) {
    const {countdownValue, timerOnValue} = useContext(GameContext);
	const [time, setTime] = countdownValue;
	const [timerOn, setTimerOn] = timerOnValue;

	useEffect(() => {
		let interval = null;
		if (timerOn && time > 0) {
			let t = time;
			interval = setInterval(() => {
				if (t <= 10) {
					redirect(true);
					clearInterval(interval);
				}
				setTime((prevTime) => prevTime - 10);
				t -= 10;
			}, 10);
		} else clearInterval(interval);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timerOn]);

	return (
		<div>
			<p className="big-p">{(time / 1000).toFixed(3)}</p>
			<p className="small-p">Tempo restante</p>
		</div>
	);
}
