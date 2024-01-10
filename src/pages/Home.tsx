import { Header } from '../common/Header';
import { Card } from '../components/Card';

export const Home: React.FC = () => {
	return (
		<>
			<Header />
			<main className='w-11/12 m-auto'>
				<section>
					<h1 className='md:text-4xl text-center font-bold'>
						A Hub of Utilities and Tools
					</h1>
					<p className='md:w-7/12 m-auto text-lg text-gray-600 mb-4 text-center'>
						A dedicated space that consolidates the utilities I use frequently.
						Welcome to a curated collection designed to make your tasks easier!
					</p>
				</section>
				<section className='grid gap-4 grid-cols-2 sm:grid-cols-4'>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
					<Card
						heading='Year Progress'
						para='Check How much year has been progressed'
					/>
				</section>
			</main>
		</>
	);
};
