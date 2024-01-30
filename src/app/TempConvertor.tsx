import { Main } from '../components/wrapper/Main';
import { InputFields } from '../layouts/temp-convertor/InputFields';

export const TempConvertor: React.FC = () => {
	return (
		<>
			<Main title='Temperature Convertor'>
				<div className='md:w-4/5 md:m-auto flex flex-col gap-10 h-screen items-center justify-center'>
          <InputFields />
				</div>
			</Main>
		</>
	);
};
