interface Card {
	heading: string;
	para: string;
}

export const Card: React.FC<Card> = ({ heading, para }) => {
	return (
		<article className='rounded p-3 bg-blue-200 transition-all hover:bg-blue-600 hover:text-white cursor-pointer'>
			<h2 className="text-xl font-semibold">{heading}</h2>
			<p className="text-md">{para}</p>
		</article>
	);
};
