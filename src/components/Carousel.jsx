import { Grid, Tabs } from '@mui/material';
import TMDB from '../config/TMDB';
import CardImage from './CardImage';

const Carousel = ({ data }) => {
	const posters = Object.values(data).map(info => info.backdrop_path);
	posters.pop();
	const title = data.type;
	return (
		<>
			<div className='text-xl font-semibold pl-10 pb-2 pt-10'>{title}</div>
			{/* <Grid
				container
				className='w-full flex space-x-5 overflow-x-scroll p-10 pt-48 snap-x snap-mandatory'
			> */}
			<Tabs
				value={0}
				variant='scrollable'
				scrollButtons
				allowScrollButtonsMobile
				//aria-label='scrollable force tabs example'
			>
				{Object.values(posters).map((poster, index) => {
					return (
						<CardImage
							data={TMDB.images.base_url + TMDB.images.backdrop.w300 + poster}
							key={index}
						></CardImage>
					);
				})}
			</Tabs>
			{/* </Grid> */}
		</>
	);
};

export default Carousel;

