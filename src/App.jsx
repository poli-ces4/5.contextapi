import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { MoviesProvider } from './context/MoviesContext';
import { UserProvider } from './context/UserContext';

const App = () => {
	return (
		<Container>
			<UserProvider>
				<Header />
				<MoviesProvider>
					<MovieList />
				</MoviesProvider>
			</UserProvider>
		</Container>
	);
};

export default App;
