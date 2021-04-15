const { useState } = require("react");

const FormAuthent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const connectHandler = () => {
      fetch('/login', {method:'POST', headers: {'content-type':'application/json'}, body: JSON.stringify({login,password})})
      .then((reponse) => reponse.json())
      .then((reponse) => reponse.token ? setMessage('Connecté'): setMessage('oups'))
  };

  return (
      <div>
      <label>
        Login :
        <input value={login} onChange={(e) => setLogin(e.target.value)}></input>
      </label>
      <label>
        Mot de passe :
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
      </label>
      <button onClick={connectHandler}>Connecter</button>
      {message}
      </div>
  );
};

export default FormAuthent;
