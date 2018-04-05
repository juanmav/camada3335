let posts = require('./posts.js');

console.log(posts.length);

/*let titulos = [];

for(let i = 0; i < posts.length; i++){
    titulos.push(posts[i].title);
}

console.log(titulos);

let titulos2 = [];

posts.forEach(post => titulos2.push(post.title));

console.log(titulos2);

*/

let titulos = posts.map(post => post.title);

console.log(titulos);



