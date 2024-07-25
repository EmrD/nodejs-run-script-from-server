const axios = require('axios');

axios.get('http://localhost:5000/api/message')
  .then(response => {
    const messageFunction = new Function(response.data.message);
    messageFunction();
  })
  .catch(error => {
    console.error('Error while making API request:', error);
  });
