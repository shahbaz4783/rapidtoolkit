import { Button } from '../../components/ui/Button';

export const NoneSelection: React.FC<{onAddGoal: () => void}> = ({ onAddGoal }) => {
	return (
		<div className='flex-1 flex items-center flex-col pt-20 gap-3 text-center'>
			<h2 className='font-bold text-xl text-gray-600'>No goal selected</h2>
			<p className='text-lg text-gray-400'>
				Select a goal or get started with a new one
			</p>
			<Button onClick={onAddGoal} title='Create a new goal' />
		</div>
	);
};
