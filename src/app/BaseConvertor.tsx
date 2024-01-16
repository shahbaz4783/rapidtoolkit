import { Button } from '../components/ui/Button';
import { Main } from '../components/wrapper/Main';
import { NumInput } from '../components/ui/NumInput';

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
