import { FC } from 'react';

interface BirthDates {
	age: any;
	wishes: boolean;
	daysLeft: any;
}

export const BirthDatesCard: FC<BirthDates> = ({ age, wishes, daysLeft }) => {
	return (
		<section className='text-center w-full md:w-1/2'>
			<h1 className='text-2xl font-bold mb-6'>Your age</h1>
			<article className='grid grid-cols-3 gap-2 text-xl capitalize max-w-3xl m-auto'>
				<div className='p-4 bg-zinc-100 rounded-s-xl'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{age?.years}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{age?.years > 1 ? 'years' : 'year'}
					</h3>
				</div>

				<div className='p-4 bg-zinc-100 rounded-s-xl md:rounded-none'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{age?.months}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{age?.months > 1 ? 'months' : 'month'}
					</h3>
				</div>

				<div className='p-4 bg-zinc-100 rounded-e-xl'>
					<p className='text-3xl text-blue-700 italic font-bold font-serif'>
						{age?.days}
					</p>
					<h3 className='font-semibold text-sky-600'>
						{age?.days > 1 ? 'days' : 'day'}
					</h3>
				</div>
			</article>

			{daysLeft !== null && !wishes && (
				<div className='p-4 bg-zinc-100 rounded-xl mt-4'>
					{daysLeft === 0 ? (
						<>
							<p className='text-lg text-sky-600 font-mono'>
								Happy Birthday in advance!
							</p>
							<p className='text-lg text-sky-600 font-mono'>
								You're about to turn {age.years + 1}!
							</p>
						</>
					) : (
						<p className='text-lg text-sky-600 font-mono'>
							<span className='font-bold text-xl'> {daysLeft + 1} </span> days
							left until your next birthday!
						</p>
					)}
				</div>
			)}
			{wishes && (
				<div className='p-4 bg-zinc-100 rounded-xl mt-4'>
					{age.years === 0 ? (
						<p className='text-lg text-sky-600 font-mono'>
							Welcome to the world! Happy Birthday on your very first day of
							a remarkable journey!
						</p>
					) : (
						<p className='text-lg text-sky-600 font-mono'>
							Cheers to {age?.years} {age?.years === 1 ? 'year' : 'years'}!
							Happy Birthday, may this year bring joy and success!
						</p>
					)}
				</div>
			)}
		</section>
	);
};
