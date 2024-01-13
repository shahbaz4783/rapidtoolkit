import { NumInput } from './NumInput';

export const InvestmentInputField: React.FC<InputField> = ({ userInput, onChange }) => {
	return (
		<section className='md:w-4/12'>
			<article className='flex justify-between'>
				<label htmlFor='sip'>Monthly SIP</label>
				<NumInput
					value={userInput.monthlySIP}
					onChange={(e) => onChange('monthlySIP', e.target.value)}
					id='sip'
				/>
			</article>
			<article className='flex justify-between'>
				<label htmlFor='roi'>Expected Return (p.a)</label>
				<NumInput
					value={userInput.ROI}
					onChange={(e) => onChange('ROI', e.target.value)}
					id='roi'
				/>
			</article>
			<article className='flex justify-between'>
				<label htmlFor='duration'>Duration</label>
				<NumInput
					value={userInput.duration}
					onChange={(e) => onChange('duration', e.target.value)}
					id='duration'
				/>
			</article>
		</section>
	);
};
