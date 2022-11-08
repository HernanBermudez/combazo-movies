import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import getTrendingAll from '../services/getTrendingAll';
import getTrendingMovies from '../services/getTrendingMovies';
import getTrendingSeries from '../services/getTrendingSeries';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [series, setSeries] = useState([]);
	const [imagenes, setImagenes] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState({});
	const [trendingSeries, setTrendingSeries] = useState({});
	const [trendingAll, setTrendingAll] = useState({});

	useEffect(() => {
		getTrendingMovies()
			.then(data => setTrendingMovies(data))
			.catch(error => console.log(error));

		getTrendingSeries()
			.then(data => setTrendingSeries(data))
			.catch(error => console.log(error));

		getTrendingAll()
			.then(data => setTrendingAll(data))
			.catch(error => console.log(error));

		return console.log('Render');
	}, []);

	const consultarPeliculas = async data => {
		try {
			const urlPeliculas = ``;
		} catch (error) {
			console.log(error);
		}
	};
	const consultarSeries = () => {
		try {
			const urlSeries = ``;
		} catch (error) {
			console.log(error);
		}
	};

	const consultarImagen = async data => {
		try {
			setImagenes(await axios(baseUrlImage + data.poster_path));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<MoviesContext.Provider
			value={{
				trendingMovies,
				trendingSeries,
				trendingAll,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

export { MoviesProvider };

export default MoviesContext;

