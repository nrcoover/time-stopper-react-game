import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const millisecondMultiplier = 1000;
const percentMultiplier = 100;
const scoreOffsetValue = 1;

const ResultModal = forwardRef(
	({ targetTime, remainingTime, onTimerReset, playerName }, ref) => {
		const score = Math.round(
			(scoreOffsetValue -
				remainingTime / (targetTime * millisecondMultiplier)) *
				percentMultiplier
		);
		const dialogue = useRef();
		const playerHasWon = remainingTime > 0;
		const formattedRemainingTime = (
			remainingTime / millisecondMultiplier
		).toFixed(2);

		useImperativeHandle(ref, () => {
			return {
				open() {
					dialogue.current.showModal();
				},
			};
		});

		return createPortal(
			<dialog ref={dialogue} className="result-modal" onClose={onTimerReset}>
				<h2>{playerHasWon ? "You won!" : "You lost!"}</h2>
				<p>
					The target time was <strong>{targetTime}</strong> seconds.
				</p>
				{playerHasWon ? (
					<p>
						You stopped the timer with{" "}
						<strong>{formattedRemainingTime} seconds left.</strong>
					</p>
				) : (
					<p>
						You <strong>failed</strong> to stop the timer{" "}
						<strong>within the limit!</strong> <br />
					</p>
				)}

				<p>
					{playerHasWon ? "Congratulations," : "So sorry, "}{" "}
					<strong>{playerName}</strong>!
					{!playerHasWon && <p>Please try again!</p>}
				</p>

				{playerHasWon && <p>Your score: {score}</p>}
				<form method="dialog" onSubmit={onTimerReset}>
					<button>Close</button>
				</form>
			</dialog>,
			document.getElementById("modal")
		);
	}
);

export default ResultModal;
