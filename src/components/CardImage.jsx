import { Grid, Card, CardMedia } from '@mui/material';
import React from 'react';
import baseUrlImages from '../utils/imagesURL';

const CardImage = ({ data }) => {
	const linkToMovie = () => {
		window.open(
			baseUrlImages.toString() + data.toString(),
			'_blank',
			'noopener,noreferrer'
		);
	};
	return (
		<Grid>
			<Card
				sx={{ maxWidth: 200, maxHeight: 100, marginRight: 1, marginTop: 10 }}
			>
				<CardMedia
					component='img'
					alt=''
					image={data}
					height='20'
					onClick={linkToMovie}
				></CardMedia>
			</Card>
		</Grid>
	);
};

export default CardImage;

