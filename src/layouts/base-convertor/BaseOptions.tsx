import { Label } from '../../components/ui/Label';

export const BaseOptions = () => {
	return (
		<>
			<section className='flex '>
				<div className='flex flex-1 flex-col gap-2'>
					<Label htmlFor='from' title='From' />
					<select name='' id='from' className='border p-2 rounded-s-lg '>
						<option value='2'>Binary</option>
						<option value='8'>Octal</option>
						<option value='10'>Decimal</option>
						<option value='16'>Hexadecimal</option>
					</select>
				</div>

				<div className='flex flex-1 flex-col gap-2'>
					<Label htmlFor='to' title='To' />
					<select name='' id='to' className='border p-2 rounded-e-lg'>
						<option value='2'>Binary</option>
						<option value='16'>Hexadecimal</option>
						<option value='8'>Octal</option>
						<option value='10'>Decimal</option>
					</select>
				</div>
			</section>
		</>
	);
};
