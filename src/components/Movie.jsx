import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Movie = ({ movie }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={movie.imageURL}
					alt={movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{movie.title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					Favorite
				</Button>
			</CardActions>
		</Card>
	);
};

export default Movie;
