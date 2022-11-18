import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Layout = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;

