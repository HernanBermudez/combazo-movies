import axios from 'axios';
import React from 'react';
import Carousel from '../components/Carousel';
import useMovies from '../hooks/useMovies';

const Home = () => {
	const { trending } = useMovies();
	const posters = Object.values(trending).map(info => info.poster_path);
	console.log(trending);
	return (
		<>
			<div className='text-4xl'>Home desde componente</div>
			<Carousel data={posters} />
		</>
	);
};

export default Home;

