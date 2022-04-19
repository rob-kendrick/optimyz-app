import apiService from '../services/apiservice.ts';

const mockResult = {
  "Title": "Inception",
  "Year": "2010",
  "Rated": "PG-13",
  "Released": "16 Jul 2010",
  "Runtime": "148 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Christopher Nolan",
  "Writer": "Christopher Nolan",
  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
  "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
  "Language": "English, Japanese, French",
  "Country": "United States, United Kingdom",
  "Awards": "Won 4 Oscars. 157 wins & 220 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "8.8/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "87%"
      },
      {
          "Source": "Metacritic",
          "Value": "74/100"
      }
  ],
  "Metascore": "74",
  "imdbRating": "8.8",
  "imdbVotes": "2,251,332",
  "imdbID": "tt1375666",
  "Type": "movie",
  "DVD": "07 Dec 2010",
  "BoxOffice": "$292,587,330",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}


describe('API Fetching', () => {

  it('can fetch data successfully', async() => {
    const result = await apiService.getByTitle('inception')
    expect(result).toEqual(mockResult)

  });
});
