import { NumInput } from './NumInput';

export const InvestmentInputField: React.FC<InputFieldFunction> = ({
	userInput,
	onChangeProp,
}) => {
	return (
		<section className='md:w-4/12 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center flex-1 border-4 border-slate-300 rounded-xl p-6'>
			<article className='flex flex-col'>
				<label className='flex-1' htmlFor='sip'>
					Investment Type
				</label>
				<div className='flex items-center flex-1 px-1 border border-gray-200 rounded-md'>
					<span>SIP</span>
					<span>Lumpsum</span>
				</div>
			</article>

			<article className='flex flex-col'>
				<label className='flex-1' htmlFor='sip'>
					Monthly SIP
				</label>
				<div className='flex items-center flex-1 px-4 border border-gray-200 rounded-md'>
					<span>₹</span>
					<NumInput
						value={userInput.monthlySIP}
						onChange={(e) => onChangeProp('monthlySIP', e.target.value)}
						id='sip'
					/>
				</div>
			</article>

			<article className='flex flex-col'>
				<label className='flex-1' htmlFor='roi'>
					Expected Return (p.a)
				</label>
				<div className='flex items-center flex-1 px-1 border border-gray-200 rounded-md'>
					<NumInput
						value={userInput.ROI}
						onChange={(e) => onChangeProp('ROI', e.target.value)}
						id='roi'
					/>
					<span>%</span>
				</div>
			</article>

			<article className='flex flex-col'>
				<label className='flex-1' htmlFor='duration'>
					Duration
				</label>
				<div className='flex items-center flex-1 px-1 border border-gray-200 rounded-md'>
					<NumInput
						value={userInput.duration}
						onChange={(e) => onChangeProp('duration', e.target.value)}
						id='duration'
					/>
					<span>{userInput.duration >= 2 ? 'years' : 'year'}</span>
				</div>
			</article>
		</section>
	);
};
