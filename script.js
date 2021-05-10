function clicou() {
  let nome = document.getElementById("nome").value
  //let email = document.getElementById("email").value
  //let cpfCnpj = document.getElementById("cpfCnpj").value
  //let telefone = document.getElementById("telefone").value
  //let cep = document.getElementById("cep").value
  //let logradouro = document.getElementById("logradouro").value
  //let numero = document.getElementById("numero").value
  //let bairro = document.getElementById("bairro").value
  //let cidade = document.getElementById("cidade").value
  //let estado = document.getElementById("estado").value
  let res = document.getElementById("res").value

  res.innerHTML = `O nome é ${nome}`
}