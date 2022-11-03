import React from 'react';
import { CarouselMovies } from '../components/Carousel';

const Home = () => {
	return (
		<>
			<div className='text-4xl'>Home desde componente</div>
			<CarouselMovies />;
		</>
	);
};

export default Home;

