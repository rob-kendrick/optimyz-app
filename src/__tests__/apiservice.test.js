
const mockResult = {
  "Title": "Monsters, Inc.",
  "Year": "2001",
  "Rated": "G",
  "Released": "02 Nov 2001",
  "Runtime": "92 min",
  "Genre": "Animation, Adventure, Comedy",
  "Director": "Pete Docter, David Silverman, Lee Unkrich",
  "Writer": "Pete Docter, Jill Culton, Jeff Pidgeon",
  "Actors": "Billy Crystal, John Goodman, Mary Gibbs",
  "Plot": "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Won 1 Oscar. 15 wins & 38 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.1/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "96%"
      },
      {
          "Source": "Metacritic",
          "Value": "79/100"
      }
  ],
  "Metascore": "79",
  "imdbRating": "8.1",
  "imdbVotes": "879,470",
  "imdbID": "tt0198781",
  "Type": "movie",
  "DVD": "17 Sep 2002",
  "BoxOffice": "$290,642,256",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}


describe('API Fetching', () => {

  it('can fetch data successfully', async() => {

    const response = await fetch('http://www.omdbapi.com/?apikey=5181cd60&t=inception')
    const result = response.json()
    .then(res => {
      exexpect(res).toEqual(mockResult);
    })
    .catch(e => e)
  });
});