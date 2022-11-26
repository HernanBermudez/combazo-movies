import { Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import getRandomContent from '../helpers/getRandomContent';
import getBackdrops from '../services/getBackdrops';

const Banner = ({ data, trailers }) => {
	const backdrops = getBackdrops(data);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const randomContent = getRandomContent(data);

	// const timer = setTimeout(() => {
	// 	setLoading(false);
	// 	return clearTimeout(timer);
	// }, 5000);

	// if (isLoading) {
	// 	return (
	// 		trailers && (
	// 			<Card sx={{ position: 'static', minWidth: 'full' }}>
	// 				<CardMedia component='img' alt='' image={backdrops[randomContent]} />
	// 			</Card>
	// 		)
	// 	);
	// }
	return (
		trailers && (
			<Card sx={{ position: 'static', minWidth: 'full' }}>
				<CardMedia
					component='iframe'
					src={trailers[randomContent]}
					title='Trailer'
					height={600}
					loading={'lazy'}
				/>
				<CardMedia component='img' alt='' image={backdrops[randomContent]} />
			</Card>
		)
	);
};

export default Banner;

