import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
	const [savedName, setSavedName] = useState("unknown entity");

	const handleOnClick = () => {
		console.log(`Entered Name: ${playerName.current.value}`);
		setSavedName(playerName.current.value);
	};
	return (
		<>
			<Player savedName={savedName} setSavedName={setSavedName} />
			<div id="challenges">
				<TimerChallenge
					playerName={savedName}
					title="Easy"
					targetTime={1}
					isEasy={true}
				/>
				<TimerChallenge playerName={savedName} title="Normal" targetTime={5} />
				<TimerChallenge
					playerName={savedName}
					title="Intermediate"
					targetTime={10}
				/>
				<TimerChallenge playerName={savedName} title="Hard" targetTime={15} />
			</div>
		</>
	);
}

export default App;
