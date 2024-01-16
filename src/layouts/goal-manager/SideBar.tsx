import { Button } from '../../components/ui/Button';

export const SideBar = () => {
	return (
		<aside className='flex flex-col items-center h-full w-1/4 bg-stone-300'>
			<h2 className='text-2xl text-stone-800'>Your Goals</h2>
			<Button title='New Goal' />
		</aside>
	);
};
