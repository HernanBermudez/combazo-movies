import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { trendingUrlAll, trendingUrlTv } from '../utils/trendingURL';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [series, setSeries] = useState([]);
	const [imagenes, setImagenes] = useState([]);
	const [trending, setTrending] = useState({});
	const [trendingTv, setTrendingTv] = useState({});

	useEffect(() => {
		const consultarTrending = async () => {
			try {
				const { data } = await axios(trendingUrlAll);
				data.results.type = 'Trending';
				setTrending(data.results);
			} catch (error) {
				console.log(error);
			}
		};
		consultarTrending();
		const consultarTrendingTv = async () => {
			try {
				const { data } = await axios(trendingUrlTv);
				data.results.type = 'Series';
				setTrendingTv(data.results);
			} catch (error) {
				console.log(error);
			}
		};
		consultarTrendingTv();
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
				consultarPeliculas,
				consultarSeries,
				consultarImagen,
				trending,
				trendingTv,
			}}
		>
			{children}
		</MoviesContext.Provider>
	);
};

export { MoviesProvider };

export default MoviesContext;

