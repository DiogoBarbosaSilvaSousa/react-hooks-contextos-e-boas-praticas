import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({cep,endereco,numero,estado,cidade});
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
            setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        type="number"
      />

     <TextField
        value={endereco}
        onChange={(event) => {
            setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereco"
        variant="outlined"
        margin="normal"
        fullWidth
        type="text"
      />

      <TextField
        value={numero}
        onChange={(event) => {
            setNumero(event.target.value);
        }}
        id="numero"
        label="Numero"
        variant="outlined"
        margin="normal"
        type="number"
      />

      <TextField
        value={estado}
        onChange={(event) => {
            setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        variant="outlined"
        margin="normal"
        type="text"
      />

      <TextField
        value={cidade}
        onChange={(event) => {
            setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        variant="outlined"
        margin="normal"
        type="text"
      />


      <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
    </form>
  );
}

export default DadosEntrega;
