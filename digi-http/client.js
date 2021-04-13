const http = require("http");

const option = {
  path: "/todos",
  port: 8080,
  method: 'POST'
};

const traiterTodo = (todos) => {
  todos.forEach((todo) => {
    console.log(`${todo.nom} ${todo.done ? "est terminé" : "est en cours"}`);
  });
};

const req = http.request(option, (repEmitter) => {
  let reponse = "";
  repEmitter.on("data", (data) => (reponse += data));
  repEmitter.on("end", () => traiterTodo(JSON.parse(reponse)));
});

req.end();
