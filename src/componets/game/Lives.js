import { useEffect, useState } from "react";

export default function Lives({lives}) {	
	
	const [lifeDecrement, setLifeDecrement] = useState(false);

	useEffect(() => {
		if(lives < 3) {
			setLifeDecrement(true);
			setTimeout(() => {
				setLifeDecrement(false);
			}, 1000);
		}

		return () => setLifeDecrement(false);
	}, [lives])

	return (
		<p id="lives">
			<i className="fa fa-heart" aria-hidden="true" style={lives > 0 ? {color: 'red'} : {color: 'grey'}} ></i>
			<i className="fa fa-heart" aria-hidden="true" style={lives > 1 ? {color: 'red'} : {color: 'grey'}}></i>
			<i className="fa fa-heart" aria-hidden="true" style={lives > 2 ? {color: 'red'} : {color: 'grey'}}></i>
			<span style={lifeDecrement ? {display: "block"} : {display: "none"}}>-1</span>
		</p>
	);
}
