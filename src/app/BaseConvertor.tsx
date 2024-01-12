import { Button } from '../components/Button';
import { Main } from '../components/Main';
import { NumInput } from '../components/NumInput';

export const BaseConvertor: React.FC = () => {
	return (
		<>
			<Main title='Base Convertor'>
				<form action=''>
					<NumInput placeholder='Enter a Number' />
					<Button title='Convert' />
				</form>
			</Main>
		</>
	);
};
