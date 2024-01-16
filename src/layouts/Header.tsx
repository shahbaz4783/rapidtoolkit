import { Link } from 'react-router-dom';
import logo from '../assets/favicon.png';
import { Button } from '../components/ui/Button';

export const Header = () => {
	return (
		<header className='mb-8'>
			<section className='w-11/12 my-2 m-auto flex justify-between align-middle'>
				<Link to={'/'} className='flex gap-2'>
					<div className='flex flex-col justify-center'>
						<img src={logo} alt='Rapid ToolKit' />
					</div>
					<div className='flex flex-col justify-center'>
						<h2 className='text-xl font-mono leading-0'>Rapid ToolKit</h2>
					</div>
				</Link>
				<Link to={'/contact'}>
					<Button title='Contact' />
				</Link>
			</section>
		</header>
	);
};
