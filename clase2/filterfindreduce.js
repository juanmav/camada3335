let posts = require('./posts');


let filtrados = posts.filter(function (post) {
    return post.userId === 1;
});

//console.log(posts.length);
//console.log(filtrados.length);

let filtrados2 = posts.filter(function (post) {
    return post.title.length > 40;
});

console.log(filtrados2.length);

let filtrado3 = posts.filter(function (post) {
   return post.title === 'eveniet quod temporibus';
});

//console.log(filtrado3[0]);

let post = posts.find(function (post) {
    return post.title === 'eveniet quod temporibus';
});

//console.log(post);

let sumaIds = posts.reduce((acc, post) => {
    console.log('post.id ' + post.id);
    console.log('acc'+ acc);
    return acc + post.id; // imaginar que el id es una edad.
},0);

console.log(sumaIds / posts.length);

// concat, some, every, slice, splice.