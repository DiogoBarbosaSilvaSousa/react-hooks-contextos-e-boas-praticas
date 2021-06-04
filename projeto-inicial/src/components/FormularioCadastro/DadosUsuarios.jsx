import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        required
      />

      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        required
      />

      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default DadosUsuario;
