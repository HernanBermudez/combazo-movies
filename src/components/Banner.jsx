import { Card, CardMedia } from '@mui/material';
import getRandomContent from '../helpers/getRandomContent';
import getBackdrops from '../services/getBackdrops';

const Banner = ({ data, trailers }) => {
	const backdrops = getBackdrops(data);
	const randomContent = getRandomContent(data);
	console.log(trailers);

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

