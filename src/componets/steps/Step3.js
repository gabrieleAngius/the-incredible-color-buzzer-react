import { motion } from "framer-motion";
import { opacityEnter } from "../../helpers/animations";
export default function Step3() {
	return (
		<motion.div
			id="step-3"
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
			<h2>Il tempo</h2>
			<p>
				Il tempo è tuo nemico! Ad ogni round completato con successo il tempo a
				disposizione per rispondere correttamente{" "}
				<strong>viene ridotto,</strong> fino ad un minimo di 1/5 di quello
				iniziale.
			</p>
			<p>
				<em>
					Inoltre, ad ogni round la luce si accenderà in seguito ad un
					intervallo di tempo casuale tra 0.15 e 1.5 secondi, perciò tieni i
					tuoi riflessi pronti!
				</em>
			</p>
		</motion.div>
	);
}
