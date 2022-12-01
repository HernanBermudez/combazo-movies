import { Card, CardMedia } from '@mui/material';
import { useEffect } from 'react';
import { trailerUrl } from '../helpers/constants';
import getBackdrops from '../services/getBackdrops';
import useMovies from '../hooks/useMovies';
import { useInView } from 'react-intersection-observer';
const Banner = ({ data, trailers }) => {
	const { random, transition, setTransition } = useMovies();
	const [ref, inView] = useInView({
		triggerOnce: false,
		marginRoot: '0px 0px',
	});
	const backdrops = getBackdrops(data);

	useEffect(() => {
		const handleTransition = setTimeout(() => {
			setTransition(false);
		}, 6000);
		return () => {
			setTransition(true);
			clearTimeout(handleTransition);
		};
	}, [inView]);

	return (
		<Card
			ref={ref}
			sx={{ position: 'static', minWidth: 'full', maxHeight: 600 }}
		>
			<>
				{transition === true ? (
					<CardMedia component='img' alt='' image={backdrops[random]} />
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
		</Card>
	);
};

export default Banner;

