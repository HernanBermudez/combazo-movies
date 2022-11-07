import { MoviesProvider } from './context/MoviesProvider';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
	return (
		<div className='bg-[rgb(20,20,20)] text-white'>
			<MoviesProvider>
				<Home />
			</MoviesProvider>
		</div>
	);
};

export default App;

