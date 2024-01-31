import { Main } from '../components/wrapper/Main';
import { DOBPicker } from '../layouts/age-calculator/DOBPicker';

export const AgeCalculator: React.FC = () => {
	return (
		<>
			<Main title='Age Calculator'>
				<div className='md:w-4/5 md:m-auto flex flex-col gap-10 h-screen items-center justify-center'>
					<DOBPicker />
				</div>
			</Main>
		</>
	);
};
