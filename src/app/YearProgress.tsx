import React, { useState, useEffect } from 'react';
import { Main } from '../components/Main';

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
		<>
			<Main title='Year Progress'>
				<section className='text-center'>
					<h1 className='font-extrabold text-7xl text-blue-600'>
						{currentYear}
					</h1>
					<p className='text-xl'>{percentageOfYearPassed.toFixed(7)}%</p>
				</section>
				<section className='text-center'>
					<h1 className='text-2xl font-bold mb-6'>Time Left</h1>
					<article className='grid grid-cols-4 gap-2 text-xl capitalize max-w-3xl m-auto'>
						<div>
							<h3>{timeLeft.days >= 2 ? 'days' : 'day'}</h3>
							<p>{timeLeft.days}</p>
						</div>
						<div>
							<h3>{timeLeft.hours >= 2 ? 'hours' : 'hour'}</h3>
							<p>{timeLeft.hours}</p>
						</div>
						<div>
							<h3>{timeLeft.minutes >= 2 ? 'minutes' : 'minute'}</h3>
							<p>{timeLeft.minutes}</p>
						</div>
						<div>
							<h3> {timeLeft.seconds >= 2 ? 'seconds' : 'second'}</h3>
							<p>{timeLeft.seconds}</p>
						</div>
					</article>
				</section>
			</Main>
		</>
	);
};
