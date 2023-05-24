import { createContext, useState } from 'react';

const UserContext = createContext();

const initialUser = { id: 1, name: 'Giovanny', moviesFavorites: [1, 4] };

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(initialUser);
	const login = () => {
		setUser(initialUser);
	};
	const logout = () => {
		setUser(null);
	};
	const favoriteMovieToUser = movieId => {
		alert(movieId);
	};
	const data = { user, login, logout, favoriteMovieToUser };
	return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
