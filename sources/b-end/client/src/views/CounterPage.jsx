// Kita tidak memerlukan useState lagi di sini
// import { useState } from "react";

// Sekarang untuk bisa memilih state yang ada di dalam redux toolkit
// kita harus membutuhkan hooks useSelector

// Untuk bisa menjalankan action yang memengaruhi reducer di dalam redux
// kita membutuhkan hooks useDispatch
import { useDispatch, useSelector } from "react-redux";
import {
	allNumberReset,
	firstNumberDecrement,
	firstNumberIncrement,
	secondNumberDecrement,
	secondNumberIncrement,
} from "../features/counter/counter-slice";

const CounterPage = () => {
	// const [counter, setCounter] = useState({
	//   firstNumber: 0,
	//   secondNumber: 0,
	// });

	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const counterFirstNumberIncrement = () => {
		// setCounter({
		//   ...counter,
		//   firstNumber: counter.firstNumber + 1,
		// });
		dispatch(firstNumberIncrement());
	};

	const counterSecondNumberIncrement = () => {
		// setCounter({
		//   ...counter,
		//   secondNumber: counter.secondNumber + 1,
		// });
		dispatch(secondNumberIncrement());
	};

	const counterFirstNumberDecrement = () => {
		// setCounter({
		//   ...counter,
		//   firstNumber: counter.firstNumber - 1,
		// });
		dispatch(firstNumberDecrement());
	};

	const counterSecondNumberDecrement = () => {
		// setCounter({
		//   ...counter,
		//   secondNumber: counter.secondNumber - 1,
		// });
		dispatch(secondNumberDecrement());
	};

	const counterReset = () => {
		// setCounter({
		//   firstNumber: 0,
		//   secondNumber: 0,
		// });
		dispatch(allNumberReset());
	};

	return (
		<section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
			<p className="text-2xl font-bold">Counter Page</p>

			<p className="text-xl">
				Nilai <i>firstNumber</i> sekarang adalah{" "}
				<span className="font-semibold">{counter.firstNumber}</span>
			</p>

			<p className="text-xl">
				Nilai <i>secondNumber</i> sekarang adalah{" "}
				<span className="font-semibold">{counter.secondNumber}</span>
			</p>

			<section className="flex flex-row gap-4">
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterFirstNumberIncrement}
				>
					+ (First)
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterSecondNumberIncrement}
				>
					+ (Second)
				</button>

				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterReset}
				>
					RESET
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterFirstNumberDecrement}
				>
					- (First)
				</button>
				<button
					type="button"
					className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
					onClick={counterSecondNumberDecrement}
				>
					- (Second)
				</button>
			</section>
		</section>
	);
};

export default CounterPage;
