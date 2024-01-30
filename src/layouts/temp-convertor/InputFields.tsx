import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { useState } from 'react';

export const InputFields = () => {
	const [formValues, setFormValues] = useState({
		celsius: '',
		fahrenheit: '',
		kelvin: '',
	});

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const fd = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(fd.entries());
		const temperatureValue = Number(data.value);

		switch (data.unit) {
			case 'celsius': {
				const fahrenheit = (temperatureValue * 9) / 5 + 32;
				const kelvin = temperatureValue + 273.15;

				setFormValues({
					celsius: temperatureValue.toFixed(2),
					fahrenheit: fahrenheit.toFixed(2),
					kelvin: kelvin.toFixed(2),
				});
				break;
			}

			case 'fahrenheit': {
				const celsius = ((temperatureValue - 32) * 5) / 9;
				const kelvin = celsius + 273.15;

				setFormValues({
					celsius: celsius.toFixed(2),
					fahrenheit: temperatureValue.toFixed(2),
					kelvin: kelvin.toFixed(2),
				});
				break;
			}

			case 'kelvin': {
				const celsius = temperatureValue - 273.15;
				const fahrenheit = (celsius * 9) / 5 + 32;

				setFormValues({
					celsius: celsius.toFixed(2),
					fahrenheit: fahrenheit.toFixed(2),
					kelvin: temperatureValue.toFixed(2),
				});
				break;
			}

			default:
				break;
		}

		const inputElement = form.elements.namedItem('value') as HTMLInputElement;
		if (inputElement) {
			inputElement.value = '';
		}
	};

	return (
		<>
			<form
				className='flex flex-col gap-6 border-8 rounded-xl p-4 w-full md:w-1/3'
				onSubmit={submitHandler}
			>
				<Label htmlFor='unit' title='Select temperature unit' />
				<select name='unit' id='unit' className='border p-2'>
					<option value='celsius'>Celsius</option>
					<option value='fahrenheit'>Fahrenheit</option>
					<option value='kelvin'>Kelvin</option>
				</select>
				<Input
					type='number'
					name='value'
					step='0.001'
					placeholder='Enter temperature'
				/>
				<Button title='Convert' />
			</form>
			{formValues.celsius && (
				<article className='border p-4 w-full md:w-1/3 bg-slate-100'>
					<div className='flex justify-between'>
						<span className='text-xl'>Celsius</span>
						<span className='text-xl font-mono font-bold'>
							{formValues.celsius} °C
						</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-xl'>Fahrenheit</span>
						<span className='text-xl font-mono font-bold'>
							{formValues.fahrenheit} °F
						</span>
					</div>
					<div className='flex justify-between'>
						<span className='text-xl'>Kelvin</span>
						<span className='text-xl font-mono font-bold'>
							{formValues.kelvin} &nbsp;K
						</span>
					</div>
				</article>
			)}
		</>
	);
};
