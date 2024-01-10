import { Outlet } from 'react-router';
import { Header } from '../common/Header';

export const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
