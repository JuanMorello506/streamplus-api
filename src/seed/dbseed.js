import { Movie, Category } from "../Models/models.js";

const categorySeed = async () => {
	const categories = [
		{ id: 'AC', name: "Acción" },
		{ id: 'CO', name: "Comedia" },
		{ id: 'DR', name: "Drama" },
		{ id: 'TE', name: "Terror" },
		{ id: 'DO', name: "Documental" },
		{ id: 'CF', name: "Ciencia Ficción" },
		{ id: 'RO', name: "Romance" },
		{ id: 'MU', name: "Musical" },
		{ id: 'AN', name: "Animación" },
		{ id: 'FA', name: "Fantasía" },
	];

	await Category.bulkCreate(categories);
};

const movieSeed = async () => {
	const movies = [
		{ title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994, categoryId: 'DR', img: 'https://i.pinimg.com/736x/a8/39/7d/a8397dcfdf56fc342c3712a91e186575.jpg' },
		{ title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, categoryId: 'AC', img: 'https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1200.jpg' },
		{ title: 'The Godfather: Part II', director: 'Francis Ford Coppola', year: 1974, categoryId: 'AC', img: 'https://i.ebayimg.com/images/g/RAMAAOSwYHVj8lr6/s-l1600.jpg' },
		{ title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, categoryId: 'AC', img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg' },
		{ title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994, categoryId: 'CO', img: 'https://m.media-amazon.com/images/I/718LfFW+tIL._AC_UF894,1000_QL80_.jpg' },
		{ title: 'Fight Club', director: 'David Fincher', year: 1999, categoryId: 'AC', img: 'https://i.pinimg.com/736x/91/43/7e/91437e40c778c43362378556bfd2c43f.jpg' },
		{ title: 'The Matrix', director: 'Lana Wachowski', year: 1999, categoryId: 'CF', img: 'https://i.ebayimg.com/images/g/QFQAAOSwAQpfjaA6/s-l1600.jpg' },
		{ title: 'Inception', director: 'Christopher Nolan', year: 2010, categoryId: 'AC', img: 'https://m.media-amazon.com/images/I/71uKM+LdgFL._AC_UF894,1000_QL80_.jpg' },
		{ title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', year: 2001, categoryId: 'FA', img: 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg' },
		{ title: 'The Lord of the Rings: The Two Towers', director: 'Peter Jackson', year: 2002, categoryId: 'FA', img: 'https://m.media-amazon.com/images/M/MV5BZTUxNzg3MDUtYjdmZi00ZDY1LTkyYTgtODlmOGY5N2RjYWUyXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg' },
		{ title: 'Pearl', director: 'Ti West', year: 2022, categoryId: 'TE', img: 'https://image.tmdb.org/t/p/original/h3b2KrlxYLSr4uqeY4Tn4KeGwAg.jpg' },
		{ title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', year: 2003, categoryId: 'FA', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodvoAQEG1k4rXlt41aUV5LmiyCuio8zvnvAMUz1n7cg&s' },
		{ title: 'Goodfellas', director: 'Martin Scorsese', year: 1990, categoryId: 'DR', img: 'https://i.pinimg.com/564x/b8/e7/60/b8e760c3cedffdf72efb7bef4f6ffe4e.jpg' },
		{ title: 'The Silence of the Lambs', director: 'Jonathan Demme', year: 1991, categoryId: 'DR', img: 'https://m.media-amazon.com/images/I/510sBwiR7SL._AC_UF894,1000_QL80_.jpg' },
		{ title: 'The Departed', director: 'Martin Scorsese', year: 2006, categoryId: 'DR', img: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg' },
		{ title: 'Gladiator', director: 'Ridley Scott', year: 2000, categoryId: 'AC', img: 'https://m.media-amazon.com/images/I/71sj8Yt20qL._AC_UF894,1000_QL80_DpWeblab_.jpg' },
		{ title: 'The Prestige', director: 'Christopher Nolan', year: 2006, categoryId: 'DR', img: 'https://i.pinimg.com/736x/4f/4d/fa/4f4dfabe5c46358c8d821bd2716e8186.jpg' },
		{ title: 'The Green Mile', director: 'Frank Darabont', year: 1999, categoryId: 'DR', img: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg' },
		{ title: 'The Lion King', director: 'Roger Allers', year: 1994, categoryId: 'AN', img: 'https://i.ebayimg.com/images/g/IogAAOSwd49i-5n8/s-l1200.jpg' },
		{ title: 'Inglourious Basterds', director: 'Quentin Tarantino', year: 2009, categoryId: 'AC', img: 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg' },
		{ title: 'The Avengers', director: 'Joss Whedon', year: 2012, categoryId: 'AC', img: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg' },
		{ title: 'The Social Network', director: 'David Fincher', year: 2010, categoryId: 'DR', img: 'https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
		{ title: 'Interstellar', director: 'Christopher Nolan', year: 2014, categoryId: 'CF', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRE8xZbi8r7ImwqImi3Wow7AoKwATmbFldLmtbbu5O9w&s' },
		{ title: 'The Dark Knight Rises', director: 'Christopher Nolan', year: 2012, categoryId: 'AC', img: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg' },
		{ title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994, categoryId: 'DR', img: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' },
		{ title: 'The Wolf of Wall Street', director: 'Martin Scorsese', year: 2013, categoryId: 'CO', img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg' },
		{ title: 'The Great Gatsby', director: 'Baz Luhrmann', year: 2013, categoryId: 'DR', img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/miniature-schnauzer-art-canvas-print-the-great-gatsby-movie-poster-sandra-sij.jpg' },
		{ title: 'The Revenant', director: 'Alejandro González Iñárritu', year: 2015, categoryId: 'AC', img: 'https://m.media-amazon.com/images/I/A1BjliXNDPL.jpg' },
		{ title: 'La La Land', director: 'Damien Chazelle', year: 2016, categoryId: 'MU', img: 'https://m.media-amazon.com/images/I/71-u32-oOaL._AC_UF894,1000_QL80_DpWeblab_.jpg' },
		{ title: "Parásitos", director: "Bong Joon-ho", year: 2019, categoryId: "DR", img: "https://image.tmdb.org/t/p/original/5uz9Se5HBxxPdJY38rPfyWUyjDZ.jpg" },
	];

	await Movie.bulkCreate(movies);
};


export const seedDatabase = async () => {
	await categorySeed();
	await movieSeed();
};

seedDatabase().then(() => {
	console.log('Precarga con exito');
}).catch(error => {
	console.error('Precarga fallida:', error);
});

