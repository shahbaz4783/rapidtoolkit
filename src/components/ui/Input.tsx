import {forwardRef} from 'react';

export const Input = forwardRef<HTMLInputElement, Input>(
	({type, ...props}, ref) => {
		return (
			<input
				type={type}
				ref={ref}
				className='p-3 w-full flex-1 md:text-lg font-bold antialiased focus:outline-none focus:border-blue-500 text-blue-800 bg-slate-100'
				{...props}
			/>
		);
	}
);
