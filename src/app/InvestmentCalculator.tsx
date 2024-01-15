import { Main } from '../components/Main';
import { InvestmentInputField } from '../components/InvestmentInputField';
import { useState } from 'react';
import { InvestmentResult } from '../components/InvestmentResult';

export const InvestmentCalculator: React.FC = () => {
	const [userInput, setUserInput] = useState({
		monthlySIP: 5000,
		ROI: 8,
		duration: 5,
	});

	const [investmentType, setinvestmentType] = useState('SIP');

	const investmantToggle = (type: string) => {
		setinvestmentType(type);
	};


	const handleChange = (inputIdentifier: string, newValue: number) => {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	};
	return (
		<Main title='Investment Calculator'>
			<div className='md:w-4/5 md:m-auto flex flex-col md:flex-row gap-10 justify-between'>
				<InvestmentInputField
					userInput={userInput}
					onChangeProp={handleChange}
					investmentType={investmentType}
					onInvestmentTypeChange={investmantToggle}
				/>
				<InvestmentResult input={userInput} investmentType={investmentType} />
			</div>
		</Main>
	);
};
