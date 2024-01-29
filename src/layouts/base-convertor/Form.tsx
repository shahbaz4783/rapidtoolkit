import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useState, useRef } from 'react';
import { BaseOptions } from "./BaseOptions";

export const Form = () => {
	const [fromBase, setfromBase] = useState(10);
	const [toBase, settoBase] = useState(16);
	const [enteredNum, setEnteredNum] = useState('');
	
	const number = useRef<HTMLInputElement | null>(null);

	const handleFromOption = (event: any) => {
		setfromBase(event.target.value);
	};

	const handleToOption = (event: any) => {
		settoBase(event.target.value);
	};
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const userInput = number.current?.value;
		const res = parseInt(userInput || '0', fromBase).toString(toBase);
		setEnteredNum(res);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-10 w-2/3'>
				<BaseOptions
					onHandleFromProp={handleFromOption}
					onHandleToProp={handleToOption}
				/>
				<Input placeholder='Enter a Number' ref={number} required />
				<Button title='Convert' />
			</form>
			<h1 className='font-serif text-3xl text-center'>{enteredNum}</h1>
		</>
	);
};
