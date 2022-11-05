import { Tabs } from '@mui/material';
import baseUrlImages from '../utils/imagesURL';
import CardImage from './CardImage';

const CarouselCards = ({ data }) => {
	return (
		<>
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
			<div className='w-full flex space-x-5 overflow-x-scroll p-10 pt-48 snap-x snap-mandatory'>
				{/* <Grid container className=''> */}
				{Object.values(data).map((poster, index) => {
					return (
						<CardImage data={baseUrlImages + poster} key={index}></CardImage>
					);
				})}
				{/* </Grid> */}
			</div>
		</>
	);
};

export default CarouselCards;

