const http = require("http");
const fs = require("fs");
let hom = "";
let proj = "";
let reg = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  hom = home;
});

fs.readFile("project.html", (err, project) => {
    if (err) {
      throw err;
    }
    proj = project;
  });

  fs.readFile("registration.html", (err, regi) => {
    if (err) {
      throw err;
    }
    reg = regi;
  });

  const args = require("minimist")(process.argv);

  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(proj);
        response.end();
        break;
        case "/registration":
        response.write(reg);
        response.end();
        break;
      default:
        response.write(hom);
        response.end();
        break;
    }
  })
  .listen(args["port"]);
