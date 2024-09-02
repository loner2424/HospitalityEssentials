import Hero from '../sections/Hero';
import Awards from '../sections/Awards';
import GetInTouch from '../sections/GetInTouch';
import Clients from '../sections/Clients';
import Overview from '../sections/Overview';
import Services from '../sections/Services';

const Home = () => {
	return (
		<>
			<Hero />
			<Overview />
			<Services />
			<Clients />
			<Awards />
			<GetInTouch />
		</>
	);
};

export default Home;