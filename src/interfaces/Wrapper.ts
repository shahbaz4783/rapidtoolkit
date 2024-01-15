interface Main {
	title: string;
	children: React.ReactNode;
}

interface ListWrapper {
  field: string
  value: string
}

interface InputWrapper {
	children: React.ReactNode;
}

interface LabelProps {
	title: string;
	htmlFor: string;
}