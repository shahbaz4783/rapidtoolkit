import { Button } from '../../components/ui/Button';

export const SideBar: React.FC<{ onAddGoal: () => void }> = ({ onAddGoal }) => {
	return (
		<aside className='flex flex-col items-center h-full md:w-1/4 bg-gray-600'>
			<h2 className='text-2xl text-gray-50'>Your Goals</h2>
			<Button onClick={onAddGoal} title='New Goal' />
		</aside>
	);
};
