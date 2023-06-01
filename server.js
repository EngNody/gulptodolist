
var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath: './build',            // required, the root of the server file tree
  port: 1337,               // required, the port to listen
});

server.start(function () {
  console.log("http://127.0.0.1:5500/build/ToDoList.html");
  console.log("http://localhost:1337/")
  // console.log('Server listening to', server.port);

});






























// don`t works with me
// console.log("http://localhost:1337/")




// server.on('symbolicLink', function (link, file) {
//   // link is the source of the reference
//   // file is the link reference
//   // console.log('File', link, 'is a link to', file);
//   console.log('File', link, 'is a link to', file);

// });
















