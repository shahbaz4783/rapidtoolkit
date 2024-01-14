interface Input {
	placeholder?: string;
	value?: number;
	id?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// interface InputFieldFunction {
// 	onChangeProp?: (field: string, value: string) => void;
// }

interface InputFieldFunction {
	onChangeProp?: any;
	userInput?: any;
}
