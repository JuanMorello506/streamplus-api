import { Movie, Category, User, Comment } from "../Models/models.js";

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
		{ title: 'Avengers: Endgame', director: 'Anthony Russo, Joe Russo', year: 2019, categoryId: 'AC', img: 'https://m.media-amazon.com/images/S/pv-target-images/9cf37749b82c4ec7b45d450146f90ef670a07bebfb21d1d0b6a6cc69ff25e153.jpg' },
        { title: 'Joker', director: 'Todd Phillips', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/93605d6f3b14b7c6addfd28ffde1a4db2f7d320cf601a84a1d98c4d314f9de77.jpg' },
        { title: 'Spider-Man: Into the Spider-Verse', director: 'Peter Ramsey', year: 2018, categoryId: 'AN', img: 'https://m.media-amazon.com/images/S/pv-target-images/5d69cfd10b6c87f2cb49446f11a9005639b1218ff9d523834c1049902f65c00e.jpg' },
        { title: 'Coco', director: 'Lee Unkrich, Adrian Molina', year: 2017, categoryId: 'AN', img: 'https://m.media-amazon.com/images/S/pv-target-images/4f98599300823aa095df1a0949a32c168d45aea8f8ab2a86d1c43de9b97668fe.jpg' },
        { title: 'Get Out', director: 'Jordan Peele', year: 2017, categoryId: 'TE', img: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg' },
        { title: 'Black Panther', director: 'Ryan Coogler', year: 2018, categoryId: 'AC', img: 'https://m.media-amazon.com/images/I/61Q27P9v+9L._AC_UF894,1000_QL80_.jpg' },
        { title: 'Toy Story 4', director: 'Josh Cooley', year: 2019, categoryId: 'AN', img: 'https://m.media-amazon.com/images/S/pv-target-images/25badd4a4ca8fcf78d1603048a7a4fc03ccf20009ccf068f248319fd84d031c6.jpg' },
        { title: 'Blade Runner 2049', director: 'Denis Villeneuve', year: 2017, categoryId: 'CF', img: 'https://m.media-amazon.com/images/S/pv-target-images/524a3a67c650e55d693bcccb27055a623b18683587e8061abc34b98c636430b7.jpg' },
        { title: 'Mad Max: Fury Road', director: 'George Miller', year: 2015, categoryId: 'AC', img: 'https://m.media-amazon.com/images/S/pv-target-images/6e956b65847df2213f8fa9b83277bcfe405d62d0802ca62e83962633a7077d0a.jpg' },
        { title: 'Logan', director: 'James Mangold', year: 2017, categoryId: 'AC', img: 'https://m.media-amazon.com/images/S/pv-target-images/186474619095eb0b9005a5bceea506f9a5f897f90652abcab1ca0415c6a115e6.jpg' },
        { title: 'Whiplash', director: 'Damien Chazelle', year: 2014, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/bfa388f06e1d8411b7e03aa7e952b1a6833892bfe03d1378b93295c26eed3ac9.jpg' },
        { title: 'Her', director: 'Spike Jonze', year: 2013, categoryId: 'RO', img: 'https://m.media-amazon.com/images/S/pv-target-images/1f852aa78922a980d179b8623b99f2494292a273e20c47261ad3b381e4da3921.jpg' },
        { title: 'Inside Out', director: 'Pete Docter', year: 2015, categoryId: 'AN', img: 'https://m.media-amazon.com/images/S/pv-target-images/1dd14af9832f2b29a13e4be5376583037fc73a5c347d8a6fd3c274f3957ab27c.jpg' },
        { title: 'Moonlight', director: 'Barry Jenkins', year: 2016, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/0209bd991aa2e67c644e5374aacdd383fa3613187a78853fe0d1e35514db3619.jpg' },
        { title: 'Arrival', director: 'Denis Villeneuve', year: 2016, categoryId: 'CF', img: 'https://m.media-amazon.com/images/S/pv-target-images/c07aa356ee1ec5a4050b3dc7916f456b788051e37e119b29f01d29f78ab35378.jpg' },
        { title: 'Dunkirk', director: 'Christopher Nolan', year: 2017, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/26d3c3bd85e67cd9409bbc01c85240565c48b2b375798737273e91856eaaa6f4.jpg' },
        { title: '1917', director: 'Sam Mendes', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/bf49d560a26b1c7f988001ea1d5a8e107e15d34a32d8ae9fe2f6af6f2bda661f.jpg' },
        { title: 'The Irishman', director: 'Martin Scorsese', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/I/51FeGk38nWL._AC_UF1000,1000_QL80_.jpg' },
        { title: 'Marriage Story', director: 'Noah Baumbach', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/I/81NsChUZhmL._AC_UF894,1000_QL80_.jpg' },
        { title: 'Knives Out', director: 'Rian Johnson', year: 2019, categoryId: 'CO', img: 'https://m.media-amazon.com/images/S/pv-target-images/7d53ab07c2a9beacc8b268c50a0eef9d0b977a3c5b584e108e40a8f051e7c7bb.jpg' },
        { title: 'Little Women', director: 'Greta Gerwig', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/I/5159WiAkt3L._AC_UF1000,1000_QL80_.jpg' },
        { title: 'The Lighthouse', director: 'Robert Eggers', year: 2019, categoryId: 'TE', img: 'https://m.media-amazon.com/images/S/pv-target-images/a426e3104cdf23ba6c434b7aef9dd5ad126ac9ee3677fe6b009f490d18d83369.jpg' },
        { title: 'Once Upon a Time in Hollywood', director: 'Quentin Tarantino', year: 2019, categoryId: 'DR', img: 'https://m.media-amazon.com/images/S/pv-target-images/f94c1c759e4064266c6da1fadb2e082b095ffab8b65e46c42de225d6aff2fe63.jpg' }
    ];

	await Movie.bulkCreate(movies);
};

const userSeed = async () => {
	const users = [
		{ id: 1, userName: 'Diego Forlan', password: 'password123', mail: 'dforlan@gmail.com' },
		{ id: 2, userName: 'Leo Messi', password: 'password456', mail: 'lmessi@gmail.com' },
		{ id: 3, userName: 'Mateo Borja', password: 'password789', mail: 'mborja@gmail.com' },
		{ id: 4, userName: 'Martin Torres', password: 'password101', mail: 'mtorres@gmail.com' },
		{ id: 5, userName: 'Amparo Lux', password: 'password102', mail: 'alux@gmail.com' },
	];

	await User.bulkCreate(users);
};

const commentSeed = async () => {
	const comments = [
		{ id: 1, comment: '¡Gran película!', rating: 5, movieId: 1, userId: 1 },
		{ id: 2, comment: 'No está mal, pero podría ser mejor', rating: 3, movieId: 2, userId: 2 },
		{ id: 3, comment: 'Historia asombrosa', rating: 4, movieId: 3, userId: 3 },
		{ id: 4, comment: '¡Me encantan las escenas de acción!', rating: 5, movieId: 4, userId: 4 },
		{ id: 5, comment: 'Bastante aburrida', rating: 2, movieId: 5, userId: 5 },
		{ id: 6, comment: 'Una obra maestra', rating: 5, movieId: 6, userId: 1 },
		{ id: 7, comment: 'Bastante buena', rating: 4, movieId: 7, userId: 2 },
		{ id: 8, comment: 'Me encantó', rating: 5, movieId: 8, userId: 3 },
		{ id: 9, comment: 'Una jornada épica', rating: 5, movieId: 9, userId: 4 },
		{ id: 10, comment: 'No pude entrar en ella', rating: 2, movieId: 10, userId: 5 },
		{ id: 11, comment: '¡Aterradora!', rating: 4, movieId: 11, userId: 1 }
	];

	await Comment.bulkCreate(comments);
};


export const seedDatabase = async () => {
	await categorySeed();
	await movieSeed();
	await userSeed();
	await commentSeed();
};

seedDatabase().then(() => {
	console.log('Precarga con exito');
}).catch(error => {
	console.error('Precarga fallida:', error);
});