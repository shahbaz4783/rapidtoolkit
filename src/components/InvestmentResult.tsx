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
		return new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: 'INR',
		}).format(value);
	};

	return (
		<section className='flex-1 border bg-blue-600 rounded-lg p-6'>
			<ListWrapper
				field='Future value of your investment'
				value={formatNumber(result.totalValue)}
			/>
			<ListWrapper
				field='Invested Amount'
				value={formatNumber(result.totalInvestment)}
			/>
			<ListWrapper
				field='Estimated Returns'
				value={formatNumber(result.totalGain)}
			/>
			<ListWrapper field='Returns' value={returns.toFixed(2) + '%'} />
		</section>
	);
};
