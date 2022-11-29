import { Card, CardMedia } from '@mui/material';
import { useRef } from 'react';
import { trailerUrl } from '../helpers/constants';
import useIsInViewport from '../hooks/useIsInViewport';
import getBackdrops from '../services/getBackdrops';
import useMovies from '../hooks/useMovies';
const Banner = ({ data, trailers }) => {
	const { transition, setTransition, random } = useMovies();
	const ref1 = useRef(null);

	const isInViewport1 = useIsInViewport(ref1);
	console.log('isInViewport1: ', isInViewport1);

	const handleTransition = () => {
		setTimeout(() => {
			setTransition(true);
		}, 4000);
		return setTransition(false);
	};
	const backdrops = getBackdrops(data);

	return (
		<Card ref={ref1} sx={{ position: 'static', minWidth: 'full' }}>
			{isInViewport1 && (
				<>
					{transition === false ? (
						<CardMedia
							component='img'
							alt=''
							image={backdrops[random]}
							onMouseMove={handleTransition}
						/>
					) : (
						<CardMedia
							component='iframe'
							src={trailerUrl[0] + trailers[random] + trailerUrl[1]}
							title='Trailer'
							height={600}
							loading={'lazy'}
						/>
					)}
				</>
			)}
		</Card>
	);
};

export default Banner;

