import { Card, CardMedia } from '@mui/material';
import { trailerUrl } from '../helpers/constants';
import getRandomContent from '../helpers/getRandomContent';
import getBackdrops from '../services/getBackdrops';
const Banner = ({ data, trailers }) => {
	console.log(trailers);
	const backdrops = getBackdrops(data);
	const randomContent = getRandomContent(data);

	return (
		<Card sx={{ position: 'static', minWidth: 'full' }}>
			<CardMedia component='img' alt='' image={backdrops[randomContent]} />
			<CardMedia
				component='iframe'
				src={trailerUrl[0] + trailers[randomContent] + trailerUrl[1]}
				title='Trailer'
				height={600}
				loading={'lazy'}
			/>
		</Card>
	);
};

export default Banner;

