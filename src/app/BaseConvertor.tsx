import { Button } from '../components/ui/Button';
import { Main } from '../components/wrapper/Main';
import { Input } from '../components/ui/Input';
export const BaseConvertor: React.FC = () => {
	return (
		<>
			<Main title='Base Convertor'>
				<form action=''>
					<Input type='number' placeholder='Enter a Number' />
					<Button title='Convert' />
				</form>
			</Main>
		</>
	);
};
