import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { UserProvider } from './context/UserContext';

const App = () => {
	return (
		<Container>
			<UserProvider>
				<Header />
				<MovieList />
			</UserProvider>
		</Container>
	);
};

export default App;
