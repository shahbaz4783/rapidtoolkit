export const Input: React.FC<Input> = ({ type, ...props }) => {
	return (
		<input
			type={type}
			className='p-3 flex-1 md:text-lg font-bold antialiased focus:outline-none focus:border-blue-500 text-blue-800 bg-slate-100'
			{...props}
		/>
	);
};
