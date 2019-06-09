import axios from 'axios';
let codeWars_key = require('./keys');

// This pre-programs some of the configiration 
// export default axios.create({
//     baseURL: 'https://www.codewars.com/api/v1/users/ivoryblakk',
//     headers: {
//         Authorization: codeWars_key
//     }
// });


 export default axios({
    method: 'get',
    url: 'https://www.codewars.com/api/v1/users/ivoryblakk',
    headers: {
        Authorization: codeWars_key,
       "Access-Control-Allow-Origin": "http://localhost:3000"
        },
    responseType: 'json'
  })
    .then(function (response) {
     console.log(response)
    })
    .catch(function (error) {
    console.log(error);
      });