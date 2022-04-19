import handleError from "../helper/apiError.ts";

const baseUrl = 'http://www.omdbapi.com/?apikey=5181cd60'

const apiService = {
  getByTitle: (title: string) => fetch(`${baseUrl}&t=${title}`)
    .then((response) => {
      if (response.status < 300) {
        const result =  response.json();
        console.log(result)
        return result;
      }
      throw Error('Server error');
    })
    .catch(handleError)
}


export default apiService;