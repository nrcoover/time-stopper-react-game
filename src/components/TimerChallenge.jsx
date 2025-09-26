import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const millisecondMultiplier = 1000;
const millisecondInterval = 10;

const TimerChallenge = ({ title, targetTime }) => {
	const timer = useRef();
	const modal = useRef();

	const targetTimeInMilliseconds = targetTime * millisecondMultiplier;

	const [timeRemaining, setTimeRemaining] = useState(targetTimeInMilliseconds);
	// const [timerStarted, setTimerStarted] = useState();
	// const [timerExpired, setTimerExpired] = useState();
	// const [playerHasWon, setPlayerHasWon] = useState();

	const timerIsActive =
		timeRemaining > 0 && timeRemaining < targetTimeInMilliseconds;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		modal.current.open();
	}

	const handleTimerReset = () => {
		setTimeRemaining(targetTimeInMilliseconds);
	};

	const handleStartTimer = () => {
		// setTimerStarted(true);
		// if (timerExpired) {
		//   setTimerExpired(false);
		// }

		timer.current = setInterval(() => {
			setTimeRemaining(
				(previousTimeRemaining) => previousTimeRemaining - millisecondInterval
			);
			// setTimerExpired(true);
			// setTimerStarted(false);
			// modal.current.open();
		}, millisecondInterval);
	};

	const handleEndTimer = () => {
		// setTimerStarted(false);
		clearInterval(timer.current);
		modal.current.open();
	};

	return (
		<>
			<ResultModal
				ref={modal}
				// playerHasWon={!timerIsActive}
				targetTime={targetTime}
				remainingTime={timeRemaining}
				onTimerReset={handleTimerReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerIsActive ? handleEndTimer : handleStartTimer}>
						{timerIsActive ? "Stop Timer!" : "Start Challenge"}
					</button>
				</p>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Time is running..." : "Timer inactive"}
				</p>
			</section>
		</>
	);
};

export default TimerChallenge;
