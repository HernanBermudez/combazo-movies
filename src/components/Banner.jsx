import { Card, CardMedia } from '@mui/material';
const Banner = ({ data }) => {
	return (
		<Card sx={{ position: 'static', minWidth: 'full' }}>
			<CardMedia
				component='iframe'
				src={data[Math.floor(Math.random() * data.length)]}
				title='Trailer'
				height={600}
			/>
		</Card>
	);
};

export default Banner;

