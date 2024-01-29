import { FC } from 'react';
import { Label } from '../../components/ui/Label';

interface BaseOptions {
	onHandleFromProp: any;
	onHandleToProp: any;
}

export const BaseOptions: FC<BaseOptions> = ({
	onHandleFromProp,
	onHandleToProp,
}) => {
	return (
		<>
			<section className='flex '>
				<div className='flex flex-1 flex-col gap-2'>
					<Label htmlFor='from' title='From' />
					<select
						id='from'
						className='border p-2 rounded-s-lg'
						onChange={onHandleFromProp}
					>
						<option value='2'>Binary</option>
						<option value='8'>Octal</option>
						<option value='10' selected>
							Decimal
						</option>
						<option value='16'>Hexadecimal</option>
					</select>
				</div>

				<div className='flex flex-1 flex-col gap-2'>
					<Label htmlFor='to' title='To' />
					<select
						id='to'
						className='border p-2 rounded-e-lg'
						onChange={onHandleToProp}
					>
						<option value='2'>Binary</option>
						<option value='16' selected>
							Hexadecimal
						</option>
						<option value='8'>Octal</option>
						<option value='10'>Decimal</option>
					</select>
				</div>
			</section>
		</>
	);
};
