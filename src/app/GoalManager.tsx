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

	const handleCancelAddGoal = () => {
		setGoalsState((prevState: any) => {
			return {
				...prevState,
				selectedGoalId: undefined,
			};
		});
	};

  const handleAddGoal = (goalData: any) => {
		setGoalsState((prevState: any) => {
      const goalId = Math.random()
			const newGoal = {
				...goalData,
				id: goalId,
			};

			return {
				...prevState,
        selectedGoalId: undefined,
				goals: [...prevState.goals, newGoal],
			};
		});
	};

  console.log(goalsState.goals);

	let content;

	if (goalsState.selectedGoalId === undefined) {
		content = <NoneSelection onAddGoal={handleStartAddGoal} />;
	} else if (goalsState.selectedGoalId === null) {
		content = <NewGoal onAdd={handleAddGoal} onCancel={handleCancelAddGoal} />;
	}

	return (
		<Main title='Goal Manager'>
			<div className='md:flex md:h-full gap-2'>
				<SideBar goals={goalsState.goals} onAddGoal={handleStartAddGoal} />
				{content}
			</div>
		</Main>
	);
};
