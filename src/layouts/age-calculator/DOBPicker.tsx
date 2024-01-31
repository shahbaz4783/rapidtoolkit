import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { useState } from 'react';

export const DOBPicker = () => {
	const [age, setAge] = useState<{
		years: number;
		months: number;
		days: number;
	} | null>(null);

	const [wishes, setWishes] = useState(false);

	const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWishes(false);
		calculateAge(e.target.value);
	};

	const calculateAge = (birthdate: string) => {
		const today = new Date();
		const birthDate = new Date(birthdate);

		let years = today.getFullYear() - birthDate.getFullYear();
		let months = today.getMonth() - birthDate.getMonth();
		let days = today.getDate() - birthDate.getDate();

		if (months < 0 || (months === 0 && days < 0)) {
			years--;
			months = 12 + months;
		}

		if (days < 0) {
			const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
			days = lastMonth.getDate() + days;
		}

		if (days === 0 && months === 0) {
			setWishes(true);
		}

		setAge({ years, months, days });
	};

	return (
		<>
			<div className='flex flex-col border'>
				<Label htmlFor='date' title='Select Date of Birth' />
				<Input type='date' id='date' required onChange={dateHandler} />
			</div>
			<article>
				{wishes && (
					<p>
						It's your birthday, you turned {age?.years}{' '}
						{age?.years === 1 ? 'year' : 'years'} today
					</p>
				)}
				{age !== null && (
					<p>
						Your are{' '}
						{age.years > 0 && (
							<p>
								{age.years} {age.years > 1 ? 'years' : 'year'}
							</p>
						)}
						{age.months > 0 && (
							<>
								{' '}
								{age.months} {age.months > 1 ? 'months' : 'month'}
							</>
						)}
						{age.days > 0 && (
							<>
								{' '}
								{age.days} {age.days > 1 ? 'days' : 'day'}
							</>
						)}{' '}
						old
					</p>
				)}
			</article>
		</>
	);
};
