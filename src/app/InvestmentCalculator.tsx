import { Main } from "../components/Main";
import { InvestmentInputField } from '../components/InvestmentInputField';

export const InvestmentCalculator: React.FC = () => {
	return (
		<Main title='Investment Calculator'>
			<InvestmentInputField />
		</Main>
	);
};
