import { Back } from './Back';

export const Main: React.FC<Main> = ({ title, children, ...props }) => {
	return (
		<main className='flex flex-col gap-8 w-11/12 m-auto' {...props}>
			<Back />
			<h1 className='text-5xl text-center font-serif italic'>{title}</h1>
			{children}
		</main>
	);
};
