import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { useState, useRef } from 'react';
import { BaseOptions } from "./BaseOptions";

export const Form = () => {
	const [enteredNum, setEnteredNum] = useState('');
	const number = useRef<HTMLInputElement | null>(null);
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const userInput = number.current?.value;
		const res = parseInt(userInput || '0', 10).toString(2);
		setEnteredNum(res);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col gap-10 w-2/3">
				<BaseOptions />
				<Input placeholder='Enter a Number' ref={number} required/>
				<Button title='Convert' />
			</form>
			<h1 className='font-serif text-3xl text-center'>{enteredNum}</h1>
		</>
	);
};
