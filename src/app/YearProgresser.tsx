import React, { useState, useEffect } from 'react';
import { Main } from '../components/wrapper/Main';
import { Progress } from '../components/ui/Progress';
import {
	TimeLeft,
	calculatePercentageOfYearPassed,
	calculateTimeLeftInYear,
} from '../utils/time';

export const YearProgresser: React.FC = () => {
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
			const percentage = calculatePercentageOfYearPassed(currentYear);
			setPercentageOfYearPassed(percentage);
		};
		const intervalId = setInterval(updateProgress, 100);
		return () => clearInterval(intervalId);
	}, [currentYear]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimeLeft(calculateTimeLeftInYear());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Main title='Year Progress'>
				<div className='flex flex-col justify-center h-full gap-16'>
					<section className='text-center'>
						<h1 className='font-extrabold text-7xl text-blue-600'>
							{currentYear}
						</h1>
						<p className='text-xl'>{percentageOfYearPassed.toFixed(7)}%</p>
						<Progress value={percentageOfYearPassed} max={100} />
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
				</div>
			</Main>
		</>
	);
};
