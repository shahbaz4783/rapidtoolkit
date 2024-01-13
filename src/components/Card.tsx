import { Link } from 'react-router-dom';

export const Card: React.FC<HomeCard> = ({ heading, para, appRoute }) => {
	return (
		<Link
			to={appRoute}
			className='rounded p-3 bg-blue-200 transition-all hover:bg-blue-600 hover:text-white cursor-pointer'
		>
			<h2 className='text-xl font-semibold'>{heading}</h2>
			<p className='text-md'>{para}</p>
		</Link>
	);
};
