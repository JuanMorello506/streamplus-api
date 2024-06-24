# streamplus-api

PRUEBAS PARA TESTEAR API 


USER

curl --location --request POST 'http://localhost:8080/streamplus/user/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName": "nombre",
    "password": "pass",
    "mail": "mail@mail.com"
}'

curl --location --request POST 'http://localhost:8080/streamplus/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "password": "pass",
    "mail": "mail@mail.com"
}'

_____________________________________________________________________________________________________

MOVIE

curl --location --request GET 'http://localhost:8080/streamplus/movie/'

curl --location --request POST 'http://localhost:8080/streamplus/movie/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Parásitos",
    "director": "Bong Joon-ho",
    "year": "2019-05-30T00:00:00.000Z",
    "img": "https://image.tmdb.org/t/p/original/5uz9Se5HBxxPdJY38rPfyWUyjDZ.jpg",
    "categoryId": "DR"
}'

_____________________________________________________________________________________________________

COMMENT

curl --location --request GET 'http://localhost:8080/streamplus/comment/'

curl --location --request GET 'http://localhost:8080/streamplus/comment/movie/2/user/1'

curl --location --request POST 'http://localhost:8080/streamplus/comment/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "comment": "A",
    "rating": 4,
    "userId": 1,
    "movieId": 3
}'

_____________________________________________________________________________________________________

CATEGORY

curl --location --request GET 'http://localhost:8080/streamplus/category/'