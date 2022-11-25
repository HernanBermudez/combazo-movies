import { Card, CardMedia } from '@mui/material';
const Banner = ({ data }) => {
	return (
		data && (
			<Card sx={{ position: 'static', minWidth: 'full' }}>
				<CardMedia
					component='iframe'
					src={data[Math.floor(Math.random() * data.length)]}
					title='Trailer'
					height={600}
					loading={'lazy'}
				/>
			</Card>
		)
	);
};

export default Banner;

