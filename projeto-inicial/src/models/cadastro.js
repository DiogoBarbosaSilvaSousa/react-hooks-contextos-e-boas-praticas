function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"Senha deve ter o mínimo de 4 até o máximo de 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}

function validarNome(nome){
    if(nome.length < 4 || nome.length > 72){
      return {valido:false, texto:"Nome deve ter o mínimo de 4 até o máximo de 72 caracteres."}
    }else{
      return {valido:true, texto:""}
    }
}


export {validarCPF, validarSenha, validarNome};