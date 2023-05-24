import { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';
import Grid from '@mui/material/Grid';
import Movie from './Movie';

const MovieList = () => {
	const { movies } = useContext(MoviesContext);
	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			{movies.map(movie => (
				<Grid item xs={2} sm={4} md={4} key={movie.id}>
					<Movie movie={movie} />
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;
