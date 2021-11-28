import { useEffect, useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Light from "./game/Light";
import Lives from "./game/Lives";
import Points from "./game/Points";
import Timer from "./game/Timer";
import { GameContext } from "./game/GameContext";
import { getRandomColor, getRandomValue, colors } from "../helpers/gameHelpers";

export default function Game() {
	const { countdownValue, delayValue, timerOnValue, pointsValue } = useContext(GameContext);
	const [time, setTime] = countdownValue;
	const [delay, setDelay] = delayValue;
	const [_timerOn, setTimerOn] = timerOnValue;
	const [_points, setPoints] = pointsValue;

	const [endMatch, setEndMatch] = useState(false);
	const [lightColor, setLightColor] = useState("grey");
	const [lives, setLives] = useState(3);
	const defaultTime = 6000;
	const timeDecrement = 200;

	useEffect(() => {
		setTime(defaultTime);

		return () => {
			setTimerOn(false);
			setTime(0);
			setLightColor("grey");
			setLives(3);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setLightColor("grey");
		setTimeout(() => {
			setLightColor(getRandomColor);
			setTimerOn(true);
		}, delay);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [delay]);

	function handleBuzz(buzzedColor) {
		setTimerOn(false);
		if (lightColor !== buzzedColor && lightColor !== 'grey') {
			lostOneLife();
			return;
		} 
		
		if (lightColor !== 'grey') {
			refreshPoints();
			refreshTime();
			setDelay(getRandomValue(500, 1500));
		}
	}

	function lostOneLife(expiredTime) {
		setLives(prevLives => prevLives - 1);
		
		if(lives === 0) {
			setTimerOn(false); 
			setEndMatch(true);
			return;
		}
		
		if(expiredTime) {
			setTime(defaultTime);
		}

		setDelay(getRandomValue(500, 1500));
	}

	function refreshPoints() {
		const fraction = time / 3;
		
		if(time <= fraction) {
			setPoints(prevPoints => prevPoints += 10)
			return;
		}
		
		if(time <= fraction * 2) {
			setPoints(prevPoints => prevPoints += 25 )
			return;
		}
		
		setPoints(prevPoints => prevPoints += 50 )
	}

	function refreshTime() {
		if(time >= defaultTime / 5 ) {
			setTime(prevTime => prevTime -= timeDecrement);
		}
	}


	return (
		<section id="game" className="display modal">
			{endMatch && <Navigate to="/end-match" />}
			<h2>Round 1</h2>
			<div className="row">
				<Link to="/end-match">
					<button className="generic-button blue small" id="leave">
						Esci
					</button>
				</Link>
				<Lives lives={lives} />
				<Points />
			</div>
			<div className="column">
				<Timer callback={lostOneLife}/>
				<Light color={lightColor} />
				<div className="row" id="buzzers-container">
					<button
						className="radio"
						id="red-b"
						onClick={() => handleBuzz(colors[0])}
					></button>
					<button
						onClick={() => handleBuzz(colors[1])}
						className="radio"
						id="green-b"
					></button>
					<button
						onClick={() => handleBuzz(colors[2])}
						className="radio"
						id="blue-b"
					></button>
					<button
						onClick={() => handleBuzz(colors[3])}
						className="radio"
						id="yellow-b"
					></button>
				</div>
			</div>
		</section>
	);
}
