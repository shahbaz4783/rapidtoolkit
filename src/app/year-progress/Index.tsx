import { useState, useEffect } from 'react';

export const YearProgress = () => {
	const [currentYear, _setCurrentYear] = useState<number>(
		new Date().getFullYear()
	);
	const [percentageOfYearPassed, setPercentageOfYearPassed] =
		useState<number>(0);

	useEffect(() => {
		const updateProgress = () => {
			const currentDate = new Date();
			const startOfYear = new Date(currentYear, 0, 1);
			const timeElapsed = currentDate.getTime() - startOfYear.getTime();
			const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
			const percentage = (timeElapsed / millisecondsInYear) * 100;

			setPercentageOfYearPassed(percentage);
		};

		const intervalId = setInterval(updateProgress, 1000);

		return () => clearInterval(intervalId);
	}, [currentYear]);

	return (
		<main className='bg-slate-400 h-80'>
			<h1 className='font-extrabold text-7xl text-blue-600'>{currentYear}</h1>
			<p>{percentageOfYearPassed.toFixed(7)}%</p>
		</main>
	);
};
