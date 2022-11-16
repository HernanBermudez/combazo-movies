import { Card, CardMedia } from '@mui/material';
import React from 'react';

const Banner = () => {
	return (
		<Card sx={{ position: 'static', minWidth: 'full' }}>
			<CardMedia
				component='iframe'
				src='https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1&controls=0&modestbranding=1&showinfo=0&end=60&rel=0'
				title='Wonderwoman Trailer'
				height={600}
			/>
		</Card>
	);
};

export default Banner;

