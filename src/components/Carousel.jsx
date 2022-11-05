import { Tabs } from '@mui/material';
import baseUrlImages from '../utils/imagesURL';
import CardImage from './CardImage';

const CarouselCards = ({ data }) => {
	return (
		<Tabs
			className='py-10'
			variant='scrollable'
			scrollButtons
			allowScrollButtonsMobile
			aria-label='scrollable force tabs example'
		>
			{Object.values(data).map((poster, index) => {
				return (
					<CardImage data={baseUrlImages + poster} key={index}></CardImage>
				);
			})}
		</Tabs>
	);
};

export default CarouselCards;

