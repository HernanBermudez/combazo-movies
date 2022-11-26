import { Card, CardMedia } from '@mui/material';
import getRandomContent from '../helpers/getRandomContent';
import getBackdrops from '../services/getBackdrops';

const Banner = ({ data, trailers }) => {
	const backdrops = getBackdrops(data);
	const randomContent = getRandomContent(data);

	return (
		trailers && (
			<Card sx={{ position: 'static', minWidth: 'full' }}>
				<CardMedia
					component='iframe'
					src={trailers[0]}
					title='Trailer'
					height={600}
					loading={'lazy'}
				/>
				<CardMedia component='img' alt='' image={backdrops[0]} />
			</Card>
		)
	);
};

export default Banner;

