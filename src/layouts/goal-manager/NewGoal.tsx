import { Label } from '../../components/ui/Label';
import { Input } from '../../components/ui/Input';
import { InputWrapper } from '../../components/wrapper/InputWrapper';
import { Textarea } from '../../components/ui/Textarea';
import { SwitchWrapper } from '../../components/wrapper/SwitchWrapper';
import { Switch } from '../../components/ui/Switch';

export const NewGoal = () => {
	return (
			<dialog className='border flex flex-col gap-4 p-4'>
				<div>
					<Label htmlFor='title' title='Title'></Label>
					<InputWrapper>
						<Input type='text' />
					</InputWrapper>
				</div>
				<div>
					<Label htmlFor='description' title='Description'></Label>
					<InputWrapper>
						<Textarea cols={30} rows={5}>
							hello
						</Textarea>
					</InputWrapper>
				</div>
				<div>
					<Label htmlFor='due' title='Due Date'></Label>
					<InputWrapper>
						<Input type='date' />
					</InputWrapper>
				</div>
				<SwitchWrapper>
					<Switch title='Add' />
					<Switch title='Cancel' />
				</SwitchWrapper>
			</dialog>
	);
};
