let posts = require('./posts.js');


let nuevos = posts.map(function (post) {
    let newPost = Object.assign({}, post);
    let titleUpper = newPost.title.toUpperCase();
    newPost.title = titleUpper;
    return newPost;
});

console.log(posts[0]);
console.log(nuevos[0]);

