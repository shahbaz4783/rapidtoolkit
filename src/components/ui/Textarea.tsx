import { forwardRef } from 'react';

export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
	({ cols, rows, children, ...rest }, ref) => {
		return (
			<textarea
				ref={ref}
				cols={cols}
				rows={rows}
				className='p-3 flex-1 md:text-lg font-bold antialiased focus:outline-none focus:border-blue-500 text-blue-800 bg-slate-100 resize-none'
				{...rest}
			>
				{children}
			</textarea>
		);
	}
);
