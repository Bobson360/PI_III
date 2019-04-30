// const fetch = require('fetch')

// const URL_TO_FETCH = 'https://api-rest-pi3.herokuapp.com/';
// fetch(URL_TO_FETCH, {
//   method: 'get',
//   mode: 'cors' // opcional 
// })
// .then(function(response) { 
//   // use a resposta 
// })
// .catch(function(err) { 
//   console.error(err); 
// });

axios.get('https://api-rest-pi3.herokuapp.com/sensors/5cb61944b589a82e6853b89e')
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

//   axios.get('https://api-rest-pi3.herokuapp.com/')
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   }); 