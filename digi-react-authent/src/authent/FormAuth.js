import { useState } from "react";
import { Form, Button, Input } from "antd";

const FormAuthent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const connectHandler = () => {
    fetch("/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ login, password }),
    })
      .then((reponse) => reponse.json())
      .then((reponse) =>
        reponse.token ? setMessage("Connecté") : setMessage("oups")
      );
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  return (
    <Form {...layout}>
      <Form.Item label={"Login"}>
        <Input value={login} onChange={(e) => setLogin(e.target.value)}/>
      </Form.Item>
      <Form.Item label={"Mot de passe"}>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" onClick={connectHandler}>Connecter</Button>
      {message}
    </Form>
  );
};

export default FormAuthent;
