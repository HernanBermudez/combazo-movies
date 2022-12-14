import { Card, CardMedia } from '@mui/material';
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
		<Card sx={{ display: 'flex-shrink', minWidth: '230px', marginRight: 1 }}>
			<CardMedia
				component='img'
				alt=''
				image={data}
				onClick={linkToMovie}
			></CardMedia>
		</Card>
	);
};

export default CardImage;

