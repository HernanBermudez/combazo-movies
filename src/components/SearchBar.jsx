import SearchIcon from '@mui/icons-material/Search';
import useMovies from '../hooks/useMovies';
import searchContent from '../services/searchContent';
import { useNavigate } from 'react-router-dom';
import stylesSearchBar from '../helpers/stylesSearchBar';
import { routes } from '../helpers/constants';

const SearchBar = () => {
	const { StyledInputBase, SearchIconWrapper, Search } = stylesSearchBar();
	const { setSearch } = useMovies();
	const navigate = useNavigate();

	const handleSearch = searchRequest => {
		searchRequest.preventDefault();
		setTimeout(() => {
			searchContent(searchRequest.target.value)
				.then(data => setSearch(data))
				.catch(error => console.log(error));
			navigate(`${routes[6]} + ${searchRequest.target.value}`);
		}, 3000);

		return searchRequest;
	};

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				inputProps={{ 'aria-label': 'search' }}
				placeholder='  Titles, people, genres'
				onChange={handleSearch}
			/>
		</Search>
	);
};

export default SearchBar;

