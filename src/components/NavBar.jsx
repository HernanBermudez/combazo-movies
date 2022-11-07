import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardMedia, ListItemButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Notifications } from '@mui/icons-material';

const TabPanel = props => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const a11yProps = index => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
};

const BasicTabs = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='pl-8'>
				<Tabs
					variant='fullWidth'
					textColor='white'
					value={value}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<img src='src/assets/Netflix.png' alt='' width={115}></img>
					<Tab label='Inicio' {...a11yProps(0)} />
					<Tab label='Series' {...a11yProps(1)} />
					<Tab label='Peliculas' {...a11yProps(2)} />
					<Tab label='Novedades populares' {...a11yProps(1)} />
					<Tab label='Mi lista' {...a11yProps(2)} />
					<Tab label='Explora por idiomas' {...a11yProps(1)} />
					<Tab sx={{ paddingLeft: 50 }} icon={<SearchIcon />} />
					<Tab icon={<Notifications />} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</Box>
	);
};

export default BasicTabs;

