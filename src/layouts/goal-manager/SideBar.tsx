import { Button } from '../../components/ui/Button';

export const SideBar: React.FC<{ onAddGoal: () => void; goals: any }> = ({
	onAddGoal,
	goals,
}) => {
	console.log('console', goals);
	return (
		<aside className='flex flex-col items-start p-4 md:h-full md:w-1/4 bg-gray-600'>
			<div className='flex flex-col gap-2'>
			<h2 className='text-2xl text-gray-50'>Your Goals</h2>
			<Button onClick={onAddGoal} title='New Goal' />
			</div>
			<ul className='flex flex-col w-full mt-4'>
				{goals.map((goal: any) => (
					<li
						className='text-stone-50 p-2 capitalize cursor-pointer hover:bg-gray-700'
						key={goal.id}
					>
						{goal.title}
					</li>
				))}
			</ul>
		</aside>
	);
};
