import { Card } from '../components/Card';
import toolsInfo from '../data/toolsInfo.json';

console.log(toolsInfo);

export const Home: React.FC = () => {
	return (
		<>
			<main className='w-11/12 m-auto flex flex-col gap-8 max-w-7xl'>
				<section>
					<h1 className='text-xl md:text-4xl text-center font-bold mb-4'>
						A Hub of Utilities and Tools
					</h1>
					<p className='text-justify md:w-7/12 m-auto text-lg text-gray-600 mb-4 md:text-center'>
						A dedicated space that consolidates the utilities I use frequently.
						Welcome to a curated collection designed to make your tasks easier!
					</p>
				</section>
				<section className='grid gap-4 grid-cols-2 sm:grid-cols-4'>
					{toolsInfo.map((item, index) => (
            <Card
							key={index}
							heading={item.title}
							para={item.info}
							appRoute={item.appRoute}
						/>
					))}
				</section>
			</main>
		</>
	);
};
