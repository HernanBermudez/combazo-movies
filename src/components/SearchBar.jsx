import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useMovies from '../hooks/useMovies';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	// backgroundColor: alpha(theme.palette.common.white, 0.15),
	// '&:hover': {
	// 	backgroundColor: alpha(theme.palette.common.white, 0.25),
	// },
	marginLeft: 0,
	marginRight: 20,
	width: '100%',
	[theme.breakpoints.down('xl')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.down('xl')]: {
			width: '0.5px',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

const SearchBar = () => {
	const { setSearch } = useMovies();
	const navigate = useNavigate();

	const handleSearch = event => {
		setTimeout(() => {
			setSearch(event.target.value);
			// const datos = searchContent(search);
			// console.log(datos);
			navigate(`/search/${event.target.value}`);
		}, 3000);
	};
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				inputProps={{ 'aria-label': 'search' }}
				placeholder='Titles, people, genres'
				onChange={handleSearch}
			/>
		</Search>
	);
};

export default SearchBar;

