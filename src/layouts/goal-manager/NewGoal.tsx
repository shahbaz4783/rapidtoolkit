import { Label } from '../../components/ui/Label';
import { Input } from '../../components/ui/Input';
import { InputWrapper } from '../../components/wrapper/InputWrapper';
import { Textarea } from '../../components/ui/Textarea';
import { SwitchWrapper } from '../../components/wrapper/SwitchWrapper';
import { Switch } from '../../components/ui/Switch';
import { useRef } from 'react';

export const NewGoal: React.FC<{ onAdd: any; onCancel: any }> = ({
	onAdd,
	onCancel,
}) => {
	const titleRef = useRef<HTMLInputElement | null>(null);
	const dueRef = useRef<HTMLInputElement | null>(null);
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

	const handleSave = () => {
		const enteredTitle = titleRef.current?.value;
		const enteredDescription = descriptionRef.current?.value;
		const enteredDue = dueRef.current?.value;
		onAdd({
			title: enteredTitle,
			description: enteredDescription,
			due: enteredDue,
		});
	};

	return (
		<dialog className='border flex flex-col gap-4 p-4'>
			<div>
				<Label htmlFor='title' title='Title'></Label>
				<InputWrapper>
					<Input ref={titleRef} type='text' />
				</InputWrapper>
			</div>
			<div>
				<Label htmlFor='description' title='Description'></Label>
				<InputWrapper>
					<Textarea ref={descriptionRef} cols={30} rows={5}></Textarea>
				</InputWrapper>
			</div>
			<div>
				<Label htmlFor='due' title='Due Date'></Label>
				<InputWrapper>
					<Input ref={dueRef} type='date' />
				</InputWrapper>
			</div>
			<SwitchWrapper>
				<Switch onClick={handleSave} title='Add' />
				<Switch onClick={onCancel} title='Cancel' />
			</SwitchWrapper>
		</dialog>
	);
};
