import { calculateInvestmentValue } from "../utils/financeCalculation";

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
		<section>
			<div>
				<h2>Invested Amount:</h2>
				<p>{formatNumber(result.totalInvestment)}</p>
			</div>
			<div>
				<h2>Est. Returns:</h2>
				<p>{formatNumber(result.totalGain)}</p>
			</div>
			<div>
				<h2>Total Value:</h2>
				<p>{formatNumber(result.totalValue)}</p>
			</div>
		</section>
	);
};
