export const Switch: React.FC<Button> = ({ title, isActive, ...props }) => {
	return (
		<button
			{...props}
			className={`flex-1 p-3 px-6 cursor-pointer transition-all ${
				isActive ? 'bg-stone-300 text-blue-800 font-bold ' : 'hover:bg-stone-200'
			}`}
		>
			{title}
		</button>
	);
};
