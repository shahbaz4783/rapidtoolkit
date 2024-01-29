interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string;
	value?: number;
	id?: string;
	type?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Textarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	cols: number;
	rows: number;
}

interface InputFieldFunction {
	onChangeProp?: any;
	userInput?: any;
	investmentType: string;
	onInvestmentTypeChange: (type: string) => void;
}
