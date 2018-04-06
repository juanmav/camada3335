let rp = require('request-promise');

let promesa = rp('https://jsonplaceholder.typicode.com/posts/20');

promesa
    .then(function (result) {
        let post = JSON.parse(result);
        let promesa2 = rp('https://jsonplaceholder.typicode.com/users/' + post.userId);
        return promesa2;
    })
    .then(function (result2) {
        let user = JSON.parse(result2);
        console.log(user);

        // return rp(....adirecciones)
    })
    .catch(err => console.log(err));
    //.then()





/*
*
*
* */