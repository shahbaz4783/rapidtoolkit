interface btn {
	title: string;
}

export const Button: React.FC<btn> = ({ title }) => {
	return (
		<button className='p-3 px-6 bg-black text-white cursor-pointer hover:bg-slate-800 transition-all rounded	'>
			{title}
		</button>
	);
};
