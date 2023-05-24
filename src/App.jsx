import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
import UserContext from './context/UserContext';
const App = () => {
	const user = { name: 'Gioavnny' };
	const data = { user };
	return (
		<Container>
			<UserContext.Provider value={data}>
				<Header />
			</UserContext.Provider>
			<MovieList />
		</Container>
	);
};

export default App;
