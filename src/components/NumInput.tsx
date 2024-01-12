interface Input {
	placeholder: string;
	value?: number;
}
export const NumInput: React.FC<Input> = ({ placeholder, ...props }) => {
	return (
		<input
			type='number'
			className='p-2 border'
			placeholder={placeholder}
			{...props}
		/>
	);
};
