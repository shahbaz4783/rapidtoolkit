import { Main } from "../components/Main";
import { InvestmentInputField } from '../components/InvestmentInputField';
import { useState } from "react";
import { InvestmentResult } from "../components/InvestmentResult";

export const InvestmentCalculator: React.FC = () => {
	const [userInput, setUserInput] = useState({
		monthlySIP: 1000,
		ROI: 12,
		duration: 2,
	});

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
			<InvestmentInputField userInput={userInput} onChange={handleChange} />
			<InvestmentResult input={userInput} />
		</Main>
	);
};
