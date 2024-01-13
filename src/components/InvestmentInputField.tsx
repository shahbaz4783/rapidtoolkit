import { NumInput } from "./NumInput";
export const InvestmentInputField = () => {
  return (
		<section className='md:w-4/12'>
			<article className='flex justify-between'>
				<label htmlFor=''>Monthly SIP</label>
				<NumInput />
			</article>
			<article className='flex justify-between'>
				<label htmlFor=''>Expected Return (p.a)</label>
				<NumInput />
			</article>
			<article className='flex justify-between'>
				<label htmlFor=''>Duration</label>
				<NumInput />
			</article>
		</section>
	);
}
