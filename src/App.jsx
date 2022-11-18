import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesProvider';
import ExploreByLanguage from './pages/ExploreByLanguage';
import Home from './pages/Home';
import Latest from './pages/Latest';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import Search from './pages/Search';
import Series from './pages/Series';

const App = () => {
	return (
		<div className='bg-[rgb(20,20,20)] text-white'>
			<MoviesProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							<Route path='/series' element={<Series />} />
							<Route path='/movies' element={<Movies />} />
							<Route path='/latest' element={<Latest />} />
							<Route path='/my-list' element={<MyList />} />
							<Route path='/original-audio' element={<ExploreByLanguage />} />
							<Route path='/search/:content' element={<Search />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</MoviesProvider>
		</div>
	);
};

export default App;

