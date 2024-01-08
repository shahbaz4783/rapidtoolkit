import React, { useState, useEffect } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const YearProgress: React.FC = () => {
	const [currentYear, _setCurrentYear] = useState<number>(
		new Date().getFullYear()
	);
	const [percentageOfYearPassed, setPercentageOfYearPassed] =
		useState<number>(0);
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const updateProgress = () => {
			const currentDate = new Date();
			const startOfYear = new Date(currentYear, 0, 1);
			const timeElapsed = currentDate.getTime() - startOfYear.getTime();
			const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
			const percentage = (timeElapsed / millisecondsInYear) * 100;
			setPercentageOfYearPassed(percentage);
		};
		const intervalId = setInterval(updateProgress, 100);
		return () => clearInterval(intervalId);
	}, [currentYear]);

	useEffect(() => {
		function getTimeLeftInYear(): TimeLeft {
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear();
			const endOfYear = new Date(currentYear + 1, 0, 1);
			const timeLeftMillis = endOfYear.getTime() - currentDate.getTime();
      
			const daysLeft = Math.floor(timeLeftMillis / (1000 * 60 * 60 * 24));
			const hoursLeft = Math.floor(
				(timeLeftMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutesLeft = Math.floor(
				(timeLeftMillis % (1000 * 60 * 60)) / (1000 * 60)
			);
			const secondsLeft = Math.floor((timeLeftMillis % (1000 * 60)) / 1000);

			return {
				days: daysLeft,
				hours: hoursLeft,
				minutes: minutesLeft,
				seconds: secondsLeft,
			};
		}

		const intervalId = setInterval(() => {
			setTimeLeft(getTimeLeftInYear());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<main className='bg-slate-400 h-80'>
			<section>
				<h1 className='font-extrabold text-7xl text-blue-600'>{currentYear}</h1>
				<p>{percentageOfYearPassed.toFixed(7)}%</p>
			</section>
			<section>
				<h1>Time Left</h1>
				<p>{timeLeft.days} days</p>
				<p>{timeLeft.hours} hours</p>
				<p>{timeLeft.minutes} minutes</p>
				<p>{timeLeft.seconds} seconds</p>
			</section>
		</main>
	);
};
