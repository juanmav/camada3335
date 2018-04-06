const request = require('request');

request('https://jsonplaceholder.typicode.com/posts/20', function (err, response, body) {
    let data = JSON.parse(body);
    console.log(data);
    let userId = data.userId;
    console.log(userId);

    request('https://jsonplaceholder.typicode.com/users/' + userId, function (err, response, body) {
        let user = JSON.parse(body);
        console.log(user);
    })

});