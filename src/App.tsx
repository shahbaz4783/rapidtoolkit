import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { YearProgresser } from './app/YearProgresser';
import { Root } from './pages/Root';
import { Error } from './pages/Error';
import { BaseConvertor } from './app/BaseConvertor';
import { InvestmentCalculator } from './app/InvestmentCalculator';
import { GoalManager } from "./app/GoalManager";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/year-progress', element: <YearProgresser /> },
			{ path: '/base-convertor', element: <BaseConvertor /> },
			{ path: '/investment-calculator', element: <InvestmentCalculator /> },
			{ path: '/goal-manager', element: <GoalManager /> },
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
