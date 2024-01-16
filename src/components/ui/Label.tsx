export const Label: React.FC<LabelProps> = ({ htmlFor, title }) => {
	return (
		<label
			htmlFor={htmlFor}
			className='flex-1 font-semibold antialiased text-stone-500'
		>
			{title}
		</label>
	);
};
