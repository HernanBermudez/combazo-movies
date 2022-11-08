import { Card, CardMedia } from '@mui/material';
import React from 'react';
import TMDB from '../config/TMDB';

const CardImage = ({ data }) => {
	const linkToMovie = () => {
		window.open(
			TMDB.images.base_url.toString() + data.toString(),
			'_blank',
			'noopener,noreferrer'
		);
	};
	return (
		<Card className='flex-shrink min-w-[230px] mr-1'>
			<CardMedia
				component='img'
				alt=''
				image={data}
				height='24'
				onClick={linkToMovie}
			></CardMedia>
		</Card>
	);
};

export default CardImage;

