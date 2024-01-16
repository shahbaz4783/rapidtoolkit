export const Textarea: React.FC<Textarea> = ({ cols, rows, children }) => {
	return (
		<textarea
			cols={cols}
			rows={rows}
			className='p-3 flex-1 md:text-lg font-bold antialiased focus:outline-none focus:border-blue-500 text-blue-800 bg-slate-100 resize-none'
		>
			{children}
		</textarea>
	);
};
