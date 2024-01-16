interface Input {
	placeholder?: string;
	value?: number;
	id?: string;
	type: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Textarea {
	children: React.ReactNode;
	cols: number;
	rows: number;
}

// interface InputFieldFunction {
// 	onChangeProp?: (field: string, value: string) => void;
// }

interface InputFieldFunction {
	onChangeProp?: any;
	userInput?: any;
	investmentType: string;
	onInvestmentTypeChange: (type: string) => void;
}
