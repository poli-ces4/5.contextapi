import { Container } from '@mui/material';
import { useState } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import UserContext from './context/UserContext';

const initialUser = { id: 1, name: 'Giovanny' };

const App = () => {
	const [user, setUser] = useState(initialUser);
	const login = () => {
		setUser(initialUser);
	};
	const logout = () => {
		setUser(null);
	};
	const data = { user, login, logout };
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
