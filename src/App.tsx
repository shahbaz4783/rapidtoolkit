import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { YearProgress } from "./app/year-progress/Index";
import { Root } from "./pages/Root";
import { Error } from "./pages/Error";
import { BaseConvertor } from './app/base-convertor/Index';
import { InvestmentCalculator } from "./app/investment-calculator/Index";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/year-progress', element: <YearProgress /> },
			{ path: '/base-convertor', element: <BaseConvertor /> },
			{ path: '/investment-calculator', element: <InvestmentCalculator /> },
		],
	},
]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
