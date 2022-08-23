var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'id': '543513289703',
  'message': 'https://www.youtube.com/watch?v=15afJNJxwyc' 
});
var config = {
  method: 'post',
  url: 'localhost:3333/message/text?key=9cce88f4-23b4-4f1b-b23d-5e29efad7b73',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});