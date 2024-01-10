import logo from '../assets/favicon.png';
import { Button } from '../components/Button';

export const Header = () => {
	return (
		<header>
			<section className='w-11/12 my-2 m-auto flex justify-between align-middle'>
				<article className='flex gap-2'>
					<img src={logo} alt='Rapid ToolKit' />
          <div className='flex align-middle'>
					  <h2 className='text-xl font-mono leading-0'>RapidToolKit</h2>
          </div>
				</article>
				<nav>
					<Button title='Contact' />
				</nav>
			</section>
		</header>
	);
};
