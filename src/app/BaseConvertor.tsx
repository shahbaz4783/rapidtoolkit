import { Main } from '../components/wrapper/Main';
import { Form } from '../layouts/base-convertor/Form';

export const BaseConvertor: React.FC = () => {
	return (
		<>
			<Main title='Base Convertor'>
				<div className='md:w-4/5 md:m-auto flex flex-col gap-10 h-screen items-center justify-center'>
					<Form />
				</div>
			</Main>
		</>
	);
};
