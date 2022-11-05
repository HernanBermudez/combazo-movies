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
				sx={{
					minWidth: 230,
					maxHeight: 175,
					marginRight: 1,
				}}
			>
				<CardMedia
					component='img'
					alt=''
					image={data}
					height='24'
					onClick={linkToMovie}
				></CardMedia>
			</Card>
		</Grid>
	);
};

export default CardImage;

