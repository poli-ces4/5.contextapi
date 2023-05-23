import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
const App = () => {
	return (
		<Container>
			<Header />
			<MovieList />
		</Container>
	);
};

export default App;
