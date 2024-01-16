import { Button } from '../components/Button';

export const SideBar = () => {
	return (
		<aside className='flex flex-col items-center border h-screen w-1/4 bg-stone-300'>
			<h2>Your Goals</h2>
			<Button title='Add Goal' />
		</aside>
	);
};
