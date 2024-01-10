import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { YearProgress } from "./app/year-progress/Index";
import { Root } from "./pages/Root";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/year-progress', element: <YearProgress /> },
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
