import { calculateInvestmentValue } from "../utils/financeCalculation";
import { ListWrapper } from "./ListWrapper";

export const InvestmentResult: React.FC<Result> = ({ input }) => {

	const result = calculateInvestmentValue(
		input.monthlySIP,
		input.ROI,
		input.duration
	);

  const formatNumber = (value: number) => {
		return new Intl.NumberFormat(undefined, {
			style: 'currency',
			currency: 'INR',
		}).format(value);
	};

	return (
		<section className='flex-1'>
			<ListWrapper
				field='Total Invested'
				value={formatNumber(result.totalInvestment)}
			/>
			<ListWrapper
				field='Est. Returns'
				value={formatNumber(result.totalGain)}
			/>
			<ListWrapper
				field='Total Value:'
				value={formatNumber(result.totalValue)}
			/>
		</section>
	);
};
