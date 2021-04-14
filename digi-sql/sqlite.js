const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("digi.db");

const todos = [
  { description: "Faire les courses", done: false },
  { description: "Prendre un café", done: true },
];

db.serialize(function () {
  // Création de la table
  db.run("CREATE TABLE todo (description TEXT, done BOOLEAN)");

  // Ecriture en base
  let statement = db.prepare("INSERT INTO todo VALUES (?, ?)");
  todos.forEach((todo) => statement.run(todo.description, todo.done));
  statement.finalize();

  // Lecture
  db.each("SELECT rowid AS id, description, done FROM todo", (err, row) =>
    console.log(row.id + ": " + row.description, !!row.done)
  );
});

db.close();
