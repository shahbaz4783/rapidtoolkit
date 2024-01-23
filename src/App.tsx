import { Home } from "./pages/Home";
import { YearProgresser } from './app/YearProgresser';
import { InvestmentCalculator } from './app/InvestmentCalculator';
import { BaseConvertor } from './app/BaseConvertor';
import { Error } from './pages/Error';
import { Root } from './pages/Root';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
