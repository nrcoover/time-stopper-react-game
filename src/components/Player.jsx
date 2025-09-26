import { useRef } from "react";

const Player = ({ savedName, setSavedName }) => {
	const playerName = useRef();

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
};

export default Player;
