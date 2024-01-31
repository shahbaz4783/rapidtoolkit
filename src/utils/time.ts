export interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function calculatePercentageOfYearPassed(currentYear: number): number {
	const currentDate = new Date();
	const startOfYear = new Date(currentYear, 0, 1);
	const timeElapsed = currentDate.getTime() - startOfYear.getTime();
	const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
	const percentage = (timeElapsed / millisecondsInYear) * 100;
	return percentage;
}

export function calculateTimeLeftInYear(): TimeLeft {
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

export const getCurrentDate = () => {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, '0');
	const day = String(now.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};