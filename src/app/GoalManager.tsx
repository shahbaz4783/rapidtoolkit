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

  const handleAddGoal = (goalData: any) => {
		setGoalsState((prevState: any) => {
			const newGoal = {
				...goalData,
				id: Math.random(),
			};

			return {
				...prevState,
				goals: [...prevState.goals, newGoal],
			};
		});
	};

  console.log(goalsState.goals);

	let content;

	if (goalsState.selectedGoalId === undefined) {
		content = <NoneSelection onAddGoal={handleStartAddGoal} />;
	} else if (goalsState.selectedGoalId === null) {
		content = <NewGoal onAdd={handleAddGoal} />;
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
