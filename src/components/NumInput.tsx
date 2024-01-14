
export const NumInput: React.FC<Input> = ({ ...props }) => {
	return (
		<input
			type='number'
			className='p-3 focus:outline-none focus:border-blue-500 rounded-md'
			{...props}
		/>
	);
};
