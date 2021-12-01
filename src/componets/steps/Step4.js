import { motion } from "framer-motion";
import { opacityEnter } from "../../helpers/animations";
export default function Step4() {
	return (
		<motion.div
			id="step-4"
			className="step-container"
			variants={opacityEnter}
			exit="out"
			animate="in"
			initial="out"
			transition={{
				delay: 0.3,
				duration: 0.8,
			}}
		>
			<h2>Il punteggio</h2>
			<p>
				Più sarai veloce a rispondere, maggiore sarà il punteggio assegnato:
			</p>
			<ul>
				<li>
					<em>entro 1/3 del tempo:</em> 50 punti
				</li>
				<li>
					<em>entro 2/3 del tempo:</em> 25 punti
				</li>
				<li>
					<em>entro 3/3 del tempo:</em> 10 punti
				</li>
			</ul>
			<p>
				Diventa il nuovo campione di <em>INCREDIBLE COLOR BUZZER!</em>
			</p>
		</motion.div>
	);
}
