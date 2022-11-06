import { MoviesProvider } from './context/MoviesProvider';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
	return (
		<MoviesProvider>
			<header className='py-10 items-center'>
				<h1>NETFLIX</h1>
			</header>
			<Home />
		</MoviesProvider>
	);
};

export default App;

