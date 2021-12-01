import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
	return (
		<motion.section
			className="display"
			id="landing"
			exit={{ opacity: 0 }}
			animate={{opacity: 1}}
			initial={{ opacity: 0 }}
			transition={{ type: "tween", stiffness: 50, duration: 0.6 }}
		>
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
		</motion.section>
	);
}
