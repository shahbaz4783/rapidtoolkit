import { Back } from '../ui/Back';

export const Main: React.FC<Main> = ({ title, children, ...props }) => {
	return (
		<main
			className='flex flex-col gap-8 h-screen w-11/12 m-auto py-10'
			{...props}
		>
			<Back />
			<h1 className='text-5xl text-center font-serif italic'>{title}</h1>
			{children}
		</main>
	);
};
