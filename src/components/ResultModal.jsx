import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();
	const [savedName, setSavedName] = useState("unknown entity");

	const handleOnClick = () => {
		console.log(`Entered Name: ${playerName.current.value}`);
		setSavedName(playerName.current.value);
	};

	return (
		<section id="player">
			<h2>Welcome {savedName}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleOnClick}>Set Name</button>
			</p>
		</section>
	);
}
