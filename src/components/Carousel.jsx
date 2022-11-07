import { Tabs } from '@mui/material';
import baseUrlImages from '../utils/imagesURL';
import CardImage from './CardImage';

const Carousel = ({ data }) => {
	const posters = Object.values(data).map(info => info.backdrop_path);
	const title = data.type;
	return (
		<>
			<div className='text-xl font-semibold pl-10 pb-2 pt-10'>{title}</div>
			<Tabs
				value={0}
				variant='scrollable'
				scrollButtons
				allowScrollButtonsMobile
				aria-label='scrollable force tabs example'
			>
				{Object.values(posters).map((poster, index) => {
					return (
						<CardImage data={baseUrlImages + poster} key={index}></CardImage>
					);
				})}
			</Tabs>
		</>
	);
};

export default Carousel;

