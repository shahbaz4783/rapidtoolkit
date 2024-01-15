export const InputWrapper: React.FC<InputWrapper> = ({
	children,
}) => {
	return (
		<div className='flex items-center flex-1 overflow-hidden rounded-md'>
			{children}
		</div>
	);
};
