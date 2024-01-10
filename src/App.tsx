import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { YearProgress } from "./app/year-progress/Index";

const router = createBrowserRouter([
	{path: '/', element: <Home />},
	{path: '/year-progress', element: <YearProgress /> }
])

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
