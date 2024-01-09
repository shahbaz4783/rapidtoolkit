import logo from '../assets/favicon.png'

export const Header = () => {
  return (
		<header className='flex border-2 border-red-500 justify-between align-middle'>
			<article className='flex gap-2'>
				<img src={logo} alt='Rapid ToolKit' />
				<h2 className='text-3xl'>RapidToolKit</h2>
			</article>
			<nav>
				<button>Contact</button>
			</nav>
		</header>
	);
}
