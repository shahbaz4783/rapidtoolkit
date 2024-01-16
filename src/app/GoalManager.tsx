import { SideBar } from '../layouts/goal-manager/SideBar';
import { Main } from '../components/wrapper/Main';
import { NoneSelection } from '../layouts/goal-manager/NoneSelection';
import { useState } from 'react';
import { NewGoal } from '../layouts/goal-manager/NewGoal';

export const GoalManager = () => {
	const [goalsState, setGoalsState] = useState({
		selectedGoalId: undefined,
		goals: [],
	});

	const handleStartAddGoal = () => {
		setGoalsState((prevState: any) => {
			return {
				...prevState,
				selectedGoalId: null,
			};
		});
	};

	let content;

	if (goalsState.selectedGoalId === undefined) {
		content = <NoneSelection onAddGoal={handleStartAddGoal} />;
	} else if (goalsState.selectedGoalId === null) {
		content = <NewGoal />;
	}
  
	return (
		<Main title='Goal Manager'>
			<div className='flex h-full gap-2'>
				<SideBar onAddGoal={handleStartAddGoal} />
				{content}
			</div>
		</Main>
	);
};
