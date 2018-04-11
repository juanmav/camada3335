const request = require('request');

let url = 'https://jsonplaceholder.typicode.com/users/1';

/*request(url, function(err, response){
    let user = JSON.parse(response.body);
    console.log(user.name);
});*/

function requestPromise(url){
    return new Promise(function (resolve, reject) {
        request(url, function(err, response){
            if(err){
                reject(err)
            } else {
                resolve(JSON.parse(response.body));
            }
        })
    });
}

let promesa = requestPromise(url);

console.log(promesa);

promesa
    .then( user => console.log(user.name))
    .catch( err => console.log(err.message));
