import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const Back = () => {
	return <Link to={'/'} className='text-3xl text-blue-500'><FaArrowLeft /></Link>;
};
