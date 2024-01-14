import { calculateInvestmentValue } from "../utils/financeCalculation";
import { ListWrapper } from "./ListWrapper";
import { totalReturns } from "../utils/financeCalculation";

export const InvestmentResult: React.FC<Result> = ({ input }) => {
	const result = calculateInvestmentValue(
		input.monthlySIP,
		input.ROI,
		input.duration
	);

	const returns = totalReturns(result.totalGain, result.totalInvestment);

	const formatNumber = (value: number) => {
		return new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
	};

	return (
		<section className='border bg-blue-800 rounded-xl p-6 flex flex-col gap-6'>
			<article className='flex flex-col gap-3'>
				<h2 className='text-center text-white text-xl font-semibold'>
					Future value of your <span className='text-red-300'>investment</span>
				</h2>
				<p className='text-center text-white font-bold text-3xl'>
					{formatNumber(result.totalValue)}
				</p>
			</article>
			<article className='flex justify-between'>
				<div className='border-8 rounded-full border-slate-300 p-6 bg-slate-50'>
					<p className='text-xl font-bold text-center'>
						{Math.round(returns) + '%'}
					</p>
					<h1 className='text-lg text-center'>Returns</h1>
				</div>
				<div className='flex flex-col gap-4'>
					<ListWrapper
						field='Invested Amount'
						value={formatNumber(result.totalInvestment)}
					/>
					<ListWrapper
						field='Estimated Returns'
						value={formatNumber(result.totalGain)}
					/>
				</div>
			</article>
		</section>
	);
};
