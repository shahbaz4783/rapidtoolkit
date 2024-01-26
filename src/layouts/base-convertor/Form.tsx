import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export const Form = () => {
	return (
		<form action=''>
			<Input type='number' placeholder='Enter a Number' />
			<Button title='Convert' />
		</form>
	);
};
