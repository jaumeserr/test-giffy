import { API_KEY, API_URL } from './settings';

// New refactor
const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  //CHECK IF IS AN ARRAY
  if (Array.isArray(data)) {
    console.log("is an array");
    const gifsUrl = data.map((image) => {
      const { images, id, title } = image;
      const { url } = images.downsized_medium;
      return { id, title, url };
    });
    return gifsUrl;
  }
  //CASE NOT AN ARRAY
  return [];
}

const getGifs = ({limit = 10, keyword = "morty"} = {}) => {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}

export default getGifs;



// Original method

// export default function getGifs({ keyword = "morty" } = {}) {
//   const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

//   return fetch(apiURL)
//     .then((res) => res.json())
//     .then((response) => {
//       const { data } = response;
//       if (Array.isArray(data)) {
//         //CHECK IF IS AN ARRAY
//         console.log("is an array");
//         const gifsUrl = data.map((image) => {
//           const { images, id, title } = image;
//           const { url } = images.downsized_medium;
//           return { id, title, url };
//         });
//         return gifsUrl;
//       }
//     });
// }
