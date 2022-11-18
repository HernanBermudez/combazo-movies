import { useEffect } from 'react';

const MyList = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <div>MyList</div>;
};

export default MyList;

