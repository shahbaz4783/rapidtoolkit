export const ListWrapper: React.FC<ListWrapper> = ({ field, value }) => {
	return (
		<div>
			<h2 className='text-xl'>{field}</h2>
			<p className='text-3xl font-bold text-blue-600'>{value}</p>
		</div>
	);
};
