import { Progress } from "../../components/ui/Progress";

export const CurrentYearPercentage: React.FC<{year: number, percentage: number}> = ({year, percentage}) => {
  return (
		<section className='text-center flex flex-col gap-3 items-center'>
			<h1 className='font-extrabold text-7xl text-blue-600'>{year}</h1>
			<p className='text-xl font-semibold text-sky-600 font-serif'>{percentage.toFixed(7)}%</p>
			<Progress value={percentage} max={100} />
		</section>
	);
}
