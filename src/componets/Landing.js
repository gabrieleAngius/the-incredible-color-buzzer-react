import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<section className="display" id="landing">
			<h1>The incredible color buzzer</h1>
			<div>
				<Link to="/leaderboard">
					<button className="generic-button red" id="open-leaders">
						Leaderboard
					</button>
				</Link>
				<Link to="/how-to-play">
					<button className="generic-button red" id="open-how-to">
						Istruzioni
					</button>
				</Link>
				<Link to="now-playing">
					<button className="generic-button white" id="start">
						Inizia
					</button>
				</Link>
			</div>
		</section>
	);
};

export default Landing;
