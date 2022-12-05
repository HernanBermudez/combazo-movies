import { Grid, Tabs } from '@mui/material';
import TMDB from '../config/TMDB';
import getPosters from '../services/getPosters';
import CardImage from './CardImage';

const Carousel = ({ data, search, latest }) => {
	const { posters, title } = getPosters(data);
	return (
		<>
			{search ? (
				<>
					<div className='text-xl font-semibold pl-10 pb-2 pt-10'>{title}</div>
					<Grid container className='flex pl-20 gap-y-10  '>
						{Object.values(posters).map((poster, index) => {
							return (
								<CardImage
									data={TMDB.images.base_url + TMDB.images.poster.w300 + poster}
									key={index}
								></CardImage>
							);
						})}
					</Grid>
				</>
			) : latest ? (
				<>
					<div className='text-xl font-semibold pl-10 pb-2 pt-10'>{title}</div>
					<Tabs
						value={0}
						variant='scrollable'
						scrollButtons
						allowScrollButtonsMobile
					>
						{Object.values(posters).map((poster, index) => {
							return (
								<CardImage
									data={TMDB.images.base_url + TMDB.images.poster.w300 + poster}
									key={index}
								></CardImage>
							);
						})}
					</Tabs>
				</>
			) : (
				<div className='-translate-y-36'>
					<div className='text-xl font-semibold pl-10 pb-2 pt-10'>{title}</div>
					<Tabs
						value={0}
						variant='scrollable'
						scrollButtons
						allowScrollButtonsMobile
					>
						{Object.values(posters).map((poster, index) => {
							return (
								<CardImage
									data={TMDB.images.base_url + TMDB.images.poster.w300 + poster}
									key={index}
								></CardImage>
							);
						})}
					</Tabs>
				</div>
			)}
		</>
	);
};

export default Carousel;

