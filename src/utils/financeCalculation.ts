export const calculateInvestmentValue = (
	monthlySIP: number,
	annualRate: number,
	durationInYears: number
): InvestmentResult => {
	const n = 12;
	const r = annualRate / (n * 100);
	const t = durationInYears * n;

	const totalInvestment = monthlySIP * t;
	const totalValue = monthlySIP * ((Math.pow(1 + r, t) - 1) / r);
	const totalGain = totalValue - totalInvestment;

	return {
		totalInvestment,
		totalGain,
		totalValue,
	};
};
