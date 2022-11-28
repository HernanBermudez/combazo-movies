import { Card, CardMedia } from '@mui/material';
import getContentId from '../helpers/getContentId';
import getRandomContent from '../helpers/getRandomContent';
import getBackdrops from '../services/getBackdrops';
import getTrailers from '../services/getTrailers';

const Banner = ({ data }) => {
	const trailers = getTrailers(data);
	const backdrops = getBackdrops(data);
	const randomContent = getRandomContent(data);

	return (
		<Card sx={{ position: 'static', minWidth: 'full' }}>
			<CardMedia component='img' alt='' image={backdrops[randomContent]} />
			<CardMedia
				component='iframe'
				src={trailers[randomContent]}
				title='Trailer'
				height={600}
				loading={'lazy'}
			/>
		</Card>
	);
};

export default Banner;

