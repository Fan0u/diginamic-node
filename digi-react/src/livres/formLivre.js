import { useState } from "react";

const FormLivre = ({ onChange }) => {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [message, setMessage] = useState("");

  const post = () => {
    fetch("/livres", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ titre, auteur }),
    }).then(() => {
      setMessage("Livre sauvé");
      onChange();
    });
  };

  return (
    <div>
      <label htmlFor="titre">Titre : </label>
      <input
        name="titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <label htmlFor="auteur">Auteur : </label>
      <input
        name="auteur"
        value={auteur}
        onChange={(e) => setAuteur(e.target.value)}
      />
      <button onClick={() => post()}>Envoyer</button>
      {message}
    </div>
  );
};

export default FormLivre;
