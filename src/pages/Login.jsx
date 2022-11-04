import React from 'react';
import netflixImageUrl from '../utils/netflixImageURL';

const Login = () => {
	return (
		<div className='flex bg-[rgb(20,20,20)]'>
			<img src={netflixImageUrl} alt='Netflix Logo' />
		</div>
	);
};

export default Login;

