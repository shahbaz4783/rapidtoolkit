import React, { useState, useEffect } from 'react';
import { Main } from '../components/wrapper/Main';
import { CurrentYearPercentage } from '../layouts/year-progress/CurrentYearPercentage';
import { TimeLeftCard } from '../layouts/year-progress/TimeLeftCard';
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
					<CurrentYearPercentage
						year={currentYear}
						percentage={percentageOfYearPassed}
					/>
					<TimeLeftCard timeleft={timeLeft} />
				</div>
			</Main>
		</>
	);
};
