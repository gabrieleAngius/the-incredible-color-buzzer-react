import { useEffect, useContext, useState } from "react";
import { GameContext } from "./GameContext";

export default function Timer({ callback }) {
	const { defaultTimeValue, countdownValue, timerOnValue } =
		useContext(GameContext);
	const [defaultTime, setDefaultTime] = defaultTimeValue;
	const [time, setTime] = countdownValue;
	const [timerOn, setTimerOn] = timerOnValue;

	const statusColors = {
		default: "black",
		attenction: "orange",
		critical: "red",
	};
	const [timerColor, setTimerColor] = useState(statusColors.default);

	useEffect(() => {
		let interval = null;
		if (timerOn && time > 0) {
			let t = time;
			interval = setInterval(() => {
				if (t <= 10) {
					callback(true);
					setTimerOn(false);
					clearInterval(interval);
				}

				if (t <= (defaultTime / 3) * 2) {
					setTimerColor(statusColors.attenction);
				}

				if (t <= defaultTime / 3) {
					setTimerColor(statusColors.critical);
				}

				setTime((prevTime) => prevTime - 10);
				t -= 10;
			}, 10);
		} else clearInterval(interval);

		return () => {
			clearInterval(interval);
			setTimerColor(statusColors.default);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timerOn]);

	return (
		<div>
			<p
				className="big-p"
				style={{ color: `${timerColor}` }}
			>
				{(time / 1000).toFixed(3)}
			</p>
			<p className="small-p">Tempo restante</p>
		</div>
	);
}
