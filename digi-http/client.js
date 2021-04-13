const http = require("http");

const option = {
  hostname: "localhost",
  path: "/todos",
  port: 8080,
  method: "GET",
};

const traiterTodo = (todos) => {
  todos.forEach((todo) => {
    console.log(`${todo.nom} ${todo.done ? "est terminé" : "est en cours"}`);
  });
};

const req = http.request(option, (repEmitter) => {
  let reponse = "";
  repEmitter.on("data", (data) => console.log(`${data}`));
  repEmitter.on("end", () => console.log('end'));
});

req.end();
